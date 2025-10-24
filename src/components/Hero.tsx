"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Logo3D from "./Logo3D";
import WireframeDots from "./WireframeDots";

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1, ease: "easeOut" }
};

interface HeroProps {
  logoModel?: string;
}

export default function Hero({
  logoModel = "/models/logo-v1.glb",
}: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);

  // Désactivé le parallax pour éviter les bugs avec scroll-snap
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start start", "end start"]
  // });

  // Transformations parallax
  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden snap-start"
    >
      {/* Animated Wireframe Dots Background */}
      <div className="absolute inset-0">
        <WireframeDots />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none z-[2]" />

      {/* Logo 3D centré */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={scaleIn}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        <div className="w-full max-w-4xl h-full flex items-center justify-center">
          <div className="w-full h-3/4 relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-electric-blue/10 to-transparent blur-3xl" />

            {/* Logo 3D */}
            <Logo3D modelPath={logoModel} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
