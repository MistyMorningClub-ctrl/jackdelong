import React from 'react';
import { motion } from 'framer-motion';

interface CoinProps {
  value: number;
  isFlipping: boolean;
}

export default function Coin({ value, isFlipping }: CoinProps) {
  return (
    <motion.div
      className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg flex items-center justify-center text-amber-900 font-bold"
      animate={{
        rotateX: isFlipping ? [0, 720] : 0,
        scale: isFlipping ? [1, 1.2, 1] : 1,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      {value === 3 ? "陽" : "陰"}
    </motion.div>
  );
}