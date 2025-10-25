export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-greeting">Hello, I'm</span>
              <span className="hero-name">Shreekara M</span>
            </h1>
            <h2 className="hero-subtitle">
              IoT Specialist & AI Engineer
            </h2>
            <p className="hero-description">
              Passionate about creating smart, connected solutions that bridge the gap between 
              hardware and software. I specialize in IoT development, embedded systems, and 
              AI integration to build innovative solutions for the connected world.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary" 
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary" 
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <img 
                src="/WhatsApp Image 2025-10-18 at 19.04.04_9f8931b0.jpg" 
                alt="Shreekara M - IoT Specialist" 
                className="hero-image"
              />
              <div className="floating-elements">
                <div className="floating-icon">🔌</div>
                <div className="floating-icon">🤖</div>
                <div className="floating-icon">💻</div>
                <div className="floating-icon">🌐</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Learning</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4+</span>
            <span className="stat-label">Certifications</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Passionate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
