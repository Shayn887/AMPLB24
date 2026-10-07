"use client";

import React from "react";
import { DiaTextReveal } from "./magicui/ui/DiaTextReveal";
import { BentoGridThirdDemo } from "./magicui/ui/BentoGrid";
import CurvedLoop from "./reactbits/CurvedLoop";


const About = () => {
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <div className="flex flex-col items-center justify-center text-center mb-3 font-Ovo font-medium text-black">
                <h2 className="mb-2 max-w-2xl text-5xl font-Ovo flex flex-col items-center justify-center">
                    <DiaTextReveal text="Hello There!" textColor="#000000" />
                    <span className="px-2 sm:px-3 my-3 max-w-2xl text-5xl bg-pink-400 text-white overflow-hidden flex items-center justify-center rounded-lg">
                        <DiaTextReveal text="We are From MPLB2 SMK ICB CINTA NIAGA" textColor="#ffffff" />
                    </span>
                </h2>
                <p className="mb-1 font-Ovo text-[clamp(14px,4vw,32px)] max-w-3xl">
                    <DiaTextReveal
                        text="From typing tasks and managing digital archives to learning business communication ethics—we cover it all step-by-step here. At MPLB 2, we believe that learning is most exciting when done together. We constantly strive to hone modern administrative skills to prepare for the workforce, all while maintaining a strong sense of family and mutual support."
                        textColor="#000000"
                    />
                </p>
            </div>
            <div className="mt-10">
                <BentoGridThirdDemo />
            </div>
        </div>
    );
};

export default About;
