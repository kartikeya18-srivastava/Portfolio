import { FaCode, FaDatabase, FaLayerGroup, FaTools, FaLaptopCode } from "react-icons/fa";
import { motion } from 'framer-motion';

const skills = {
  languages: ['Python', 'JavaScript (ES6+)', 'SQL', 'C', 'C++'],
  databases: ['MongoDB', 'MySQL', 'PostgreSQL'],
  frameworks: ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'Bootstrap', 'Tailwind CSS'],
  technologies: ['MERN Stack', 'REST API Architecture', 'AI Integration (OpenAI)', 'JWT Authentication', 'OTP Verification (Twilio/Nodemailer)', 'Responsive Design'],
  tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'MongoDB Compass', 'Vercel', 'Netlify']
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
    <section className="relative p-6 md:p-24 py-24 md:py-32 text-white font-poppins overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-24 relative"
        >
          <h2 className="font-outfit text-5xl md:text-7xl font-extrabold tracking-tight mb-4 uppercase">
            Expertise<span className="text-brand-light">.</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1.5 bg-brand-purple mx-auto rounded-full shadow-[0_0_10px_rgba(0,180,216,0.5)]"
          ></motion.div>
          <p className="mt-8 text-white/70 font-bold tracking-[0.4em] uppercase text-xs">Technical Execution Matrix</p>
        </motion.div>

        <div className="space-y-24">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-6 mb-12 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 flex items-center justify-center text-3xl text-brand-light group-hover:scale-110 group-hover:bg-brand-purple group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(0,180,216,0.2)]">
                  {categoryIcons[category.toLowerCase()] || <FaCode />}
                </div>
                <h3 className="font-outfit text-3xl md:text-4xl font-bold capitalize tracking-tight">
                  {category}
                </h3>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent"></div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {items.map((skill, index) => (
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5, boxShadow: '0 0 20px rgba(0,245,212,0.1)' }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.05) }}
                    className="glass-card group relative p-6 rounded-2xl flex flex-col items-center justify-center text-center overflow-hidden h-full min-h-[100px] border border-white/5 hover:border-brand-light/40 transition-colors"
                    key={index}
                  >
                    <span className="relative z-10 font-black tracking-widest text-white/80 group-hover:text-white transition-colors uppercase text-[10px]">
                      {skill}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 flex justify-center"
        >
          <a
            href="https://drive.google.com/file/d/1OlNc8z5EGofEODoHViBX3MQK-oO7VUwS/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white/5 rounded-2xl font-outfit font-black tracking-[0.2em] uppercase border border-white/10 hover:border-brand-purple/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] h-full"
          >
            <span className="relative z-10 text-xs text-white group-hover:text-brand-light transition-colors">Download Execution Matrix</span>
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-purple/20 to-brand-light/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <FaLayerGroup size={18} className="text-brand-purple group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
