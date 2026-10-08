"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { assets } from "@/assets/assets";

const destinations = [
  {
    id: "message",
    eyebrow: "Say something",
    title: "Leave a Message",
    description:
      "Tulis pesan, kesan, atau cerita yang ingin kamu tinggalkan untuk kelas secara anonim atau dikenal",
    link: "/message",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    icon: MessageCircle,
    accent: "from-sky-500/40 via-cyan-400/10 to-transparent",
  },
  {
    id: "student",
    eyebrow: "Meet everyone",
    title: "Explore Students",
    description:
      "Kenali Anggota anggota kelas kami",
    link: "/student",
    image: assets.nemo6.src,
    icon: Users,
    accent: "from-violet-500/40 via-fuchsia-400/10 to-transparent",
  },
];

export default function Next() {
  return (
    <section id="next" className="w-full px-[6%] sm:px-[10%] py-20 scroll-mt-20 bg-white text-black relative overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <div className="mt-3 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight max-w-2xl">
              Where do we go next?
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-md lg:text-right">
              Setelah melihat halaman utama, lanjutkan pencarianmu ke bagian yang paling ingin kamu buka.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {destinations.map((item, index) => (
            <DestinationCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DestinationCard({ item, index }) {
  const router = useRouter();
  const Icon = item.icon;

  return (
    <motion.button
      type="button"
      onClick={() => router.push(item.link)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      className="group text-left relative min-h-[420px] rounded-[30px] overflow-hidden border border-white/10 bg-white/[0.04] shadow-[0_30px_80px_-45px_rgba(0,0,0,0.8)] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
    >
      <Image
        src={item.image}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
      />

      <div className={`absolute inset-0 bg-gradient-to-br ${item.accent}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/70 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 backdrop-blur-md px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
              <Icon className="w-3.5 h-3.5" />
              {item.eyebrow}
            </div>
            <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-300 max-w-md">
              {item.description}
            </p>
          </div>

          <span className="w-12 h-12 rounded-full border border-white/15 bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-white group-hover:text-slate-950 group-hover:-translate-y-1">
            <ArrowUpRight className="w-5 h-5" />
          </span>
        </div>

        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>MPLB2 2024–2027</span>
          <span className="text-white/70 group-hover:text-white transition-colors">Open page</span>
        </div>
      </div>
    </motion.button>
  );
}
