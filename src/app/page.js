import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import ParticlesCover from "./components/Particles";
import Contact from "./components/Contact";

export default function page() {
  return (
    <div>
      <ParticlesCover />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}
