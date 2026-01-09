import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './index.css';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skils';
import Projects from './projects';
import Certifications from './Certifications';
import Contact from './contacts';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'var(--accent-primary)',
          transformOrigin: '0%',
          zIndex: 9999
        }}
      />

      <div className="resume-container">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </main>

        <footer style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          <p className="font-mono">Designed & Built by Shreekara M.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
