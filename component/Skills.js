import React from 'react';

function Skills() {
  const skillsList = [
    'HTML',
    'CSS',
    'JavaScript',
    'Node.js',
    'React',
    'mysql',
    'MongoDB',
    
  ];

  return (
    <section id="skills" className="skills">
      <h2><u>Skills</u></h2>
      <ul className="skills-list">
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
