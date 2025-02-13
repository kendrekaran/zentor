"use client"

import { useRef, useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Quote, ChevronLeft, ChevronRight, Star, StarHalf } from "lucide-react"
import { AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "CEO, TechVision Solutions",
    image: "https://i.pinimg.com/474x/aa/9c/53/aa9c53929e2e9668fe9a3ca8c3a23712.jpg",
    content:
      "Working with this team transformed our digital presence completely. Their attention to detail and innovative approach helped us achieve a 200% increase in user engagement.",
    rating: 5,
    accent: "blue",
  },
  {
    name: "Rohan Mehta",
    role: "Founder, EcoStyle",
    image: "https://i.pinimg.com/474x/ae/9a/41/ae9a41aead9712eb825e7a96bf9816b2.jpg",
    content:
      "The level of creativity and technical expertise they brought to our project was exceptional. Our e-commerce conversions have increased by 150% since launch.",
    rating: 5,
    accent: "green",
  },
  {
    name: "Priya Iyer",
    role: "Marketing Director, Bloom & Co",
    image: "https://i.pinimg.com/474x/26/1d/09/261d09ebc9989a2dd442152d89c4d54f.jpg",
    content:
      "Their team's dedication to understanding our brand voice and translating it into a stunning website design exceeded all expectations.",
    rating: 4.5,
    accent: "purple",
  },
  {
    name: "Arjun Kapoor",
    role: "CTO, InnovateLab",
    image: "https://i.pinimg.com/736x/e0/97/32/e09732eecf2d3d43ff0e578b1d640724.jpg",
    content:
      "The seamless integration of complex features while maintaining an intuitive user interface showcases their technical prowess.",
    rating: 5,
    accent: "orange",
  },
  {
    name: "Neha Verma",
    role: "Owner, Artisan Crafts",
    image: "https://i.pinimg.com/736x/c3/e9/7a/c3e97aa255c604a1123e554cc12eefdc.jpg",
    content:
      "From concept to execution, they delivered a website that perfectly captures our brand's essence. Our customers love the new experience.",
    rating: 5,
    accent: "pink",
  },
  {
    name: "Vikram Nair",
    role: "CEO, TechVision Solutions",
    image: "https://i.pinimg.com/474x/22/88/9f/22889f9c436c0ebb444aee23b6fda557.jpg",
    content:
      "Working with this team transformed our digital presence completely. Their attention to detail and innovative approach helped us achieve a 200% increase in user engagement.",
    rating: 5,
    accent: "blue",
  },
]


export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-scroll functionality
  useEffect(() => {
    if (isScrolling) return

    const interval = setInterval(() => {
      scroll('right')
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex, isScrolling])

  const scroll = (direction: string) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = container.querySelector(".testimonial-card")?.clientWidth || 400
      const newIndex =
        direction === "left"
          ? (activeIndex - 1 + testimonials.length) % testimonials.length
          : (activeIndex + 1) % testimonials.length

      setActiveIndex(newIndex)
      
      // Calculate scroll position including the buffer
      const scrollPosition = cardWidth * (newIndex + testimonials.length)
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
    }
  }

  const handleScroll = () => {
    if (!scrollContainerRef.current || isScrolling) return
    
    const container = scrollContainerRef.current
    const cardWidth = container.querySelector(".testimonial-card")?.clientWidth || 400
    const scrollPosition = container.scrollLeft
    const totalWidth = container.scrollWidth
    const viewportWidth = container.clientWidth

    // Reset scroll position when reaching the end of extended list
    if (scrollPosition >= totalWidth - viewportWidth - cardWidth / 2) {
      container.scrollLeft = cardWidth * testimonials.length
    } else if (scrollPosition < cardWidth * testimonials.length - cardWidth / 2) {
      container.scrollLeft = cardWidth * testimonials.length * 2 - viewportWidth
    }

    const newIndex = Math.round((scrollPosition - cardWidth * testimonials.length) / cardWidth)
    setActiveIndex((newIndex + testimonials.length) % testimonials.length)
  }

  const handleDragStart = () => setIsScrolling(true)
  const handleDragEnd = () => {
    setIsScrolling(false)
    handleScroll()
  }

  const renderRating = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star 
          key={`star-${i}`} 
          className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400"
          aria-label="Full star"
        />
      )
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf 
          key="half-star" 
          className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400"
          aria-label="Half star"
        />
      )
    }

    return (
      <div className="flex gap-1" role="img" aria-label={`Rating: ${rating} stars`}>
        {stars}
      </div>
    )
  }

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-[#00121E]">
      <div className="container px-4 mx-auto space-y-8 md:space-y-12">
      <div className="text-center mb-10">
          <h2 className="text-lg font-semibold text-[#00EA6F] dark:text-[#00EA6F] mb-4">
            Testimonials
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What our Clients Says
          </h3>
          <div className="w-24 h-1 bg-[#00EA6F] mx-auto rounded-full"></div>
        </div>

        <div className="relative px-0 md:px-4">
          <AnimatePresence>
            {!isMobile && (
              <>
                <button
                  onClick={() => scroll("left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-[#001E2F] rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6 text-emerald-500" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-[#001E2F] rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6 text-emerald-500" />
                </button>
              </>
            )}
          </AnimatePresence>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-4 md:gap-6 snap-x snap-mandatory px-4 md:px-0 pb-4"
            onScroll={handleScroll}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card flex-none w-[85vw] md:w-[400px] snap-center"
              >
                <Card className="relative h-full p-6 md:p-8 bg-white dark:bg-[#001E2F] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group">
                  <div className="absolute top-6 right-6 opacity-20">
                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-emerald-500" />
                  </div>

                  <div className="relative space-y-4 md:space-y-6">
                    {renderRating(testimonial.rating)}

                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      &quot;{testimonial.content}&quot;
                    </p>

                    <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                      <div className="relative h-14 w-14 rounded-full overflow-hidden ring-2 ring-emerald-500/20">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth = scrollContainerRef.current.querySelector(".testimonial-card")?.clientWidth || 400
                    const scrollPosition = cardWidth * (index + testimonials.length)
                    scrollContainerRef.current.scrollTo({
                      left: scrollPosition,
                      behavior: "smooth",
                    })
                    setActiveIndex(index)
                  }
                }}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  index === activeIndex 
                    ? "w-8 bg-emerald-500" 
                    : "w-2 bg-emerald-500/30 hover:bg-emerald-500/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
