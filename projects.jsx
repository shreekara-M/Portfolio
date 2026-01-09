import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Mail_Verse",
      desc: "A smart email client designed to streamline job hunting. It filters emails based on keywords like 'hiring' or 'job offer', allowing users to efficiently check recruitment mails from various companies, making the email surfing process smooth and focused.",
      tags: ["React", "Email API", "Keyword Filtering"]
    },
    {
      title: "Remote-Controlled Ploughing Machine",
      desc: "An automated agricultural robot designed to perform soil tillage and farming tasks with minimal human intervention. Integrates Arduino Uno via Bluetooth/IoT.",
      tags: ["Arduino", "IoT", "C++", "Robotics"]
    },
    {
      title: "SERENITY RETREAT",
      desc: "A premium hotel booking website offering tranquil and luxurious stays. Features include easy online booking and extensive browsing of modern amenities.",
      tags: ["React", "Web Design", "UI/UX", "CSS3"]
    }
  ];

  return (
    <section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Selected Work
      </motion.h2>

      <div className="grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, boxShadow: '0 20px 40px -20px rgba(56, 189, 248, 0.3)' }}
          >
            <div style={{ marginBottom: '1rem', color: 'var(--accent-primary)', fontSize: '2rem' }}>
              📂
            </div>

            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>{project.title}</h3>

            <p style={{ marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>{project.desc}</p>

            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              {project.tags.map((tag, idx) => (
                <span key={idx} style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--accent-primary)',
                  background: 'rgba(56, 189, 248, 0.1)',
                  padding: '4px 8px',
                  borderRadius: '4px'
                }}>
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
