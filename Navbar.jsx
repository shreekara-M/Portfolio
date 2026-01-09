import { motion } from 'framer-motion';

export default function Navbar() {
  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-links">
        {links.map((link) => (
          <a key={link.name} href={link.href} className="nav-link">
            {link.name}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
