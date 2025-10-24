"use client";

import { motion } from "framer-motion";

interface FooterProps {
  artistName?: string;
  creatorName?: string;
  className?: string;
}

export default function Footer({
  artistName = "Akisama",
  creatorName = "Baptiste Eybert",
  className = ""
}: FooterProps) {
  return (
    <footer className={`relative py-16 px-4 bg-black border-t border-gray-900 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center"
      >
        <p className="font-body text-gray-500 text-sm mb-3 tracking-wide">
          Archive - Marque fermée
        </p>
        <p className="font-body text-gray-600 text-sm">
          Direction Artistique : <span className="text-gray-400">{artistName}</span>
          {" • "}
          Création : <span className="text-gray-400">{creatorName}</span>
        </p>
      </motion.div>
    </footer>
  );
}
