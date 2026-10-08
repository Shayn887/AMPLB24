"use client";

import React from "react";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";
import CircularCarousel from "./reactbits/CircularCarousel";
import AccordionGallery from "./reactbits/AccordionGallery";

const Certificates = () => {
    const items = [
        { image: assets.nemo3.src || assets.nemo3, label: '' },
        { image: assets.nemo5.src || assets.nemo5, label: '' },
        { image: assets.nemo6.src || assets.nemo6, label: '' },
        { image: assets.nemo.src || assets.nemo, label: '' },
        { image: assets.nemo8.src || assets.nemo8, label: '' },
    ];

    return (
        <section
            id="certificates"
            className="w-full px-[5%] md:px-[8%] lg:px-[12%] py-16 scroll-mt-20 overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h4 className="text-center mb-2 text-lg font-Ovo">
                    Memory
                </h4>

                <h2 className="text-center text-5xl font-Ovo">
                    Can we?
                </h2>

                <p className="text-center text-gray-500 max-w-xl mx-auto mt-4 font-Ovo">
                    Can we be like this forever?
                </p>
            </motion.div>

            <div
                className="relative w-full overflow-hidden mt-8"
                style={{
                    height: "520px",
                }}
            >
                <AccordionGallery
                    items={items}
                    defaultIndex={2}
                    expandRatio={0.52}
                    trigger="hover"
                    accentColor="#ffffff"
                    overlayColor="#060010"
                    textColor="#ffffff"
                    grayscale
                    showLabels
                    duration={0.6}
                    ease="power3.out"
                    parallax={0.5}
                    tilt={8}
                    stagger={0.06}
                    height={460}
                    gap={10}
                    radius={16}
                    orientation="horizontal"
                />
            </div>
        </section>
    );
};

export default Certificates;