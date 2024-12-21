import Contact from "./components/contact/page";
import Hero from "./components/hero/page";
import Projects from "./components/projects/page";
import Skills from "./components/skills/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
