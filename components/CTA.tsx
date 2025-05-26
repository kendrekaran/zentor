import React from 'react'
import { Button } from './ui/button'

const CTA = () => {
  return (
    <div>
         <div className="text-center py-12 p-8 rounded-3xl bg-[#00121E] border-gray-800/50">
          <h3 className="text-5xl font-bold text-white mb-4">
            Ready to get started?
          </h3>
          <p className="text-gray-400 mb-6 max-w-lg text-lg mx-auto">
            Let&apos;s discuss how Zentor can help transform your business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919650792241">
              <Button className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#00EA6F] to-[#00B856] text-black font-semibold hover:from-[#00B856] hover:to-[#00EA6F] transition-all duration-300 hover:scale-105">
                Call Now
              </Button>
            </a>
            <a href="mailto:Aditya@zentor.in">
              <Button variant="outline" className="px-8 py-3 rounded-xl border-[#00EA6F]/50 text-[#00EA6F] hover:bg-[#00EA6F] hover:text-black transition-all duration-300">
                Send Email
              </Button>
            </a>
          </div>
        </div>
    </div>
  )
}

export default CTA