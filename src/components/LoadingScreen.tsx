import { motion } from 'motion/react';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white text-black overflow-hidden"
    >
      {/* Background subtle grid/noise for modern feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-multiply" />
      
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden mb-8"
        >
          <motion.h1 
            className="text-7xl md:text-9xl font-black tracking-tighter"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            TB.
          </motion.h1>
        </motion.div>

        <div className="w-48 h-[2px] bg-zinc-200 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ 
              duration: 1.5, 
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="absolute top-0 left-0 h-full w-1/2 bg-black rounded-full"
          />
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-zinc-400"
        >
          Portfolio yuklanmoqda
        </motion.p>
      </div>
    </motion.div>
  );
}
