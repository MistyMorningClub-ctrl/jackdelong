import React from 'react';
import { motion } from 'framer-motion';
import { Hexagram } from '../data/hexagrams';

interface HexagramInterpretationProps {
  hexagram: Hexagram;
}

export default function HexagramInterpretation({ hexagram }: HexagramInterpretationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-gray-900 rounded-lg border border-gray-800 p-8 space-y-8"
    >
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white">{hexagram.name}</h2>
          <p className="text-xl text-gray-300 leading-relaxed">{hexagram.interpretation}</p>
        </div>
        
        <div className="pt-6 border-t border-gray-800">
          <div className="grid gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-2">Hexagram {hexagram.number}</h3>
              <p className="text-lg text-white">{hexagram.meaning}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}