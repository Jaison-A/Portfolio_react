function Skills() {
  const skillData = {
    'Programming Languages': [
      { name: 'C', level: 75 },
      { name: 'Java', level: 65 },
      { name: 'Python', level: 60 },
    ],
    Frontend: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 75 },
    ],
    Backend: [
      { name: 'Node.js', level: 70 },
      { name: 'Express', level: 65 },
      { name: 'MongoDB', level: 70 },
    ],
    Tools: [
      { name: 'Git', level: 55 },
      { name: 'GitHub', level: 50 },
    ],
  };

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">My Skills 🚀</h2>

      <div className="skills-container">
        {Object.keys(skillData).map((category, index) => (
          <div key={index} className="category">
            <h3>{category}</h3>

            {skillData[category].map((skill, i) => (
              <div key={i} className="skill">
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
