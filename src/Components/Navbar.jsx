import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id) => {
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
      setTimeout(scrollToSection, 200);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Creations', id: 'projects' },
    { name: 'Mission', id: 'about' },
    { name: 'Connect', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[999] transition-all duration-500 py-4 ${scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center text-white">
        <Link
          to="/"
          onClick={(e) => { e.preventDefault(); handleScrollTo('home'); }}
          className="group flex items-center gap-3"
        >
          <div className="relative">
            <div className="h-[40px] w-[40px] md:h-[50px] md:w-[50px] bg-brand-purple rounded-xl flex items-center justify-center font-outfit font-black text-2xl md:text-3xl group-hover:rotate-12 transition-transform duration-500 shadow-[0_0_20px_rgba(0,180,216,0.3)]">
              K
            </div>
            <div className="absolute inset-0 bg-brand-purple blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
          </div>
          <span className="font-outfit text-xl md:text-2xl font-bold tracking-tight">
            Kartikeya<span className="text-brand-light">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to="/"
              onClick={(e) => { e.preventDefault(); handleScrollTo(link.id); }}
              className="px-6 py-2 font-outfit text-xs font-bold tracking-[0.2em] uppercase relative transition-all duration-300 hover:text-brand-light group"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute bottom-0 left-0 w-full h-[0px] bg-brand-purple/20 group-hover:h-full transition-all duration-300 -z-0"></span>
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
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-dark/98 backdrop-blur-2xl md:hidden z-40"
          >
            <div className="flex flex-col items-center justify-center h-full gap-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  key={link.id}
                >
                  <Link
                    to="/"
                    onClick={(e) => { e.preventDefault(); handleScrollTo(link.id); }}
                    className="font-outfit text-3xl font-black tracking-widest uppercase hover:text-brand-light transition-colors block text-center"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
