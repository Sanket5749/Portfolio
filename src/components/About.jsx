import React from "react";
import { motion } from "motion/react"; 

export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-dark text-center px-4 py-12 space-y-12">
      <h1 className="text-5xl font-extrabold text-white">About</h1>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-16">
        <div className="text-white text-center md:text-left max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Hi I am Sanket Patil
          </h2>
          <p className="text-xl leading-relaxed text-gray-300">
            As a passionate Computer Engineering student currently pursuing my
            BTech (1st Year), I’m driven by a deep curiosity for technology
            and a love for building things that make an impact...
          </p>
        </div>

        <motion.img
           initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          src="/myPic.png"
          alt="Sanket Patil"
          className="w-80 h-80 object-cover"
        />
      </div>
    </div>
  );
}
