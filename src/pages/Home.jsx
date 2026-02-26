import myImage from '../assets/1.jpg';
import { Link } from 'react-router-dom';
import { MdOutlineFindInPage } from "react-icons/md";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Home = () => {
  const [text] = useTypewriter({
    words: ['Python Enthusiast', 'Full-Stack Developer', 'UI/UX Architect', 'MERN Specialist'],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <section id='home' className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 md:py-32 overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10 w-full md:max-w-[60%] flex flex-col items-start text-left animate-reveal opacity-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-light text-xs md:text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(138,43,226,0.3)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-light"></span>
          </span>
          Digital Architect
        </div>

        <div className="space-y-2 mb-8 w-full">
          <h1 className="font-outfit text-5xl md:text-8xl font-extrabold leading-[1.1] tracking-tighter text-white">
            Hi! I'm <br />
            <span className="bg-gradient-to-r from-brand-light via-white to-brand-light bg-[length:200%_auto] animate-text-shimmer bg-clip-text text-transparent">
              Kartikeya Srivastava
            </span>
          </h1>
          <div className="h-[3px] w-32 bg-gradient-to-r from-brand-purple to-transparent rounded-full mt-6"></div>
        </div>

        <div className="mb-6 min-h-[40px] flex items-center gap-2 font-inter text-xl md:text-3xl text-white font-bold tracking-tight">
          <span className="text-brand-light">I am a</span>
          <span className="text-white">
            {text}
          </span>
          <Cursor cursorColor='#8a2be2' />
        </div>

        <p className="font-inter text-lg md:text-xl text-white/50 leading-relaxed max-w-[580px] mb-12">
          Engineering <span className="text-white font-medium">highly-performant</span> digital systems with a focus on deep architecture and <span className="text-white font-medium">premium user interaction</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <Link
            to="/"
            className="group relative px-8 py-4 bg-brand-purple text-white rounded-xl font-bold tracking-wide transition-all duration-300 hover:bg-brand-light hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(123,44,191,0.4)] overflow-hidden"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Let’s Connect <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:animate-shimmer"></div>
          </Link>

          <Link
            to="https://drive.google.com/file/d/1OlNc8z5EGofEODoHViBX3MQK-oO7VUwS/view?usp=sharing"
            target="_blank"
            className="group px-8 py-4 bg-white/5 border border-white/10 hover:border-brand-purple/50 text-white rounded-xl font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 flex items-center gap-2"
          >
            <MdOutlineFindInPage className="text-xl group-hover:text-brand-light transition-colors" />
            My Resume
          </Link>
        </div>
      </div>

      <div className="mt-16 md:mt-0 relative animate-reveal opacity-0 w-full md:w-auto flex justify-center" style={{ animationDelay: '200ms' }}>
        <div className="relative z-10">
          <img
            src={myImage}
            alt="Kartikeya"
            className="w-[260px] h-[260px] md:w-[420px] md:h-[420px] object-cover rounded-3xl border border-white/10 shadow-2xl animate-float"
          />
          {/* Decorative frame */}
          <div className="absolute -inset-4 border-2 border-brand-purple/20 rounded-[2.5rem] -z-10 animate-pulse"></div>
        </div>

        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-purple/20 blur-[100px] rounded-full -z-20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-light/30 blur-[60px] rounded-full -z-20"></div>
      </div>
    </section>
  );
};

export default Home;
