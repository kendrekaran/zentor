import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Environment variable validation
const requiredEnvVars = ['EMAIL_USER', 'EMAIL_PASSWORD'] as const;
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

// Input validation schema
const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number').optional(),
  interest: z.string().min(1, 'Please select an interest'),
  budget: z.string().min(1, 'Please select a budget range'),
  country: z.string().min(1, 'Please select a country'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;
const ipRequestMap = new Map<string, { count: number; timestamp: number }>();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Method validation
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      message: 'Method not allowed' 
    });
  }

  try {
    // Rate limiting check
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const currentTime = Date.now();
    const ipData = ipRequestMap.get(String(clientIp));

    if (ipData) {
      if (currentTime - ipData.timestamp < RATE_LIMIT_WINDOW) {
        if (ipData.count >= MAX_REQUESTS) {
          return res.status(429).json({ 
            success: false,
            message: 'Too many requests. Please try again later.' 
          });
        }
        ipData.count++;
      } else {
        ipData.count = 1;
        ipData.timestamp = currentTime;
      }
    } else {
      ipRequestMap.set(String(clientIp), { count: 1, timestamp: currentTime });
    }

    // Input validation
    const validatedData = ContactFormSchema.parse(req.body);

    // Email template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f4f4f4; padding: 20px; border-radius: 5px; }
            .content { margin-top: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
              <p>Received on: ${new Date().toLocaleString()}</p>
            </div>
            <div class="content">
              <div class="field">
                <p class="label">Name:</p>
                <p>${validatedData.name}</p>
              </div>
              <div class="field">
                <p class="label">Email:</p>
                <p>${validatedData.email}</p>
              </div>
              <div class="field">
                <p class="label">Phone:</p>
                <p>${validatedData.phone || 'Not provided'}</p>
              </div>
              <div class="field">
                <p class="label">Interest:</p>
                <p>${validatedData.interest}</p>
              </div>
              <div class="field">
                <p class="label">Budget Range:</p>
                <p>${validatedData.budget}</p>
              </div>
              <div class="field">
                <p class="label">Country:</p>
                <p>${validatedData.country}</p>
              </div>
              <div class="field">
                <p class="label">Message:</p>
                <p>${validatedData.message}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'aditya@zentor.in',
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: emailHtml,
      replyTo: validatedData.email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Clear old rate limit entries
    const hourAgo = Date.now() - RATE_LIMIT_WINDOW;
    for (const [ip, data] of ipRequestMap.entries()) {
      if (data.timestamp < hourAgo) {
        ipRequestMap.delete(ip);
      }
    }

    return res.status(200).json({ 
      success: true,
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Error processing contact form:', error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Invalid form data',
        errors: error.errors,
      });
    }

    return res.status(500).json({ 
      success: false,
      message: 'Error processing your request. Please try again later.' 
    });
  }
}