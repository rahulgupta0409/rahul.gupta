import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
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

// Pulls in html2canvas + jsPDF (for the PDF download), which only the
// resume page needs — lazy-loaded so regular portfolio visitors don't pay
// for that weight in their initial bundle.
const Resume = lazy(() => import('./pages/Resume/Resume'));

function Portfolio() {
  return (
    <>
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
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <IslandProvider>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route
            path="/resume"
            element={
              <Suspense fallback={null}>
                <Resume />
              </Suspense>
            }
          />
        </Routes>
      </IslandProvider>
    </ThemeProvider>
  );
}
