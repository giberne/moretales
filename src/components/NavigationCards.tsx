"use client";

import { motion } from "framer-motion";
import Card from "./Card";

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

interface NavCard {
  title: string;
  description: string;
  href: string;
}

interface NavigationCardsProps {
  cards?: NavCard[];
}

const defaultCards: NavCard[] = [
  {
    title: "Story",
    description: "Découvrir l'histoire (2021-2024)",
    href: "/story"
  },
  {
    title: "Collections",
    description: "Explorer Genesis Tale & Pixel Tale",
    href: "/collections"
  },
  {
    title: "Making-of",
    description: "Process créatif & Direction Artistique",
    href: "/making-of"
  }
];

export default function NavigationCards({ cards = defaultCards }: NavigationCardsProps) {
  return (
    <section className="relative h-screen py-32 px-8 bg-gradient-to-b from-black via-gray-900 to-black flex items-center snap-start">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              href={card.href}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
