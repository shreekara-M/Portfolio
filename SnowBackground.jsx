import { useEffect, useState } from 'react';
import './index.css';

const SnowBackground = () => {
    const [snowflakes, setSnowflakes] = useState([]);

    useEffect(() => {
        // Generates static properties for snowflakes once on mount to avoid re-renders
        const flakes = Array.from({ length: 75 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            animationDelay: Math.random() * 10,
            animationDuration: Math.random() * 15 + 15, // 15s to 30s for cinematic slow movement
            opacity: Math.random() * 0.3 + 0.1, // Lower opacity for subtle effect
            size: Math.random() * 3 + 2 // Slightly smaller, consistent size
        }));
        setSnowflakes(flakes);
    }, []);

    return (
        <div className="snow-container">
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="snowflake"
                    style={{
                        left: `${flake.left}%`,
                        animationDelay: `${flake.animationDelay}s`,
                        animationDuration: `${flake.animationDuration}s`,
                        opacity: flake.opacity,
                        width: `${flake.size}px`,
                        height: `${flake.size}px`,
                    }}
                />
            ))}
        </div>
    );
};

export default SnowBackground;
