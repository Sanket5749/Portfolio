import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-8 text-center">
      <div className="container mx-auto px-4 flex flex-col justify-center items-center text-center">
        <h2 className="text-xl font-bold tracking-wide">
          © {new Date().getFullYear()} Sanket Patil
        </h2>
        <p className="text-sm text-gray-400">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}