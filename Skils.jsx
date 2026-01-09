import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "C++", "HTML", "CSS", "Python", "Java", "SQL", "JavaScript"]
    },
    {
      title: "Technologies",
      skills: ["React", "Node.js", "Vite", "ASP", "PHP", "IoT"]
    },
    {
      title: "Tools",
      skills: ["VS Code", "GitHub", "Git", "Arduino", "Micro-controler", "Arduino IDE"]
    }
  ];

  return (
    <section id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>

      <div className="grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, borderColor: 'var(--accent-primary)' }}
            style={{ textAlign: 'center' }}
          >
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>{category.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
              {category.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(56, 189, 248, 0.2)' }}
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    color: 'var(--text-primary)',
                    cursor: 'default'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
