import './index.css';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Education from './Education';
import Skills from './Skils';
import Projects from './projects';
import Certifications from './Certifications';
import Contact from './contacts';

function App() {
  return (
    <div className="portfolio">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
