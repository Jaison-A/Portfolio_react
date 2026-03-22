import React, { useEffect, useState } from 'react';

function Certifications() {
  const [certifications, setCertifications] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/certification')
      .then((res) => res.json())
      .then((data) => setCertifications(data))
      .catch((err) => console.log(err));
  });

  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>

      <div className="cert-container">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <img src={cert.image} alt={cert.title} />

            <h3>{cert.title}</h3>
            <p>
              <strong>{cert.issuer}</strong> | {cert.date}
            </p>
            <p className="desPara">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
