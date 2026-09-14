import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import localData from '../../data/data.json';

function CertificationDetail() {
  const { id } = useParams();
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const certification = localData.certification.find((item) => item.id === Number(id)) || null;

  if (!certification) return <p>Certification not found.</p>;

  return (
    <div className="certification-detail-page">
      <div className="certification-detail-card">
        <img
          src={certification.image}
          alt={certification.title}
          className={`certification-detail-image${isImageExpanded ? ' certification-detail-image-expanded' : ''}`}
          onClick={() => setIsImageExpanded((prev) => !prev)}
        />

        <div className="certification-detail-content">
          <h2>{certification.title}</h2>

          <p className="certification-detail-meta">
            <b>Issuer:</b> {certification.issuer}
          </p>

          <p className="certification-detail-meta">
            <b>Date:</b> {certification.date}
          </p>

          <p className="certification-detail-description">{certification.description}</p>

          <div className="certification-detail-actions">
            <Link to="/certifications" className="certification-detail-back">
              Back to Certifications
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificationDetail;
