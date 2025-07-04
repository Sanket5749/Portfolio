import React from 'react';
import {motion} from 'motion';

export default function About() {
  return (
    
    <div className="min-h-screen flex flex-col justify-center items-center bg-dark text-center px-4 py-12 space-y-12">
  <h1 className="text-4xl font-bold text-white">About</h1>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6 mb-4 md:mb-0">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Hi I am Sanket Patil</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          As a passionate Computer Engineering student currently pursuing my BTech (1st Year), I’m driven by a deep curiosity for technology and a love for building things that make an impact...
        </p>
      </div>
      <div className="col-md-6">
        <motion.img
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
        }}
        src="/myPic.webp"
        alt="Sanket Patil"
        className="img-fluid"
        />
      </div>
    </div>
  </div>
</div>
              
  );
}
