import { motion } from 'framer-motion';

export default function Experience() {
    return (
        <section id="experience">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Experience
            </motion.h2>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <motion.div
                    className="glass-card"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem' }}>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                            Front End Developer <span style={{ color: 'var(--accent-primary)' }}>@ Microdegree</span>
                        </h3>
                        <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>Present</span>
                    </div>

                    <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Contributing to the development and maintenance of innovative software solutions.</li>
                        <li style={{ marginBottom: '0.5rem' }}>Collaborating with cross-functional teams to design, implement, and optimize features.</li>
                        <li>Key Focus Areas: Artificial Intelligence,Programming languages,web development,</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
