import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CoinTossProps {
  onTossComplete: (value: number) => void;
}

export default function CoinToss({ onTossComplete }: CoinTossProps) {
  const [isFlipping, setIsFlipping] = useState(false);
  const [coins, setCoins] = useState<boolean[]>([false, false, false]); // false = tails (2), true = heads (3)

  const handleToss = () => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    const newCoins = Array(3).fill(false).map(() => Math.random() < 0.5);
    setCoins(newCoins);

    // Wait for flip animation to complete before triggering line addition
    setTimeout(() => {
      setIsFlipping(false);
      const sum = newCoins.reduce((acc, coin) => acc + (coin ? 3 : 2), 0);
      onTossComplete(sum);
    }, 500);
  };

  return (
    <div className="text-center space-y-8">
      <div className="flex justify-center gap-8">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="relative w-20 h-20 preserve-3d cursor-pointer"
            animate={{
              rotateX: isFlipping ? [0, 360 + (coins[index] ? 0 : 180)] : coins[index] ? 0 : 180,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              delay: index * 0.05,
            }}
          >
            <div className="coin-face coin-front" /> {/* White side (Heads) */}
            <div className="coin-face coin-back" />  {/* Black side (Tails) */}
          </motion.div>
        ))}
      </div>
      <button
        onClick={handleToss}
        disabled={isFlipping}
        className={`bg-white text-black font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-gray-100 ${
          isFlipping ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Toss Coins
      </button>
    </div>
  );
}