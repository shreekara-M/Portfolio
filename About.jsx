export default function About() {
  return (
    <section id="about">
      <h2><span className="section-number">01.</span> About Me</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
        <div className="about-text">
          <p>
            Hello! My name is Shreekara and I enjoy creating things that live on the internet.
            My interest in web development started back when I was exploring electronics and realized how software brings hardware to life.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Fast-forward to today, and I've had the privilege of working at an educational startup, <span className="highlight">Microdegree</span>.
            My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
          </p>
          <p style={{ marginTop: '1rem' }}>Here are a few technologies I've been working with recently:</p>
          <ul className="skill-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(140px, 1fr))', marginTop: '1rem', gap: '0.5rem' }}>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>IoT Protocols</li>
            <li>SQL</li>
          </ul>
        </div>

        <div className="about-img-container" style={{ position: 'relative', width: 'fit-content', margin: '0 auto' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <img
              src="/WhatsApp Image 2025-10-18 at 19.04.04_9f8931b0.jpg"
              alt="Shreekara M"
              style={{
                width: '100%',
                borderRadius: '4px',
                filter: 'grayscale(100%)',
                transition: 'var(--transition-base)',
                cursor: 'pointer',
                display: 'block',
                position: 'relative',
                zIndex: 2
              }}
              onMouseOver={e => e.currentTarget.style.filter = 'none'}
              onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%)'}
            />
            <div style={{
              position: 'absolute',
              top: '15px',
              left: '15px',
              width: '100%',
              height: '100%',
              border: '2px solid var(--accent-primary)',
              borderRadius: '4px',
              zIndex: 1,
              transition: 'var(--transition-base)'
            }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
