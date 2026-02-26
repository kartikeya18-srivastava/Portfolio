import './Skills.css';

const skills = {
  languages: [
    'C',
    'C++',
    'Python',
    'Java (Basic)',
    'JavaScript'
  ],
  databases: [
    'MySQL',
    'MongoDB',
    'PostgreSQL'
  ],
  frameworks: [
    'React.js',
    'Node.js',
    'Express.js',
    'FastAPI',
    'Bootstrap',
    'Tailwind CSS'
  ],
  technologies: [
    'MERN Stack',
    'Full-Stack Web Development',
    'REST API Development',
    'Responsive Design'
  ],
  tools: [
    'Git',
    'GitHub',
    'Postman',
    'MongoDB Compass',
    'PGAdmin',
    'VS Code',
    'Netlify'
  ]
};

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__heading">
        <span className='skills__typing'>My Skills</span>
      </h2>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="skills__category">
          <h3 className="category__title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <div className="skills__grid">
            {items.map((skill, index) => (
              <div className="skill__card" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}

      
    </section>
  );
};

export default Skills;
