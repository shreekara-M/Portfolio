export default function Education() {
  return (
    <section className="education" id="education">
      <h2>Education</h2>
      
      <div className="education-timeline">
        <div className="education-item">
          <div className="education-header">
            <h3>B.Sc. in Computer Science and Electronics</h3>
            <span className="education-date">Expected June 2026</span>
          </div>
          <p className="education-institution">Vivekananda Degree College, Puttur</p>
          <div className="education-details">
            <p><strong>Relevant Coursework:</strong></p>
            <ul className="course-list">
              <li>Data Structures and Algorithms</li>
              <li>Database Management Systems</li>
              <li>Micro-controller Programming</li>
              <li>Computer Networks</li>
              <li>Software Engineering</li>
              <li>Operating Systems</li>
            </ul>
            <p><strong>Current Status:</strong> Pursuing with focus on practical applications and hands-on projects</p>
          </div>
        </div>

        <div className="education-item">
          <div className="education-header">
            <h3>Pre-University Course (PUC)</h3>
            <span className="education-date">April 2022</span>
          </div>
          <p className="education-institution">Vivekananda PU College, Puttur</p>
          <div className="education-details">
            <p><strong>Stream:</strong> PCME (Physics, Chemistry, Mathematics, Electronics)</p>
            <p><strong>Percentage:</strong> 60%</p>
            <p><strong>Key Achievements:</strong> Strong foundation in mathematics and science, participated in electronics workshops</p>
          </div>
        </div>

        <div className="education-item">
          <div className="education-header">
            <h3>Secondary School Leaving Certificate (SSLC)</h3>
            <span className="education-date">July 2020</span>
          </div>
          <p className="education-institution">Sandeepani Rural Education Institution, Puttur</p>
          <div className="education-details">
            <p><strong>Percentage:</strong> 70%</p>
            <p><strong>Key Achievements:</strong> Active participation in science exhibitions and technical competitions</p>
          </div>
        </div>
      </div>
    </section>
  );
}
