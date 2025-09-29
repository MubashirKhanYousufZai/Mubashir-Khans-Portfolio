import Projects from "./components/projects/page";
import Experience from "./components/experiance/page";
import Contact from "./components/contact/page";
import Skills from "./components/skills/page";
import Hero from "./components/hero/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills/>
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
