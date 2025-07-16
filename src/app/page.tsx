import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contacts id="contacts" />
      <Footer />
      <ThemeToggle />
    </>
  );
}