import React from 'react';

function Skills() {
  const skills = [
    'C',
    'Java',
    'Python',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'MongoDB',
    'Git',
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>

      <div className="skill-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
