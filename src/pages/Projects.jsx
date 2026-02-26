import { useState, useEffect } from 'react';
import './Projects.css';

const fallbackProjects = [
  {
    id: 1,
    name: "Real Estate Application",
    description: "Built a MERN real estate management system with property listing, buying, and admin dashboard.",
    language: "MERN Stack",
    html_url: "https://github.com/kartikeya18-srivastava/Full-Stack-MERN-RealEstate-Application",
    homepage: "https://quirexhousing.netlify.app/",
  },
  {
    id: 2,
    name: "Netflix Clone",
    description: "A fully responsive front-end clone of Netflix using React.js with carousels, dark mode, and hover effects.",
    language: "React.js",
    html_url: "https://github.com/kartikeya18-srivastava/Netflix-Clone",
  }
];

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Fetch up to 100 repos to show everything
        const response = await fetch('https://api.github.com/users/kartikeya18-srivastava/repos?sort=pushed&direction=desc&per_page=100');
        if (!response.ok) {
          throw new Error('Using local data');
        }
        const data = await response.json();

        // No filters: show forks and repos without descriptions to show "everything"
        const githubRepos = data
          // Filter out repos that are already in fallbackProjects (by name match)
          .filter(repo => !fallbackProjects.some(fb => fb.name.toLowerCase() === repo.name.toLowerCase()));

        // Big/Featured projects first, then all others
        setRepos([...fallbackProjects, ...githubRepos]);
      } catch (err) {
        console.warn("GitHub API failed, using fallback projects:", err);
        setRepos(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div id="projects" className="projects">
      <h1 className='projects__typing'>My Projects</h1>

      {loading ? (
        <p className="loading-text">Loading projects from GitHub...</p>
      ) : (
        <div className="projects__grid">
          {repos.map((repo) => (
            <div className="project__card" key={repo.id}>
              <h2>{repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}</h2>
              <p>{repo.description || "Project exploring modern web technologies."}</p>
              <p><strong>Tech Stack:</strong> {repo.language || "Web Tech"}</p>
              <div className="project__links">
                <a href={repo.html_url} target="_blank" rel="noreferrer">GitHub</a>
                {repo.homepage && (
                  <a href={repo.homepage} target="_blank" rel="noreferrer" style={{ marginLeft: '10px' }}>Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
