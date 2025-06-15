import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";
import Navbar from "../components/Navbar";
import Hero from "../pages/Hero";
import About from "../pages/About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <header>
        <Navbar />
        <ThemeToggle />
      </header>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
