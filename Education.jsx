import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <h3 style={{ fontSize: '1.25rem' }}>B.Sc. in Computer Science and Electronics</h3>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}>2026</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Vivekananda Degree College, Puttur</p>
        </motion.div>

        <motion.div
          className="glass-card"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <h3 style={{ fontSize: '1.25rem' }}>PUC - PCME</h3>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}>2022</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Vivekananda Pre-University College</p>
        </motion.div>
      </div>
    </section>
  );
}
