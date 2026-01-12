import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/917022153161"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button glass-card"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1.5
            }}
            whileHover={{
                scale: 1.2,
                backgroundColor: "rgba(56, 189, 248, 0.1)", // Slight glow background
                borderColor: "var(--accent-primary)",
                boxShadow: "0 0 20px rgba(56, 189, 248, 0.6)"
            }}
            whileTap={{ scale: 0.9 }}
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                backgroundColor: 'rgba(23, 23, 23, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'var(--accent-primary)',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
                textDecoration: 'none',
                padding: 0
            }}
        >
            <FaWhatsapp size={35} />
        </motion.a>
    );
};

export default WhatsAppButton;
