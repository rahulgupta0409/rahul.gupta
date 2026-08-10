import { ThemeProvider } from './context/ThemeContext';
import { IslandProvider } from './context/IslandContext';
import Navbar from './components/Navbar/Navbar';
import DynamicIsland from './components/DynamicIsland/DynamicIsland';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <IslandProvider>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        <DynamicIsland />
        <Navbar />

        <main id="main-content" tabIndex={-1}>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </IslandProvider>
    </ThemeProvider>
  );
}
