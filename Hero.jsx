import { motion } from 'framer-motion';

export default function Hero() {
  const text = "Hello my self Shreekara";

  const letter = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08, // Typewriter speed
      },
    },
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Profile Image with Glow */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="hero-image-wrapper"
        >
          <img
            src="/profile_final.jpg"
            alt="Shreekara M"
            className="hero-img"
          />
        </motion.div>

        {/* Typewriter Text */}
        <motion.h3
          className="typewriter-text"
          variants={sentence}
          initial="hidden"
          animate="visible"
          style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h3>

        {/* Main Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          style={{
            fontSize: '6rem',
            lineHeight: '1',
            marginBottom: '1.5rem',
            background: 'linear-gradient(to right, #fff, #94a3b8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(255,255,255,0.1)'
          }}
        >
          I Build Digital Experiences.
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.5 }}
          style={{ maxWidth: '700px', margin: '0 auto 2.5rem', fontSize: '1.25rem', color: 'var(--text-secondary)' }}
        >
          Software Engineer specializing in building accessible, human-centered products.
        </motion.p>

        <motion.a
          href="#projects"
          className="btn"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.5 }}
        >
          View Work
        </motion.a>
      </div>
    </section>
  );
}
