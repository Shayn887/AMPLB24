'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Component Bintang Sparkle Gemini
function SparkleStar({ cx, cy, size = 20, delay = 0 }) {
  const r = size / 2;
  return (
    <motion.path
      d={`M ${cx} ${cy - r} Q ${cx} ${cy} ${cx - r} ${cy} Q ${cx} ${cy} ${cx} ${cy + r} Q ${cx} ${cy} ${cx + r} ${cy} Q ${cx} ${cy} ${cx} ${cy - r} Z`}
      fill="#FF7BB0"
      animate={{
        scale: [0.8, 1.2, 0.8],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay,
      }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    />
  );
}

// SVG Kupu-Kupu Sesuai Sketsa
function ButterflyLogo() {
  return (
    <motion.svg
      width="360"
      height="360"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // Animasi Melayang (Floating Effect)
      animate={{
        y: [0, -10, 0, 8, 0],
        rotate: [0, 1, -1, 0.5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="drop-shadow-[0_0_20px_rgba(255,123,176,0.3)] select-none"
    >
      {/* 1. SAYAP KIRI (Dengan Animasi Kepakan Sayap) */}
      <motion.g
        style={{ transformOrigin: '200px 200px' }}
        animate={{ scaleX: [1, 1, 1] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Sayap Luar Kiri */}
        <path
          d="M 200 135 C 130 50, 40 65, 45 170 C 48 210 105 220 95 250 C 80 315 155 340 200 280 Z"
          fill="#85E1F4"
          stroke="#FF7BB0"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        {/* Corak Dalam Sayap Kiri (Garis Melengkung Sejajar) */}
        <path
          d="M 190 150 C 135 80, 68 95, 72 170 C 75 200 115 210 108 235 C 98 280 155 300 190 260"
          fill="none"
          stroke="#FF7BB0"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </motion.g>

      {/* 2. SAYAP KANAN (Dicerminkan Presisi dari Sayap Kiri) */}
      <motion.g
        style={{ transformOrigin: '200px 200px' }}
        animate={{ scaleX: [1, 1, 1] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Sayap Luar Kanan */}
        <path
          d="M 200 135 C 270 50, 360 65, 355 170 C 352 210 295 220 305 250 C 320 315 245 340 200 280 Z"
          fill="#85E1F4"
          stroke="#FF7BB0"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        {/* Corak Dalam Sayap Kanan */}
        <path
          d="M 210 150 C 265 80, 332 95, 328 170 C 325 200 285 210 292 235 C 302 280 245 300 210 260"
          fill="none"
          stroke="#FF7BB0"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </motion.g>

      {/* 3. BADAN TENGAH (Duri Atas/Bawah & Gerigi Notches Sesuai Sketsa) */}
      <path
        d="
          M 200 55 
          L 207 125 
          L 222 132
          L 210 138
          L 220 148
          L 206 150
          L 205 265
          L 216 270
          L 200 355
          L 184 270
          L 195 265
          L 194 150
          L 180 148
          L 190 138
          L 178 132
          L 193 125
          Z
        "
        fill="#FF7BB0"
        stroke="#FF7BB0"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <SparkleStar cx={50} cy={80} size={32} delay={0} />

      <SparkleStar cx={90} cy={50} size={20} delay={0.4} />

      <SparkleStar cx={350} cy={310} size={34} delay={0.2} />

      <SparkleStar cx={310} cy={345} size={22} delay={0.6} />

      <SparkleStar cx={240} cy={345} size={22} delay={0.6} />
    </motion.svg>
  );
}

// --- MAIN PRELOADER COMPONENT ---
export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      // Transisi Fade In & Fade Out
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#111116] text-white select-none overflow-hidden"
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* SVG Kupu-Kupu Sketsa */}
        <ButterflyLogo />

        {/* Indicator Progress Loading */}
        <div className="mt-6 flex flex-col items-center gap-3">

          <div className="w-52 h-2 bg-neutral-800 rounded-full overflow-hidden border border-neutral-700/60">
            <motion.div
              className="h-full bg-gradient-to-r from-[#85E1F4] to-[#FF7BB0]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}