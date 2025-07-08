import React {useEffect} from 'react'
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Home() {
 useEffect(() => {
  const synth = window.speechSynthesis;
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance("Welcome to Sanket Portfolio");
    synth.speak(utterance);
  };
  setTimeout(speak, 200); 
}, []);
  return (
    <>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  )
}
