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
  // Pilihan styling berdasarkan bentuk yang diinginkan
  const variantStyles = {
    circle: "rounded-full aspect-square overflow-hidden shadow-2xl",
    square: "rounded-2xl aspect-square overflow-hidden shadow-2xl",
    // Heart menggunakan CSS clip-path (cocok untuk gambar biasa/foto)
    heart: "aspect-square overflow-hidden shadow-2xl [clip-path:path('M12_21.35l-1.45-1.32C5.4_15.36_2_12.28_2_8.5_2_5.42_4.42_3_7.5_3c1.74_0_3.41.81_4.5_2.09C13.09_3.81_14.76_3_16.5_3_19.58_3_22_5.42_22_8.5c0_3.78-3.4_6.86-8.55_11.54L12_21.35z')]", 
    // Raw tanpa efek border/clip (cocok untuk SVG/PNG transparan seperti emot)
    raw: "",
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
        sizes="(max-width: 768px) 35vw, 260px"
        className="object-cover"
      />
      {variant !== "raw" && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10" />
      )}
    </motion.div>
  );
}

export default function Header() {
  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-white flex items-center justify-center">
      {/* Ambient Background Glow & Grain */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[20%] top-[20%] h-80 w-80 rounded-full bg-cyan-500/[0.05] blur-[140px]" />
        <div className="absolute bottom-[20%] right-[15%] h-96 w-96 rounded-full bg-pink-500/[0.05] blur-[150px]" />
      </div>

      <div className="relative w-full max-w-7xl h-full mx-auto px-4 flex items-center justify-center p-11">


        <FloatingPhoto
          src={assets.memo}
          alt="Class memory 1"
          priority
          delay={0.1}
          variant="circle"
          className="
            top-[8%] left-[8%]
            w-28 sm:w-36 md:w-44
            -rotate-6
            sm:top-[8%] sm:left-[16%]
            md:top-[6%] md:left-[18%]
          "
        />

        {/* 2. Kiri Tengah (Bentuk Kotak Rounded) */}
        <FloatingPhoto
          src={assets.Rpls}
          alt="Class photo 2"
          delay={0.2}
          variant="square"
          className="
            top-[28%] -left-[2%]
            w-32 sm:w-40 md:w-48
            rotate-3
            sm:left-[0%]
            md:top-[26%] md:left-[2%]
          "
        />

        {/* 3. Kiri Bawah (Lingkaran Sempurna) */}
        <FloatingPhoto
          src={assets.rplcn24}
          alt="Class memory 3"
          delay={0.3}
          variant="circle"
          className="
            bottom-[6%] left-[0%]
            w-36 sm:w-44 md:w-52
            -rotate-3
            sm:left-[2%]
            md:bottom-[4%] md:left-[5%]
          "
        />

        {/* 4. Kanan Atas (Bentuk Love / Heart) */}
        <FloatingPhoto
          src={assets.memo1}
          alt="Class memory 4"
          delay={0.15}
          variant="square"
          className="
            top-[8%] right-[8%]
            w-28 sm:w-36 md:w-44
            rotate-6
            sm:top-[8%] sm:right-[16%]
            md:top-[6%] md:right-[18%]
          "
        />

        {/* 5. Kanan Tengah (Khusus Emot/SVG Transparan tanpa terpotong) */}
        <FloatingPhoto
          src={assets.emot}
          alt="Class memory 5"
          delay={0.25}
          variant="raw"
          className="
            top-[32%] -right-[4%]
            w-28 sm:w-36 md:w-40
            aspect-square -rotate-0
            sm:right-[0%]
            md:top-[32%] md:right-[2%]
          "
        />

        {/* 6. Kanan Bawah (Lingkaran Sempurna) */}
        <FloatingPhoto
          src={assets.profile}
          alt="Class profile 6"
          delay={0.35}
          variant="circle"
          className="
            bottom-[6%] right-[0%]
            w-36 sm:w-48 md:w-56
            rotate-3
            sm:right-[2%]
            md:bottom-[4%] md:right-[5%]
          "
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