import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HexagramProps {
  lines: number[];
}

export default function Hexagram({ lines }: HexagramProps) {
  return (
    <div className="w-fit mx-auto">
      <div className="flex flex-col-reverse gap-4 items-center p-8 bg-gray-900 rounded-lg border border-gray-800">
        <AnimatePresence>
          {lines.map((value, index) => {
            const isBroken = value === 6 || value === 8;
            
            return (
              <motion.div
                key={index}
                className="flex justify-center w-24"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {isBroken ? (
                  <div className="flex justify-between w-full">
                    <div className="hexagram-line w-[40%]" />
                    <div className="hexagram-line w-[40%]" />
                  </div>
                ) : (
                  <div className="hexagram-line w-full" />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}