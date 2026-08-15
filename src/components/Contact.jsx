import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import * as HoverCard from "@radix-ui/react-hover-card";

const contactInfo = [
  {
    link: "https://github.com/Sanket5749",
    title: "GitHub",
    description: "Open-source projects & contributions",
    icon: <Github className="w-15 h-15" />,
  },
  {
    link: "https://www.linkedin.com/in/sanket-patil-16b9293b5/",
    title: "LinkedIn",
    description: "Professional networking & resume",
    icon: <Linkedin className="w-15 h-15" />,
  },
  {
    link: "mailto:sanketpatil574918@gmail.com",
    title: "Email",
    description: "sanketpatil574918@gmail.com",
    icon: <Mail className="w-15 h-15" />,
  }
];

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-dark text-white px-4 py-12">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-black mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Contact
        </h1>
        <p className="text-gray-400 text-lg">
          Connect with me on these platforms
        </p>
      </div>

      <div className="flex flex-wrap gap-40 justify-center items-center max-w-3xl mt-6">
        {contactInfo.map((info, idx) => (
          <HoverCard.Root key={idx}>
            <HoverCard.Trigger asChild>
              <a
                href={info.link}
                target={info.link.startsWith("mailto") ? undefined : "_blank"}
                rel={info.link.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110 no-underline"
              >
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                  <div className="text-gray-300 transition-colors">
                    {info.icon}
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-300 transition-colors">
                  {info.title}
                </span>
              </a>
            </HoverCard.Trigger>
            
            <HoverCard.Content className="w-56 p-3 rounded-lg bg-[#1a1a1a] border border-white/10 shadow-lg">
              <div className="space-y-1">
                <h3 className="text-white font-semibold text-sm">{info.title}</h3>
                <p className="text-gray-400 text-xs">{info.description}</p>
              </div>
            </HoverCard.Content>
          </HoverCard.Root>
        ))}
      </div>
    </div>
  );
}