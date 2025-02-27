import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FolderKanban, Smile, Users, Users2 } from 'lucide-react';
import { useCounter } from '@/utils/useCounter';

const stats = [
  { icon: FolderKanban, label: 'PROJECTS', value: 300, suffix: '+' },
  { icon: Smile, label: 'PLEASURE', value: 8.9, isDecimal: true },
  { icon: Users, label: 'CUSTOMERS', value: 3000, suffix: '+' },
  { icon: Users2, label: 'TEAM MEMBERS', value: 23 }
];

const Stats = () => {
  const containerRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-[#00121E] dark:to-[#00121E] py-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const count = useCounter(containerRef, stat.value);
            return (
              <motion.div
                className="text-center p-6 rounded-2xl bg-white dark:bg-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <stat.icon className="w-8 h-8 text-[#00EA6F] dark:text-[#00EA6F] mx-auto mb-4" />
                <motion.p
                  className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
                 
                >
                  {stat.isDecimal ? count / 10 : count}
                  {stat.suffix || ''}
                </motion.p>
                <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;