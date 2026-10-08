'use client'

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Next from "./components/Next";
import Certificates from "./components/Cerificates";
import Footer from "./components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Navbar hanya muncul setelah loading selesai */}
      {!isLoading && <Navbar />}

      <Header />
      <About />
      <Gallery />
      <Certificates />
      <Next />
      <Footer />
    </>
  );
}