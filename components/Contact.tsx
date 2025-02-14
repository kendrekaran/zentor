import { Mail, Phone } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';

function Contact() {
  const emails = [
    'Aditya@zentor.in',
    'Divye@zentor.in'
  ];

  return (
    <div id='contact' className="h-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-[#00121E] dark:to-[#00121E]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-lg font-semibold text-[#00EA6F] dark:text-[#00EA6F] mb-4">
            Contact us
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get in touch
          </h3>
          <div className="w-24 h-1 bg-[#00EA6F] mx-auto rounded-full"></div>
        </div>
        

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:px-24 items-center">
          {/* Left Column - Contact Information */}
          <div className="space-y-12">
          <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-[#00121E]/80 shadow-lg dark:shadow-[#00EA6F]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-[#00121E] dark:text-[#00EA6F]" />
                  </div>
                  <h2 className="font-semibold text-2xl text-[#00121E] dark:text-white">Phone</h2>
                </div>
                <a href={`tel:$+919650792241`} className="ml-16 block text-gray-600 dark:text-gray-400 hover:text-[#00EA6F] dark:hover:text-[#00EA6F] transition-colors duration-200">
                +919650792241
                </a>
              </div>

            {/* Email Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-[#00121E]/80 shadow-lg dark:shadow-[#00EA6F]/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#00121E] dark:text-[#00EA6F]" />
                </div>
                <h2 className="font-handwriting text-3xl text-[#00121E] dark:text-white">Email</h2>
              </div>
              <div className="space-y-2 ml-16">
                {emails.map((email, index) => (
                  <p key={index} className="text-gray-600 dark:text-gray-400 hover:text-[#00EA6F] dark:hover:text-[#00EA6F] transition-colors duration-200 cursor-pointer">{email}</p>
                ))}
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-[#00121E]/80 shadow-lg dark:shadow-[#00EA6F]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#00121E] dark:text-[#00EA6F]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 6H4a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12h.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="font-handwriting text-3xl text-[#00121E] dark:text-white">Fill our contact form</h2>
              </div>
              <div className="ml-16">
                <a href="https://forms.gle/oqfxoDubNU8UMSwv9">
                <Button 
                  variant="outline" 
                  className="rounded-full px-8 py-2 border-2 border-[#00121E] dark:border-white 
                           text-[#00121E] dark:text-white
                           hover:bg-[#00121E] dark:hover:bg-white 
                           hover:text-white dark:hover:text-[#00121E] 
                           transition-all duration-300
                           backdrop-blur-sm bg-white/95 dark:bg-[#00121E]/95"
                >
                  CONTACT
                </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative">
            <img 
              src="/contact_us.png"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;