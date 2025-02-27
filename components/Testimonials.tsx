"use client"

import { useRef, useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Quote, ChevronLeft, ChevronRight, Star, StarHalf } from "lucide-react"

const testimonials = [
  {
    name: "Ferns N Petals",
    role: "New Delhi, India",
    image: "https://i7.fnp.com/assets/images/defaultLogo.jpg",
    content:
      "ZENTOR's ad campaigns delivered excellent ROI and helped us scale online gifting sales in multiple categories, specializing in multi-product carts.",
    rating: 5,
    accent: "purple",
  },
  
  {
    name: "Vietnam Tourism",
    role: "Hanoi, Vietnam",
    image: "https://image.vietnam.travel/themes/custom/vietnamtourism/images/logo.jpg",
    content:
      "They were our proud marketing partners in the #VisitVietnam program in India and helped us spread the word effectively, boosting engagement and reach.",
    rating: 5,
    accent: "green",
  },
  {
    name: "Pizza Galleria",
    role: "Haryana, India",
    image: "https://pizzagalleria.in/wp-content/uploads/2024/05/cropped-Pizza-Galleria-Logo-1.png",
    content:
      "Our online orders increased drastically with ZENTOR’s targeted ad strategies, running campaigns across North India for maximum reach and impact. Highly recommended!",
    rating: 4.5,
    accent: "orange",
  },
  {
    name: "Edura App",
    role: "Leicester, United Kingdom",
    image: "https://images.sftcdn.net/images/t_app-icon-m/p/e5af70ff-37e4-446f-a89b-0754a8702a14/1873479680/edura-logo",
    content:
      "From concept to execution, they delivered a website that perfectly captures our brand's essence. Our customers love the new experience.",
    rating: 4.5,
    accent: "pink",
  },
  {
    name: "SGF - Spice Grill Flame",
    role: "New Delhi, India",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3d7wWTzTwCn0_lQhHrxKSrLiZWqIAE4fSg&s",
    content:
      "ZENTOR built our website and digital presence, driving more customers to our restaurants and kiosks. Great work!",
    rating: 4.5,
    accent: "blue",
  },
  {
    name: "CK Designers",
    role: "Dublin, Ireland",
    image: "https://sortlist.gumlet.io/sortlist-core-api/ptvdn7zewgzi2o1vj9fn2598ah53?w=150&q=95&format=auto",
    content:
      "ZENTOR helped us amplify event reach and engagement seamlessly. A great marketing partner!",
    rating: 4.5,
    accent: "blue",
  },
]


export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [visibleCards, setVisibleCards] = useState(3)

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      if (width < 768) {
        setVisibleCards(1)
      } else if (width < 1280) {
        setVisibleCards(2)
      } else {
        setVisibleCards(3)
      }
    }

    updateLayout()
    window.addEventListener('resize', updateLayout)
    return () => window.removeEventListener('resize', updateLayout)
  }, [])

  const handleScroll = () => {
    if (!scrollContainerRef.current) return
    
    const container = scrollContainerRef.current
    const cardWidth = container.querySelector(".testimonial-card")?.clientWidth || 0
    const scrollPosition = container.scrollLeft
    
    const newIndex = Math.round(scrollPosition / cardWidth)
    setActiveIndex(Math.min(Math.max(newIndex, 0), testimonials.length - visibleCards))
  }

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return
    
    const container = scrollContainerRef.current
    const cardWidth = container.querySelector(".testimonial-card")?.clientWidth || 0
    const newIndex = direction === "left" 
      ? Math.max(activeIndex - 1, 0)
      : Math.min(activeIndex + 1, testimonials.length - visibleCards)

    container.scrollTo({
      left: cardWidth * newIndex,
      behavior: "smooth"
    })
    setActiveIndex(newIndex)
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

  const cardWidth = isMobile ? "85vw" : `${Math.floor(100 / visibleCards) - 2}%`

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-[#00121E]">
      <div className="container px-4 mx-auto space-y-8 md:space-y-12">
        <div className="text-center mb-10">
          <h2 className="text-lg font-semibold text-[#00EA6F] mb-4">
            Testimonials
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What our Clients Say
          </h3>
          <div className="w-24 h-1 bg-[#00EA6F] mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {!isMobile && (
            <>
              <button
                onClick={() => scroll("left")}
                disabled={activeIndex === 0}
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-[#001E2F] rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-emerald-500" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={activeIndex >= testimonials.length - visibleCards}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-[#001E2F] rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-emerald-500" />
              </button>
            </>
          )}

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-4 md:gap-6 snap-x snap-mandatory pb-4"
            onScroll={handleScroll}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card flex-none snap-center"
                style={{ width: cardWidth }}
              >
                <Card className="h-full p-6 md:p-8 bg-white dark:bg-[#001E2F] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="absolute top-6 right-6 opacity-20">
                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-emerald-500" />
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    {renderRating(testimonial.rating)}

                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      &quot;{testimonial.content}&quot;
                    </p>

                    <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                      <div className="relative h-14 w-14 rounded-full overflow-hidden ring-2 ring-emerald-500/20">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="object-cover w-full h-full"
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
            {Array.from({ length: testimonials.length - visibleCards + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth = scrollContainerRef.current.querySelector(".testimonial-card")?.clientWidth || 0
                    scrollContainerRef.current.scrollTo({
                      left: cardWidth * index,
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
