import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id) => {
    setMenuOpen(false);

    const scrollToSection = () => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.pathname === '/') {
      scrollToSection();
    } else {
      navigate('/');
      setTimeout(() => {
        scrollToSection();
      }, 200);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-[999] px-6 md:px-16 py-3 transition-all duration-500 glass border-b border-white/5 bg-black/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        <Link
          to="/"
          onClick={(e) => { e.preventDefault(); handleScroll('home'); }}
          className="group flex items-center gap-3"
        >
          <div className="relative">
            <img src="/assets/logo.png" alt="Logo" className="h-[45px] md:h-[55px] w-auto relative z-10 transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-brand-purple blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
          </div>
          <span className="font-outfit text-xl md:text-2xl font-bold tracking-tight">
            Kartikeya<span className="text-brand-light">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {['home', 'skills', 'projects', 'about', 'contact'].map((id) => (
            <Link
              key={id}
              to="/"
              onClick={(e) => { e.preventDefault(); handleScroll(id); }}
              className="font-outfit text-sm font-medium tracking-widest uppercase relative py-2 transition-colors duration-300 hover:text-brand-light group overflow-hidden"
            >
              {id}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right group-hover:origin-left"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span className={`h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-[9px]' : 'w-6'}`}></span>
            <span className={`h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-[9px]' : 'w-5'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-brand-dark/95 backdrop-blur-2xl md:hidden transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {['home', 'skills', 'projects', 'about', 'contact'].map((id) => (
            <Link
              key={id}
              to="/"
              onClick={(e) => { e.preventDefault(); handleScroll(id); }}
              className="font-outfit text-2xl font-bold tracking-widest uppercase hover:text-brand-light transition-colors"
            >
              {id}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
