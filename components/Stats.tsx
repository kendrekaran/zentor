"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Banknote, CircleDollarSignIcon, FolderKanban, Users } from "lucide-react"
import { useCounter } from "@/utils/useCounter"

const stats = [
  { icon: Users, label: "Clients served", value: 27, suffix: "+" },
  { icon: FolderKanban, label: "Projects completed", value: 50, suffix: "+" },
  { icon: Banknote, label: "Total Ad spend managed", value: 67, suffix: "K+" },
  { icon: CircleDollarSignIcon, label: "Revenue generated for clients", value: 100, isDecimal: false, suffix: "K+" },
]

const Stats = () => {
  const containerRef = useRef<HTMLDivElement>({} as HTMLDivElement)

  const counter1 = useCounter(containerRef, stats[0].value)
  const counter2 = useCounter(containerRef, stats[1].value)
  const counter3 = useCounter(containerRef, stats[2].value)
  const counter4 = useCounter(containerRef, stats[3].value)

  const counters = [counter1, counter2, counter3, counter4]

  return (
    <div className="bg-gradient-to-r   from-[#00121E] via-[#00121E] to-[#00121E] py-32" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Left side - Heading */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              Growing bigger
              <br />
              and faster
            </h2>
          </div>

          {/* Right side - Stats */}
          <div className="lg:w-2/3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center">
                  <motion.div
                    className="text-center md:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                      <motion.span className="text-3xl lg:text-4xl font-bold text-white">
                        {stat.isDecimal ? counters[index] / 10 : counters[index]}
                        {stat.suffix || ""}
                      </motion.span>
                    </div>
                    <p className="text-gray-300 font-medium text-sm">{stat.label}</p>
                  </motion.div>

                  {/* Divider line - show for all except the last item */}
                  {index < stats.length - 1 && <div className="hidden md:block w-px h-16 bg-gray-600 mx-8"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
