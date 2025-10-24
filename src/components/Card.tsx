"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

export default function Card({
  title,
  description,
  href,
  onClick,
  className = "",
  children
}: CardProps) {
  const handleClick = () => {
    if (onClick) onClick();
    if (href) window.location.href = href;
  };

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4 }}
      onClick={handleClick}
      className={`group relative bg-black/40 backdrop-blur-sm border border-gray-800 hover:border-gray-700 rounded-lg cursor-pointer overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Subtle hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/0 to-electric-blue/0 group-hover:from-electric-blue/5 group-hover:to-transparent transition-all duration-500" />

      <div className="relative z-10 !p-6 md:!p-8 min-h-[220px] flex flex-col justify-between gap-2">
        <div className="space-y-4">
          <h2 className="font-heading text-3xl md:text-4xl font-light tracking-tight text-white group-hover:text-electric-blue transition-colors duration-300">
            {title}
          </h2>
          <p className="font-body text-sm md:text-base text-gray-500 group-hover:text-gray-400 leading-relaxed transition-colors duration-300">
            {description}
          </p>
        </div>

        {children}

        <div className="flex items-center gap-2 text-xs md:text-sm font-mono text-gray-600 group-hover:text-electric-blue transition-all duration-300">
          <span>→</span>
        </div>
      </div>

      {/* Minimal bottom accent */}
      <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-electric-blue transition-all duration-500" />
    </motion.div>
  );
}
