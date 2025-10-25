export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Get In Touch</h2>
      <p className="contact-intro">
        I'm always open to discussing new opportunities, innovative projects, 
        and exciting collaborations. Let's connect and create something amazing together!
      </p>
      
      <div className="contact-methods">
        <div className="contact-method">
          <div className="contact-icon">📞</div>
          <div className="contact-info">
            <h3>Phone</h3>
            <p>+91 7022153161</p>
            <p>Available: Mon-Fri, 9 AM - 6 PM IST</p>
          </div>
        </div>

        <div className="contact-method">
          <div className="contact-icon">📧</div>
          <div className="contact-info">
            <h3>Email</h3>
            <p>
              <a href="mailto:shreekara090604@gmail.com">
                shreekara090604@gmail.com
              </a>
            </p>
            <p>I typically respond within 24 hours</p>
          </div>
        </div>

        <div className="contact-method">
          <div className="contact-icon">💼</div>
          <div className="contact-info">
            <h3>LinkedIn</h3>
            <p>
              <a href="https://linkedin.com/in/shreekara-m" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/shreekara-m
              </a>
            </p>
            <p>Connect with me for professional networking</p>
          </div>
        </div>

        <div className="contact-method">
          <div className="contact-icon">📍</div>
          <div className="contact-info">
            <h3>Location</h3>
            <p>Puttur, Karnataka, India</p>
            <p>Open to remote work opportunities</p>
          </div>
        </div>
      </div>

      <div className="contact-cta">
        <p>
          <strong>Ready to work together?</strong> Let's discuss how I can contribute 
          to your team's success and help bring your ideas to life!
        </p>
      </div>
    </section>
  );
}
