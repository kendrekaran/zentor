import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number').optional(),
  interest: z.string().min(1, 'Please select an interest'),
  budget: z.string().min(1, 'Please select a budget range'),
  country: z.string().min(1, 'Please select a country'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      interest: '',
      budget: '',
      country: '',
      message: '',
    },
  });

  const onSubmit = async (values: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
        variant: "default",
        className: "bg-green-500 text-white border-green-600",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const interests = ['Web Development', 'Mobile App', 'UI/UX Design', 'Ads Campaign', 'Other'];
  const budgetRanges = ['$50 - $100', '$100 - $500', '$500 - $1,000', '$1,000+'];
  const countries = ['United States', 'Canada', 'United Kingdom', 'Australia', 'India', 'Other'];

  const socialLinks = [
    { 
      icon: Twitter, 
      label: 'Twitter', 
      href: '#',
      hoverClass: 'hover:bg-[#1DA1F2] hover:text-white' 
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: '#',
      hoverClass: 'hover:bg-[#0A66C2] hover:text-white' 
    },
    { 
      icon: Facebook, 
      label: 'Facebook', 
      href: '#',
      hoverClass: 'hover:bg-[#1877F2] hover:text-white' 
    },
    { 
      icon: Instagram, 
      label: 'Instagram', 
      href: '#',
      hoverClass: 'hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-white' 
    }
  ];

  return (
    <div id='contact' className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-[#00121E] dark:to-grau-800">
      <div className="max-w-7xl mx-auto px-16">
        <div className="text-center mb-12">
          <span className="inline-block mb-4">
            <span className="text-lg font-semibold text-[#00EA6F]">
              Contact us
            </span>
          </span>
          <h3 className="text-4xl md:text-5xl font-bold text-[#00121E] dark:text-white mb-6 tracking-tight">
              Get in Touch
          </h3>
          <div className="w-24 h-1 bg-[#00EA6F] mx-auto rounded-full mb-6"></div>
        </div>

        {/* Form Section */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-white/95 dark:bg-[#00121E]/95 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 sm:p-10">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 dark:text-gray-300">Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John Smith" 
                                {...field} 
                                className="transition-all duration-200 border-gray-300 dark:border-gray-600 focus-visible:ring-[#00EA6F]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 dark:text-gray-300">Email</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="john@example.com" 
                                {...field} 
                                className="transition-all duration-200 border-gray-300 dark:border-gray-600 focus-visible:ring-[#00EA6F]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 dark:text-gray-300">Phone</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+91 9852......." 
                                {...field} 
                                className="transition-all duration-200 border-gray-300 dark:border-gray-600 focus-visible:ring-[#00EA6F]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="interest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 dark:text-gray-300">Interest</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="border-gray-300 dark:border-gray-600">
                                  <SelectValue placeholder="Select your interest" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-white dark:bg-[#00121E] border-gray-200 dark:border-gray-700">
                                {interests.map((interest) => (
                                  <SelectItem 
                                    key={interest} 
                                    value={interest}
                                    className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                  >
                                    {interest}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 dark:text-gray-300">Budget Range</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="border-gray-300 dark:border-gray-600">
                                  <SelectValue placeholder="Select budget range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-white dark:bg-[#00121E] border-gray-200 dark:border-gray-700">
                                {budgetRanges.map((budget) => (
                                  <SelectItem 
                                    key={budget} 
                                    value={budget}
                                    className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                  >
                                    {budget}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 dark:text-gray-300">Country</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="border-gray-300 dark:border-gray-600">
                                  <SelectValue placeholder="Select your country" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-white dark:bg-[#00121E] border-gray-200 dark:border-gray-700">
                                {countries.map((country) => (
                                  <SelectItem 
                                    key={country} 
                                    value={country}
                                    className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                  >
                                    {country}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 dark:text-gray-300">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project..."
                              className="resize-none min-h-[160px] border-gray-300 dark:border-gray-600 focus-visible:ring-[#00EA6F]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto text-lg rounded-full transition-all duration-200 bg-gradient-to-r from-[#00EA6F] to-[#00EA6F]/80 hover:from-[#00EA6F]/90 hover:to-[#00EA6F]/70 text-black"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Card */}
          <div className="space-y-8">
            <Card className="shadow-lg border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-white/95 dark:bg-[#00121E]/95 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-8">
                {/* Phone Section */}
                <div className="space-y-3 group cursor-pointer">
                  <h3 className="text-xl font-semibold flex items-center gap-3 text-[#00121E] dark:text-gray-200">
                    <Phone className="h-6 w-6 text-[#00EA6F] group-hover:scale-110 transition-transform duration-200" />
                    Phone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg pl-9 group-hover:text-[#00EA6F] transition-colors duration-200">
                  +919650792241
                  </p>
                </div>

                <Separator className="bg-gray-200 dark:bg-gray-700" />

                {/* Email Section */}
                <div className="space-y-3 group cursor-pointer">
                  <h3 className="text-xl font-semibold flex items-center gap-3 text-[#00121E] dark:text-gray-200">
                    <Mail className="h-6 w-6 text-[#00EA6F] group-hover:scale-110 transition-transform duration-200" />
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg pl-9 group-hover:text-[#00EA6F] transition-colors duration-200">
                    Aditya@zentor.in
                  </p>
                </div>

                <Separator className="bg-gray-200 dark:bg-gray-700" />

                {/* Social Media Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-[#00121E] dark:text-gray-200">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map(({ icon: Icon, label, href, hoverClass }) => (
                      <Button 
                        key={label}
                        variant="outline" 
                        size="icon" 
                        className={`border-gray-300 dark:border-gray-600 transition-all duration-300 hover:scale-110 ${hoverClass}`}
                        asChild
                      >
                        <a href={href} aria-label={label}>
                          <Icon className="h-5 w-5" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;