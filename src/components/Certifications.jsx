import React from 'react';

function Certifications() {
  const certifications = [
    {
      title: 'Frontend Development Training',
      issuer: 'Elocias Software Pvt Ltd',
      date: '2025',
      description:
        'Completed industrial training in HTML, CSS, and JavaScript with hands-on project experience.',
      image: 'https://picsum.photos/1920/1080?random',
    },
    {
      title: 'Cybersecurity Basics',
      issuer: 'Online Course',
      date: '2024',
      description:
        'Learned fundamentals of cybersecurity including threats, prevention, and best practices.',
      image: 'https://picsum.photos/1920/1080?random',
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>

      <div className="cert-container">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            {/* Image */}
            <img src={cert.image} alt={cert.title} />

            {/* Content */}
            <h3>{cert.title}</h3>
            <p>
              <strong>{cert.issuer}</strong> | {cert.date}
            </p>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
