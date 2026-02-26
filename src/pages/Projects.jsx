import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const fallbackProjects = [
  {
    id: 'fb-1',
    name: 'Digital Blood Bank',
    description: 'A comprehensive full-stack platform for managing blood donations, inventory, and real-time requests with premium UI.',
    language: 'MERN Stack',
    html_url: 'https://github.com/kartikeya18-srivastava',
    homepage: 'https://digital-blood-bank.netlify.app/'
  },
  {
    id: 'fb-2',
    name: 'Real Estate Application',
    description: 'Built a MERN real estate management system with property listing, buying, and admin dashboard.',
    language: 'MERN Stack',
    html_url: 'https://github.com/kartikeya18-srivastava',
    homepage: 'https://quirexhousing.netlify.app/'
  },
  {
    id: 'fb-3',
    name: 'Warehouse Dispatch Management System',
    description: 'Developed a full-stack MERN-based warehouse and dispatch management system with inventory tracking, order processing, role-based authentication (JWT), Redis caching, email notifications (Nodemailer), and secure admin dashboard for real-time logistics monitoring.',
    language: 'MERN Stack',
    html_url: 'https://github.com/kartikeya18-srivastava',
    homepage: 'https://warehousing-dispatch.netlify.app/'
  },
];

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/kartikeya18-srivastava/repos?sort=pushed&direction=desc&per_page=100');
        if (!response.ok) {
          throw new Error('Using local data');
        }
        const data = await response.json();

        // Helper to normalize strings for robust comparison
        const normalize = (str) => str?.toLowerCase().replace(/[-_\s]/g, '') || '';

        const localNames = fallbackProjects.map(p => normalize(p.name));

        // Filter GitHub repos that aren't already in our fallback list
        const githubRepos = data.filter(repo => !localNames.includes(normalize(repo.name)));

        setRepos([...fallbackProjects, ...githubRepos]);
      } catch (err) {
        setRepos(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <section id="projects" className="relative p-6 md:p-24 py-24 md:py-32 text-white font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-24 relative"
        >
          <h2 className="font-outfit text-5xl md:text-7xl font-extrabold tracking-tight mb-4 uppercase">
            Creations<span className="text-brand-light">.</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1.5 bg-brand-purple mx-auto rounded-full shadow-[0_0_10px_rgba(0,180,216,0.5)]"
          ></motion.div>
          <p className="mt-8 text-white/40 font-bold tracking-[0.4em] uppercase text-xs">Architectural Excellence Matrix</p>
        </motion.div>

        {loading ? (
          <div className="flex flex-col items-center gap-6 mt-12">
            <div className="w-16 h-16 border-4 border-brand-purple/20 border-t-brand-purple rounded-full animate-spin shadow-[0_0_15px_rgba(0,180,216,0.3)]"></div>
            <p className="text-brand-light font-bold tracking-[0.2em] uppercase text-xs animate-pulse">Syncing Repository Engine</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {repos.map((repo, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (index % 3) * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 0 30px rgba(0,180,216,0.15)' }}
                className="glass-card group relative p-8 md:p-10 rounded-[2.5rem] flex flex-col h-full transition-all duration-500 border border-white/5 hover:border-brand-purple/50"
                key={repo.id || index}
              >
                <div className="mb-8">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 flex items-center justify-center text-brand-light group-hover:bg-brand-purple group-hover:text-white transition-all duration-500">
                      <span className="font-outfit text-xl font-bold italic">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex gap-4">
                      <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-white/40 hover:text-brand-light transition-colors">
                        <FaGithub size={22} />
                      </a>
                      {repo.homepage && (
                        <a href={repo.homepage} target="_blank" rel="noreferrer" className="text-white/40 hover:text-brand-light transition-colors">
                          <FaExternalLinkAlt size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="font-outfit text-2xl md:text-3xl font-bold mb-4 tracking-tight group-hover:text-brand-light transition-colors duration-300">
                    {repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}
                  </h3>
                  <p className="font-inter text-white-muted leading-relaxed group-hover:text-white/90 transition-colors line-clamp-3">
                    {repo.description || "Developing future-ready digital solutions with robust architectural foundations and premium aesthetics."}
                  </p>
                </div>

                <div className="mt-auto pt-8 border-t border-white/5 space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-purple shadow-[0_0_10px_rgba(123,44,191,0.5)]"></div>
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/30 group-hover:text-brand-light transition-colors">
                      {repo.language || "Complex Engineering"}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-center py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold text-[10px] tracking-[0.2em] uppercase transition-all"
                    >
                      Github
                    </a>
                    {repo.homepage ? (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="text-center py-4 bg-brand-purple hover:bg-brand-light rounded-2xl font-bold text-[10px] tracking-[0.2em] uppercase shadow-[0_10px_20px_rgba(123,44,191,0.2)] transition-all"
                      >
                        Deploy
                      </a>
                    ) : (
                      <div className="py-4 bg-white/5 rounded-2xl font-bold text-[10px] tracking-[0.2em] uppercase text-white/20 text-center opacity-50 cursor-not-allowed">
                        N/A
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
