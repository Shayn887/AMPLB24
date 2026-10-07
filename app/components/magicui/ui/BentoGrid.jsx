"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconSchool,
  IconMoodSmile,
  IconCoffee,
  IconPhoto,
  IconCode,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

/* Skeleton 1: Chat/Group Bubble */
const SkeletonOne = () => {
  const variantsLeft = {
    initial: { x: 0 },
    animate: { x: 6, rotate: 2, transition: { duration: 0.2 } },
  };
  const variantsRight = {
    initial: { x: 0 },
    animate: { x: -6, rotate: -2, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-col justify-center space-y-2 p-2"
    >
      <motion.div
        variants={variantsLeft}
        className="flex flex-row rounded-2xl border border-white/10 p-2.5 items-center space-x-2 bg-neutral-900/90 text-xs text-neutral-300"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 shrink-0 flex items-center justify-center font-bold text-[10px] text-white">
          M
        </div>
        <span>Who invented 7:00 AM Mondays anyway? 😴</span>
      </motion.div>
      <motion.div
        variants={variantsRight}
        className="flex flex-row rounded-2xl border border-white/10 p-2.5 items-center space-x-2 w-5/6 ml-auto bg-neutral-800/90 text-xs text-neutral-200"
      >
        <span>Class representative: "Stay calm, break time in 2 hours!"</span>
      </motion.div>
    </motion.div>
  );
};

/* Skeleton 2: Progress Bars (Energy vs Deadlines) */
const SkeletonTwo = () => {
  const bars = [
    { label: "Coffee Intake", width: "95%", color: "bg-amber-500" },
    { label: "Class Braincells", width: "35%", color: "bg-pink-500" },
    { label: "Assignments Done", width: "80%", color: "bg-cyan-500" },
  ];

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-col justify-center space-y-3 p-3">
      {bars.map((bar, i) => (
        <div key={i} className="space-y-1">
          <div className="flex justify-between text-[11px] text-neutral-400 font-mono">
            <span>{bar.label}</span>
          </div>
          <div className="w-full bg-neutral-800 h-2.5 rounded-full overflow-hidden border border-white/5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: bar.width }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`h-full ${bar.color} rounded-full`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

/* Skeleton 3: Animated Gradient Badge */
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}>
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  return (
    <div className="relative flex flex-1 w-full h-full min-h-[10rem] rounded-2xl overflow-hidden group">
      <Image
        src={assets.memo1 || assets.rplcn24}
        alt="Captured Memories MPLB 2"
        fill
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-70" />
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-col justify-center space-y-2 p-2">
      <motion.div
        whileHover={{ x: 5 }}
        className="flex flex-row rounded-2xl border border-white/10 p-2.5 items-start space-x-2 bg-neutral-900/90"
      >
        <div className="h-7 w-7 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center shrink-0 text-xs font-bold text-cyan-300">
          A
        </div>
        <p className="text-xs text-neutral-300">
          "Can we order boba during the lesson?"
        </p>
      </motion.div>
      <motion.div
        whileHover={{ x: -5 }}
        className="flex flex-row rounded-2xl border border-white/10 p-2.5 items-center justify-end space-x-2 w-4/5 ml-auto bg-pink-950/40 border-pink-500/20"
      >
        <p className="text-xs text-pink-200 font-medium">
          "what? "
        </p>
      </motion.div>
    </div>
  );
};

const items = [
  {
    title: "SMK ICB CINTA NIAGA",
    description: (
      <span className="text-xs text-neutral-400">
        Home of MPLB 2. Where office management meets pure student creativity!
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconSchool className="h-4 w-4 text-pink-400" />,
  },
  {
    title: "Class Energy Metrics",
    description: (
      <span className="text-xs text-neutral-400">
        Powered by iced coffee, last-minute deadlines, and endless laughs.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconCoffee className="h-4 w-4 text-amber-400" />,
  },
  {
    title: "Class Philosophy",
    description: (
      <span className="text-xs text-neutral-400">
        Work hard, laugh harder, and never leave anyone behind.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconMoodSmile className="h-4 w-4 text-cyan-400" />,
  },
  {
    title: "Captured Memories",
    description: (
      <span className="text-xs text-neutral-400">
        A sneak peek into our daily life, events, and spontaneous group photos.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconPhoto className="h-4 w-4 text-purple-400" />,
  },
  {
    title: "Daily Class Debates",
    description: (
      <span className="text-xs text-neutral-400">
        Every single day brings a new random conversation.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconCode className="h-4 w-4 text-emerald-400" />,
  },
];