"use client"

import { useRef, useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Quote, ChevronLeft, ChevronRight, Star, StarHalf } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechVision Solutions",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=256&h=256&fit=crop",
    content: "Working with this team transformed our digital presence completely. Their attention to detail and innovative approach helped us achieve a 200% increase in user engagement.",
    rating: 5,
    accent: "blue",
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, EcoStyle",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&fit=crop",
    content: "The level of creativity and technical expertise they brought to our project was exceptional. Our e-commerce conversions have increased by 150% since launch.",
    rating: 5,
    accent: "green",
  },
  {
    name: "Emily Watson",
    role: "Marketing Director, Bloom & Co",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&h=256&fit=crop",
    content: "Their team's dedication to understanding our brand voice and translating it into a stunning website design exceeded all expectations.",
    rating: 4.5,
    accent: "purple",
  },
  {
    name: "David Kim",
    role: "CTO, InnovateLab",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&fit=crop",
    content: "The seamless integration of complex features while maintaining an intuitive user interface showcases their technical prowess.",
    rating: 5,
    accent: "orange",
  },
  {
    name: "Lisa Thompson",
    role: "Owner, Artisan Crafts",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&fit=crop",
    content: "From concept to execution, they delivered a website that perfectly captures our brand's essence. Our customers love the new experience.",
    rating: 5,
    accent: "pink",
  },
  {
    name: "Sarah Chen",
    role: "CEO, TechVision Solutions",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=256&h=256&fit=crop",
    content: "Working with this team transformed our digital presence completely. Their attention to detail and innovative approach helped us achieve a 200% increase in user engagement.",
    rating: 5,
    accent: "blue",
  },
]

const accentColors = {
  blue: "from-blue-500/10 to-transparent",
  green: "from-emerald-500/10 to-transparent",
  purple: "from-purple-500/10 to-transparent",
  orange: "from-orange-500/10 to-transparent",
  pink: "from-pink-500/10 to-transparent",
}

const accentTextColors = {
  blue: "text-blue-600 dark:text-blue-400",
  green: "text-emerald-600 dark:text-emerald-400",
  purple: "text-purple-600 dark:text-purple-400",
  orange: "text-orange-600 dark:text-orange-400",
  pink: "text-pink-600 dark:text-pink-400",
}

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)


  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials]


  

  const scroll = (direction: string) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = container.querySelector('.testimonial-card')?.clientWidth || 400
      let newIndex = direction === 'left' 
        ? (activeIndex - 1 + testimonials.length) % testimonials.length
        : (activeIndex + 1) % testimonials.length

      setActiveIndex(newIndex)

      // Calculate the scroll position
      const scrollPosition = cardWidth * (newIndex + testimonials.length)
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
    }
  }

  // Handle scroll end and reset position
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = container.querySelector('.testimonial-card')?.clientWidth || 400
      
      // If we've scrolled past the middle set, jump back to the middle set without animation
      if (container.scrollLeft < cardWidth * testimonials.length) {
        container.style.scrollBehavior = 'auto'
        container.scrollLeft += cardWidth * testimonials.length
        container.style.scrollBehavior = 'smooth'
      } else if (container.scrollLeft >= cardWidth * testimonials.length * 2) {
        container.style.scrollBehavior = 'auto'
        container.scrollLeft -= cardWidth * testimonials.length
        container.style.scrollBehavior = 'smooth'
      }
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      // Initial scroll to middle set
      const cardWidth = container.querySelector('.testimonial-card')?.clientWidth || 400
      container.scrollLeft = cardWidth * testimonials.length

      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const renderRating = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`star-${i}`} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
      )
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half-star" className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
      )
    }

    return stars
  }

  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-[#00121E]">
      <div className="container px-4 mx-auto space-y-8 md:space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10">
          <h2 className="text-lg font-semibold text-[#00EA6F] dark:text-[#00EA6F] mb-4">
            Testimonials
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Wht Our Clients Says 
          </h3>
          <div className="w-24 h-1 bg-[#00EA6F] mx-auto rounded-full"></div>
        </motion.div>

        {/* Testimonials Container */}
        <div 
          className="relative px-0 md:px-4"
          onMouseEnter={() => {
            setIsHovering(true)
            setIsAutoPlaying(false)
          }}
          onMouseLeave={() => {
            setIsHovering(false)
            setIsAutoPlaying(true)
          }}
        >
          {/* Navigation Buttons */}
          <AnimatePresence>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={() => {
                scroll('left')
                setIsAutoPlaying(false)
              }}
              className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-[#001E2F] rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-[#00EA6F]" />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={() => {
                scroll('right')
                setIsAutoPlaying(false)
              }}
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-[#001E2F] rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-[#00EA6F]" />
            </motion.button>
          </AnimatePresence>

          {/* Testimonials Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-4 md:gap-6 snap-x snap-mandatory px-4 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="testimonial-card flex-none w-[85vw] md:w-[380px] snap-center"
              >
                <Card className="relative h-full p-6 md:p-8 bg-white dark:bg-[#001E2F] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  {/* Accent Background */}
                  <div className={`absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l ${accentColors[testimonial.accent as keyof typeof accentColors]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Quote mark */}
                  <div className="absolute top-6 right-6">
                    <Quote className={`w-8 h-8 md:w-10 md:h-10 ${accentTextColors[testimonial.accent as keyof typeof accentTextColors]} opacity-20`} />
                  </div>

                  {/* Content */}
                  <div className="relative space-y-4 md:space-y-6">
                    {/* Rating */}
                    <div className="flex gap-1">
                      {renderRating(testimonial.rating)}
                    </div>

                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    {/* Profile */}
                    <div className="flex items-center gap-3 md:gap-4 pt-4 md:pt-6 border-t border-gray-100 dark:border-gray-800">
                      <div className="relative h-12 w-12 md:h-14 md:w-14 rounded-full overflow-hidden ring-2 ring-[#00EA6F]/20">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-base md:text-lg text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Scroll Progress Indicators */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth = scrollContainerRef.current.querySelector('.testimonial-card')?.clientWidth || 400
                    const scrollPosition = cardWidth * (index + testimonials.length)
                    scrollContainerRef.current.scrollTo({
                      left: scrollPosition,
                      behavior: 'smooth'
                    })
                    setActiveIndex(index)
                    setIsAutoPlaying(false)
                  }
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 bg-[#00EA6F]' 
                    : 'w-2 bg-[#00EA6F]/30 hover:bg-[#00EA6F]/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}