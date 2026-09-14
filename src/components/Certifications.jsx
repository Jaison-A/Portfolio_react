import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import localData from '../../data/data.json';

function Certifications() {
  const [certifications, setCertifications] = useState(localData.certification);

  useEffect(() => {
    let isMounted = true;

    const loadCertifications = async () => {
      try {
        const response = await fetch('http://localhost:8000/certification');
        if (!response.ok) {
          throw new Error('Backend unavailable');
        }

        const data = await response.json();

        if (isMounted) {
          setCertifications(data);
        }
      } catch (error) {
        if (isMounted) {
          setCertifications(localData.certification);
        }
        console.log(error);
      }
    };

    loadCertifications();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>

      <div className="cert-container">
        {certifications.map((cert) => (
          <Link to={`/certifications/${cert.id}`} key={cert.id} className="cert-card-link">
            <div className="cert-card">
              <img src={cert.image} alt={cert.title} />

              <h3>{cert.title}</h3>
              <p>
                <strong>{cert.issuer}</strong> | {cert.date}
              </p>
              <p className="desPara">{cert.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
