"use client";

import React from "react";
import Navbar from "@/app/components/Navbar";
import MessageSection from "@/app/message/MessageSection";
import Footer from "../components/Footer";

export default function MessagePage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 pt-24 sm:pt-28 flex flex-col justify-between">
      <div>
        <Navbar />
        <div className="max-w-6xl mx-auto space-y-8 mt-4 px-4">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-pink-600 to-sky-600 bg-clip-text text-transparent">
              NGL specifically for this class
            </h1>
            <p className="text-pink-600 max-w-xl mx-auto text-sm sm:text-base">
              Select a member to anonymously send a secret message, an expression of appreciation, or a fun surprise.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <MessageSection />
        </div>
      </div>

      <Footer />
    </main>
  );
}