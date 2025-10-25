import { useState } from 'react';

export default function Skills() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const skillSlides = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Python", level: 90, color: "#3776ab" },
        { name: "Java", level: 85, color: "#f89820" },
        { name: "JavaScript", level: 88, color: "#f7df1e" },
        { name: "C++", level: 80, color: "#00599c" },
        { name: "SQL", level: 85, color: "#336791" },
        { name: "HTML/CSS", level: 92, color: "#e34f26" }
      ],
      description: "Proficient in multiple programming languages with focus on IoT and web development"
    },
    {
      title: "IoT & Embedded Systems",
      icon: "🔌",
      skills: [
        { name: "Arduino", level: 95, color: "#00979d" },
        { name: "Raspberry Pi", level: 90, color: "#c51a4a" },
        { name: "ESP32/ESP8266", level: 88, color: "#e74c3c" },
        { name: "Sensors & Actuators", level: 92, color: "#3498db" },
        { name: "MQTT Protocol", level: 85, color: "#2ecc71" },
        { name: "LoRaWAN", level: 80, color: "#9b59b6" },
        { name: "Bluetooth Low Energy", level: 82, color: "#f39c12" },
        { name: "WiFi Connectivity", level: 90, color: "#e67e22" }
      ],
      description: "Expert in embedded systems, sensor integration, and IoT communication protocols"
    },
    {
      title: "AI Intelligence & Technologies",
      icon: "🤖",
      skills: [
        { name: "Machine Learning", level: 88, color: "#ff6b6b" },
        { name: "Deep Learning", level: 85, color: "#4ecdc4" },
        { name: "Neural Networks", level: 82, color: "#45b7d1" },
        { name: "Computer Vision", level: 80, color: "#96ceb4" },
        { name: "Natural Language Processing", level: 75, color: "#feca57" },
        { name: "Edge AI", level: 78, color: "#ff9ff3" },
        { name: "TensorFlow", level: 85, color: "#ff6b35" },
        { name: "PyTorch", level: 80, color: "#ee5a24" }
      ],
      description: "Advanced AI and machine learning capabilities with edge computing expertise"
    },
    {
      title: "Web Technologies & Frameworks",
      icon: "🌐",
      skills: [
        { name: "React", level: 90, color: "#61dafb" },
        { name: "Node.js", level: 85, color: "#68a063" },
        { name: "JavaScript", level: 88, color: "#f7df1e" },
        { name: "Python", level: 90, color: "#3776ab" },
        { name: "Data Structures", level: 85, color: "#8e44ad" },
        { name: "RESTful APIs", level: 88, color: "#e74c3c" }
      ],
      description: "Full-stack development with modern web technologies and frameworks"
    },
    {
      title: "Development Tools & Platforms",
      icon: "🛠️",
      skills: [
        { name: "Arduino IDE", level: 95, color: "#00979d" },
        { name: "PlatformIO", level: 90, color: "#00a86b" },
        { name: "Visual Studio Code", level: 92, color: "#007acc" },
        { name: "Git & GitHub", level: 88, color: "#f05032" }
      ],
      description: "Essential toolkit for IoT development and version control"
    },
    {
      title: "Soft Skills",
      icon: "👥",
      skills: [
        { name: "Problem Solving", level: 95, color: "#2ecc71" },
        { name: "Team Leadership", level: 90, color: "#3498db" },
        { name: "Communication", level: 92, color: "#9b59b6" },
        { name: "Project Management", level: 88, color: "#f39c12" },
        { name: "Critical Thinking", level: 90, color: "#e74c3c" },
        { name: "Adaptability", level: 93, color: "#1abc9c" }
      ],
      description: "Strong interpersonal skills and leadership capabilities"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % skillSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + skillSlides.length) % skillSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      
      <div className="skills-slider-container">
        <div className="skills-slider">
          <div className="slider-content">
            <div className="slide-header">
              <span className="skill-icon">{skillSlides[currentSlide].icon}</span>
              <h3>{skillSlides[currentSlide].title}</h3>
            </div>
            <p className="skill-description">{skillSlides[currentSlide].description}</p>
            <div className="skills-grid">
              {skillSlides[currentSlide].skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-card">
                    <div className="skill-icon-container">
                      <div 
                        className="skill-circular-progress"
                        style={{
                          background: `conic-gradient(${skill.color} ${skill.level * 3.6}deg, #e0e0e0 0deg)`
                        }}
                      >
                        <div className="skill-inner-circle">
                          <span className="skill-level-text">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <div className="skill-level-indicator">
                        <div className="skill-dots">
                          {[...Array(5)].map((_, dotIndex) => (
                            <span 
                              key={dotIndex}
                              className={`skill-dot ${dotIndex < Math.floor(skill.level / 20) ? 'active' : ''}`}
                              style={{ backgroundColor: skill.color }}
                            ></span>
                          ))}
                        </div>
                        <span className="skill-level-label">
                          {skill.level >= 90 ? 'Expert' : 
                           skill.level >= 80 ? 'Advanced' : 
                           skill.level >= 70 ? 'Intermediate' : 
                           skill.level >= 60 ? 'Beginner+' : 'Beginner'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="slider-controls">
          <button className="slider-btn prev-btn" onClick={prevSlide}>
            <span>‹</span>
          </button>
          <div className="slider-dots">
            {skillSlides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          <button className="slider-btn next-btn" onClick={nextSlide}>
            <span>›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
