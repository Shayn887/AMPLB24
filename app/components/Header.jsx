"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";

function FloatingPhoto({
  src,
  alt,
  className = "",
  delay = 0,
  priority = false,
  variant = "circle", // 'circle' | 'square' | 'heart' | 'raw'
}) {
  const variantStyles = {
    circle: "rounded-full aspect-square overflow-hidden shadow-2xl",
    square: "rounded-2xl aspect-square overflow-hidden shadow-2xl",
    heart:
      "aspect-square overflow-hidden shadow-2xl [clip-path:path('M12_21.35l-1.45-1.32C5.4_15.36_2_12.28_2_8.5_2_5.42_4.42_3_7.5_3c1.74_0_3.41.81_4.5_2.09C13.09_3.81_14.76_3_16.5_3_19.58_3_22_5.42_22_8.5c0_3.78-3.4_6.86-8.55_11.54L12_21.35z')]",
    raw: "aspect-square",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`absolute transition-transform duration-500 hover:scale-[1.04] ${variantStyles[variant]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 52vw, 260px"
        className="object-cover"
      />
      {variant !== "raw" && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10" />
      )}
    </motion.div>
  );
}

/*
  LAYOUT MOBILE (di bawah sm):
  - Area teks di tengah (~40% – 62% tinggi layar) dibiarkan kosong.
  - Cluster ATAS  : 1 foto besar (kiri) + 2 foto kecil bertumpuk (kanan)
  - Cluster BAWAH : 2 foto kecil bertumpuk (kiri) + 1 foto besar (kanan)
  - Ukuran memakai min(% lebar, svh) supaya tidak melebar ke area teks
    di HP yang layarnya pendek.
  Layout sm ke atas (tablet/desktop) tetap sama seperti sebelumnya.
*/
const BIG = "w-[min(52%,23svh)]";
const SMALL = "w-[min(32%,13svh)]";

export default function Header() {
  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-white flex items-center justify-center">
      {/* Ambient Background Glow & Grain */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[20%] top-[20%] h-80 w-80 rounded-full bg-cyan-500/[0.05] blur-[140px]" />
        <div className="absolute bottom-[20%] right-[15%] h-96 w-96 rounded-full bg-pink-500/[0.05] blur-[150px]" />
      </div>

      <div className="relative w-full max-w-7xl h-full mx-auto px-4 flex items-center justify-center p-11">
        {/* 1. Atas — besar (kiri) */}
        <FloatingPhoto
          src={assets.nemo}
          alt="Class memory 1"
          priority
          delay={0.1}
          variant="circle"
          className={`
            top-[13%] left-[3%] ${BIG}
            -rotate-3
            sm:top-[8%] sm:left-[16%] sm:w-36 sm:-rotate-6
            md:top-[6%] md:left-[18%] md:w-44
          `}
        />

        {/* 2. Atas — kecil (kanan, atas) */}
        <FloatingPhoto
          src={assets.nemo1}
          alt="Class memory 4"
          delay={0.15}
          variant="square"
          className={`
            top-[13%] right-[3%] ${SMALL}
            rotate-6
            sm:top-[8%] sm:right-[16%] sm:w-36
            md:top-[6%] md:right-[18%] md:w-44
          `}
        />

        {/* 3. Atas — kecil (kanan, bawah) */}
        <FloatingPhoto
          src={assets.emot}
          alt="Class memory 5"
          delay={0.25}
          variant="raw"
          className={`
            top-[27%] right-[3%] ${SMALL}
            rotate-6
            sm:top-[32%] sm:right-[0%] sm:w-36
            md:top-[32%] md:right-[2%] md:w-40
          `}
        />

        {/* 4. Bawah — kecil (kiri, atas) */}
        <FloatingPhoto
          src={assets.nemo2}
          alt="Class photo 2"
          delay={0.2}
          variant="square"
          className={`
            bottom-[22%] left-[3%] ${SMALL}
            rotate-3
            sm:bottom-auto sm:top-[26%] sm:left-[0%] sm:w-40
            md:top-[25%] md:left-[2%] md:w-48
          `}
        />

        {/* 5. Bawah — kecil (kiri, bawah) */}
        <FloatingPhoto
          src={assets.nemo3}
          alt="Class memory 3"
          delay={0.3}
          variant="square"
          className={`
            bottom-[8%] left-[3%] ${SMALL}
            -rotate-3
            sm:bottom-[11%] sm:left-[4%] sm:w-40
            md:bottom-[8%] md:left-[5%] md:w-52
          `}
        />

        {/* 6. Bawah — besar (kanan) */}
        <FloatingPhoto
          src={assets.nemo5}
          alt="Class profile 6"
          delay={0.35}
          variant="circle"
          className={`
            bottom-[8%] right-[3%] ${BIG}
            rotate-3
            sm:bottom-[11%] sm:right-[6%] sm:w-48
            md:bottom-[8%] md:right-[5%] md:w-56
          `}
        />

        {/* CENTER CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 text-center px-4 max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-1 text-xs font-serif italic text-black/60 sm:text-sm md:text-base tracking-wide"
          >
            Become part of an inspiring community of
          </motion.p>

          <h1 className="text-6xl font-bold tracking-tight text-black sm:text-7xl md:text-8xl lg:text-9xl leading-none">
            MPLB2<span className="text-[#FF7BB0]">.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-[10px] font-medium uppercase tracking-[0.35em] text-black/40 sm:text-xs"
          >
            SMK ICB Cinta Niaga — 2024–2027
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}