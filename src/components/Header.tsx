"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Header fixe */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 ${className}`}
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none" />

        {/* Contenu du header */}
        <div className="relative !px-6 md:!px-8 !py-6 flex items-center justify-between">
          {/* Spacer gauche pour centrer le logo */}
          <div className="w-12 md:w-16" />

          {/* Logo centré */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
            <Image
              src="images/logo/logo-pixel.svg"
              alt="Moretales"
              width={120}
              height={40}
              className="h-4 md:h-5 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
              priority
            />
            <span className="font-mono text-[10px] md:text-xs text-gray-300 tracking-wider">
              [archive]
            </span>
          </div>

          {/* Menu burger à droite */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center group"
            aria-label="Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 8 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="w-full h-0.5 bg-white group-hover:bg-electric-blue transition-colors duration-300 origin-center"
              />
              <motion.span
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="w-full h-0.5 bg-white group-hover:bg-electric-blue transition-colors duration-300"
              />
              <motion.span
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -8 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="w-full h-0.5 bg-white group-hover:bg-electric-blue transition-colors duration-300 origin-center"
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Menu drawer à droite */}
      <motion.nav
        initial={false}
        animate={{
          x: isMenuOpen ? 0 : "120%",
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
        className="fixed top-20 right-6 md:right-8 z-40 w-64 bg-black/90 backdrop-blur-md border border-gray-800 rounded-lg overflow-hidden"
      >
        <ul className="!py-6 !px-4 space-y-1">
          <li>
            <a
              href="/"
              className="block font-mono text-sm text-gray-400 hover:text-white hover:bg-gray-900/50 !px-4 !py-3 rounded transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/story"
              className="block font-mono text-sm text-gray-400 hover:text-white hover:bg-gray-900/50 !px-4 !py-3 rounded transition-colors duration-200"
            >
              Story
            </a>
          </li>
          <li>
            <a
              href="/collections"
              className="block font-mono text-sm text-gray-400 hover:text-white hover:bg-gray-900/50 !px-4 !py-3 rounded transition-colors duration-200"
            >
              Collections
            </a>
          </li>
          <li>
            <a
              href="/making-of"
              className="block font-mono text-sm text-gray-400 hover:text-white hover:bg-gray-900/50 !px-4 !py-3 rounded transition-colors duration-200"
            >
              Making-of
            </a>
          </li>
        </ul>
      </motion.nav>
    </>
  );
}
