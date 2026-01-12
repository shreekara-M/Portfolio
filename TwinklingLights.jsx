import { useEffect, useState } from 'react';
import './index.css';

const TwinklingLights = () => {
    const [lights, setLights] = useState([]);

    useEffect(() => {
        const generatedLights = Array.from({ length: 25 }).map((_, i) => ({
            id: i,
            top: Math.random() * 100,
            left: Math.random() * 100,
            animationDelay: Math.random() * 5,
            animationDuration: Math.random() * 4 + 3, // 3-7s duration
            size: Math.random() * 150 + 50, // 50px - 200px sizes
        }));
        setLights(generatedLights);
    }, []);

    return (
        <div className="lights-container">
            {lights.map((light) => (
                <div
                    key={light.id}
                    className="light-particle"
                    style={{
                        top: `${light.top}%`,
                        left: `${light.left}%`,
                        width: `${light.size}px`,
                        height: `${light.size}px`,
                        animationDelay: `${light.animationDelay}s`,
                        animationDuration: `${light.animationDuration}s`,
                    }}
                />
            ))}
        </div>
    );
};

export default TwinklingLights;
