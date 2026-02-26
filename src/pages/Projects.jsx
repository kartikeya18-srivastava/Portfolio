import { useState, useEffect } from 'react';

const fallbackProjects = [
  

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
        const githubRepos = data.filter(repo => !fallbackProjects.some(fb => fb.name.toLowerCase() === repo.name.toLowerCase()));
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
    <div id="projects" className="relative p-6 md:p-24 py-20 md:py-32 text-white font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-24 relative">
          <h2 className="font-outfit text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">
            Creations<span className="text-brand-purple">.</span>
          </h2>
          <div className="h-1 w-20 bg-brand-purple mx-auto rounded-full"></div>
          <p className="mt-6 text-white-muted font-inter tracking-widest uppercase text-sm">Archive of architectural excellence</p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center gap-4 mt-12">
            <div className="w-12 h-12 border-4 border-brand-purple/20 border-t-brand-purple rounded-full animate-spin"></div>
            <p className="text-brand-light font-medium tracking-widest uppercase text-xs animate-pulse">Syncing with GitHub</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 w-full">
            {repos.map((repo, index) => (
              <div
                className="glass-card group relative p-10 rounded-[2.5rem] flex flex-col h-full animate-reveal opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
                key={repo.id}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 flex items-center justify-center text-brand-light group-hover:bg-brand-purple group-hover:text-white transition-all duration-500 mb-6">
                    <span className="font-outfit text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-outfit text-2xl md:text-3xl font-bold mb-4 tracking-tight group-hover:text-brand-light transition-colors duration-300">
                    {repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}
                  </h3>
                  <p className="font-inter text-white-muted leading-relaxed group-hover:text-white/90 transition-colors">
                    {repo.description || "Architecting the future with precision, scalability, and premium performance."}
                  </p>
                </div>

                <div className="mt-auto space-y-8">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-purple"></span>
                    <span className="text-xs font-bold tracking-widest uppercase text-white/40 group-hover:text-brand-light transition-colors">
                      {repo.language || "Complex Web Architecture"}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-grow text-center px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-sm tracking-wide transition-all"
                    >
                      Source Code
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 bg-brand-purple hover:bg-brand-light rounded-xl font-bold text-sm tracking-wide shadow-[0_10px_20px_rgba(123,44,191,0.2)] transition-all"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
