import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState('hero');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 10);

    const sectionIds = ['hero','about','skills','projects','education','certifications','contact'];
    for (let i = 0; i < sectionIds.length; i++) {
      const id = sectionIds[i];
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        setActive(id);
        break;
      }
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-text">Shreekara M</span>
          <span className="logo-subtitle">IoT Specialist</span>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" className={`nav-link ${active==='about' ? 'active' : ''}`} onClick={() => scrollToSection('about')}>About</a>
          <a href="#skills" className={`nav-link ${active==='skills' ? 'active' : ''}`} onClick={() => scrollToSection('skills')}>Skills</a>
          <a href="#projects" className={`nav-link ${active==='projects' ? 'active' : ''}`} onClick={() => scrollToSection('projects')}>Projects</a>
          <a href="#education" className={`nav-link ${active==='education' ? 'active' : ''}`} onClick={() => scrollToSection('education')}>Education</a>
          <a href="#certifications" className={`nav-link ${active==='certifications' ? 'active' : ''}`} onClick={() => scrollToSection('certifications')}>Certifications</a>
          <a href="#contact" className={`nav-link cta-link ${active==='contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>Contact</a>
        </div>

        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation" aria-expanded={isMenuOpen}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}
