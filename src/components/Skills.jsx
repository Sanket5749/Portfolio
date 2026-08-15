import React from "react";

const skills = [
  { img: "/html.png", title: "html" },
  { img: "/css.png", title: "css" },
  { img: "/js.png", title: "javascript" },
  { img: "/node.png", title: "nodeJs" },
  { img: "/express.png", title: "expressJs" },
  { img: "/mongodb.png", title: "mongodb" },
  { img: "/react.png", title: "react" },
  { img: "/react-native.png", title: "react native" },
  { img: "/c.png", title: "c" },
  { img: "/c++.png", title: "c++" },
  { img: "/python.png", title: "python" },
  { img: "/java.png", title: "java" },
  { img: "/git.png", title: "git" },
  { img: "/github.png", title: "github" },
];

export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-dark text-white px-4 py-12">
      <h1 className="text-4xl font-extrabold tracking-wide">Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl w-full mt-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-zinc-800 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <img src={skill.img} alt={skill.title} className="h-16 mb-2 hover:scale-120 transition duration-300 ease-in-out" />
            <span className="capitalize text-lg font-medium hover:scale-120 transition duration-300 ease-in-out">{skill.title}</span>
          </div>
        ))}
      </div>
    </div>
  );

}




