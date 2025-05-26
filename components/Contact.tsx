import { Mail, Phone, MessageCircle } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';

function Contact() {
  return (
    <div id='contact' className="py-12 px-4 sm:px-6 lg:px-8 bg-[#00121E]">
      <div className="max-w-4xl mx-auto">
        <div className='text-center mb-10'>
					<h2 className='text-lg font-semibold text-[#00EA6F] mb-4'>
						Contact Us
					</h2>
					<h3 className='text-4xl md:text-5xl font-bold text-white mb-6'>
						Get In Touch
					</h3>
					<div className='w-24 h-1 bg-[#00EA6F] mx-auto rounded-full'></div>
				</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Phone */}
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#00121E]/80 shadow-lg shadow-[#00EA6F]/10 flex items-center justify-center mx-auto">
              <Phone className="w-6 h-6 text-[#00EA6F]" />
            </div>
            <h3 className="font-semibold text-white">Phone</h3>
            <a 
              href="tel:+919650792241" 
              className="text-gray-400 hover:text-[#00EA6F] transition-colors"
            >
              +91 965 079 2241
            </a>
          </div>

          {/* Email */}
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#00121E]/80 shadow-lg shadow-[#00EA6F]/10 flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6 text-[#00EA6F]" />
            </div>
            <h3 className="font-semibold text-white">Email</h3>
            <div className="space-y-1">
              <p className="text-gray-400 hover:text-[#00EA6F] transition-colors cursor-pointer">Aditya@zentor.in</p>
              <p className="text-gray-400 hover:text-[#00EA6F] transition-colors cursor-pointer">Divye@zentor.in</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#00121E]/80 shadow-lg shadow-[#00EA6F]/10 flex items-center justify-center mx-auto">
              <MessageCircle className="w-6 h-6 text-[#00EA6F]" />
            </div>
            <h3 className="font-semibold pb-4 text-white">Get Started</h3>
            <a href="https://forms.gle/oqfxoDubNU8UMSwv9" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                className="rounded-full px-6 py-2 border-2 border-white 
                         text-white
                         hover:bg-white 
                         hover:text-[#00121E] 
                         transition-all duration-300
                         backdrop-blur-sm bg-[#00121E]/95"
              >
                Contact Form
              </Button>
            </a>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default Contact;