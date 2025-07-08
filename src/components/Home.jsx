import React {useEffect} from 'react'
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Home() {
  useEffect(()=>{
    const utterance = new SpeechSynthesisUtterance("Welcome to Sanket Portfolio");
   window.speechSynthesis.speak(utterance);
  },[]);
  return (
    <>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  )
}
