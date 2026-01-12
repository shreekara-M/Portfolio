import { motion } from 'framer-motion';

export default function Certifications() {
  const certifications = [
    {
      year: "2024",
      title: "Front End Development",
      provider: "Great Learning Academy"
    },
    {
      year: "2024",
      title: "Artificial Intelligence",
      provider: "Great Learning"
    },
    {
      year: "2024",
      title: "Mastering AI Tools",
      provider: "Be10x"
    },
    {
      year: "2025",
      title: "Python",
      provider: "Microdegree"
    },
    {
      year: "2025",
      title: "SQL",
      provider: "Microdegree"
    },
    {
      year: "2026",
      title: "Master in Software Engineering",
      provider: "IICT"
    }
  ];

  return (
    <section id="certifications">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>

      <div className="grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏆</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', minHeight: '3rem' }}>{cert.title}</h3>
            <p style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>{cert.provider}</p>
            <span style={{ display: 'block', marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{cert.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
