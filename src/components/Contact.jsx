import React from 'react';

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-dark text-white px-4 py-16">
      <h1 className="text-5xl font-extrabold mb-12 tracking-wide text-center">
        Contact
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl w-full text-center">
     
        <a
          href="https://github.com/Sanket5749"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:-translate-y-1 hover:scale-101 border rounded-lg py-6 shadow-lg bg-gray-800 text-decoration-none"
        >
          <h2 className="text-2xl font-semibold mb-2">GitHub</h2>
          <p className="text-sm text-gray-400">Explore my projects and code</p>
        </a>

        
        <a
          href="https://www.linkedin.com/in/sanket-patil-32142232a"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:-translate-y-1 hover:scale-101 border rounded-lg py-6 shadow-lg bg-gray-800 text-decoration-none"
        >
          <h2 className="text-2xl font-semibold mb-2">LinkedIn</h2>
          <p className="text-sm text-gray-400">Connect professionally with me</p>
        </a>
      </div>
    </div>
  );
}