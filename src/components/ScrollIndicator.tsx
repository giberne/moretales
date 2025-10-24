"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

export default function ScrollIndicator() {
  return (
    <motion.div
      variants={fadeInUp}
      className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2"
      >
        <div className="w-1 h-2 bg-electric-blue rounded-full" />
      </motion.div>
    </motion.div>
  );
}
