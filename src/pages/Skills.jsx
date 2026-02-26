import { FaCode, FaDatabase, FaLayerGroup, FaTools, FaLaptopCode } from "react-icons/fa";

const skills = {
  languages: [
    'Python',
    'JavaScript (ES6+)',
    'SQL',
    'C',
    'C++'
  ],
  databases: [
    'MongoDB',
    'MySQL',
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
    'REST API Architecture',
    'AI Integration (OpenAI)',
    'JWT Authentication',
    'OTP Verification (Twilio/Nodemailer)',
    'Responsive Design'
  ],
  tools: [
    'Git',
    'GitHub',
    'Postman',
    'VS Code',
    'MongoDB Compass',
    'Vercel',
    'Netlify'
  ]
};

const categoryIcons = {
  languages: <FaCode />,
  databases: <FaDatabase />,
  frameworks: <FaLayerGroup />,
  technologies: <FaLaptopCode />,
  tools: <FaTools />
};

const Skills = () => {
  return (
    <section className="relative p-6 md:p-24 py-20 md:py-32 text-white font-poppins overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 relative">
          <h2 className="font-outfit text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">
            Expertise<span className="text-brand-purple">.</span>
          </h2>
          <div className="h-1 w-20 bg-brand-purple mx-auto rounded-full"></div>
          <p className="mt-6 text-white/50 font-inter tracking-widest uppercase text-sm">Refined digital craftsmanship</p>
        </div>

        <div className="space-y-20">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <div
              key={category}
              className="animate-reveal opacity-0"
              style={{ animationDelay: `${catIndex * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-10 group">
                <span className="text-3xl text-brand-purple group-hover:scale-110 transition-transform duration-300">
                  {categoryIcons[category.toLowerCase()] || <FaCode />}
                </span>
                <h3 className="font-outfit text-3xl font-bold capitalize tracking-tight">
                  {category}
                </h3>
                <div className="h-[1px] flex-grow bg-white/10"></div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {items.map((skill, index) => (
                  <div
                    className="glass-card group relative p-6 rounded-2xl flex flex-col items-center justify-center text-center overflow-hidden h-full min-h-[100px]"
                    key={index}
                  >
                    <span className="relative z-10 font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
                      {skill}
                    </span>
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 flex justify-center">
          <a
            href="https://drive.google.com/file/d/1OlNc8z5EGofEODoHViBX3MQK-oO7VUwS/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white/5 rounded-2xl font-outfit font-bold tracking-wider uppercase border border-white/10 hover:border-brand-purple/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            <span className="relative z-10">Download Full Resume</span>
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-purple/20 to-brand-light/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <FaLayerGroup className="text-brand-purple group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
