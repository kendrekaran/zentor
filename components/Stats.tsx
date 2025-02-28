import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Banknote, CircleDollarSignIcon, FolderKanban, Users } from 'lucide-react';
import { useCounter } from '@/utils/useCounter';

const stats = [
    { icon: Users, label: 'Clients served', value: 27, suffix: '+' },
  { icon: FolderKanban, label: 'Projects completed', value: 50, suffix: '+' },
  { icon: Banknote, label: 'Total Ad spend managed', value: 67, suffix : 'K+' },
  { icon: CircleDollarSignIcon, label: 'Revenue generated for clients', value: 100, isDecimal: false, suffix: 'K+' }
];

const Stats = () => {
  const containerRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  
  const counter1 = useCounter(containerRef, stats[0].value);
  const counter2 = useCounter(containerRef, stats[1].value);
  const counter3 = useCounter(containerRef, stats[2].value);
  const counter4 = useCounter(containerRef, stats[3].value);

  const counters = [counter1, counter2, counter3, counter4];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-[#00121E] dark:to-[#00121E] py-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white dark:bg-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <stat.icon className="w-8 h-8 text-[#00EA6F] dark:text-[#00EA6F] mx-auto mb-4" />
              <motion.p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.isDecimal ? counters[index] / 10 : counters[index]}
                {stat.suffix || ''}
              </motion.p>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;