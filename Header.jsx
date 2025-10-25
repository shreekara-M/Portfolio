export default function Header() {
  return (
    <header className="header">
      <div className="profile-section">
        <div className="profile-image-container">
          <img 
            src="/WhatsApp Image 2025-10-18 at 19.04.04_9f8931b0.jpg" 
            alt="Shreekara M - IoT Specialist" 
            className="profile-image"
          />
        </div>
        <div className="profile-info">
          <h1>Shreekara M</h1>
          <p className="profile-title">IoT Specialist & AI Engineer</p>
          <p>Puttur, Karnataka, India</p>
          <p>📞 7022153161 | 📧 
            <a href="mailto:shreekara090604@gmail.com">
              shreekara090604@gmail.com
            </a>
          </p>
          <p>
            <a href="https://linkedin.com/in/shreekara-m" target="_blank">
              linkedin.com/in/shreekara-m
            </a>
          </p>
        </div>
      </div>
    </header>
  );
}
