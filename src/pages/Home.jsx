import myImage from '../assets/1.jpg';
import { Link } from 'react-router-dom';
import { MdOutlineFindInPage } from "react-icons/md";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Home = () => {
  const [text] = useTypewriter({
    words: ['Full-Stack Developer','React.js & Node.js Developer', 'UI/UX Architect', 'MERN Stack Developer'],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <section id='home' className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-24 md:py-32 overflow-hidden">
      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full md:max-w-[60%] flex flex-col items-start text-left"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-light text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-8 shadow-[0_0_15px_rgba(0,180,216,0.2)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-light"></span>
          </span>
          Digital Architect
        </motion.div>

        <div className="space-y-4 mb-8 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-outfit text-5xl md:text-8xl font-black leading-[1.05] tracking-tight text-white"
          >
            Hi! I'm <br />
            <span className="bg-gradient-to-r from-brand-purple via-brand-light to-brand-accent bg-[length:200%_auto] animate-text-shimmer bg-clip-text text-transparent">
              Kartikeya Srivastava
            </span>
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-[4px] bg-gradient-to-r from-brand-purple to-transparent rounded-full"
          ></motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mb-8 min-h-[40px] flex items-center gap-3 font-inter text-xl md:text-3xl text-white font-bold tracking-tight"
        >
          <span className="text-white/70 font-medium italic">Building</span>
          <span className="text-white">
            {text}
          </span>
          <Cursor cursorColor='#00b4d8' />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="font-inter text-lg md:text-xl text-white-muted leading-relaxed max-w-[600px] mb-12"
        >
          Engineering <span className="text-white font-semibold">high-performance</span> digital landscapes with architectural precision and <span className="text-white font-semibold">premium user interaction</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
        >
          <Link
            to="/"
            className="group relative px-10 py-5 bg-brand-purple text-white rounded-2xl font-bold tracking-wider transition-all duration-500 hover:shadow-[0_20px_40px_rgba(123,44,191,0.4)] overflow-hidden w-full sm:w-auto text-center"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-3 uppercase text-xs tracking-[0.2em]">
              Start Collaboration <span className="transition-transform group-hover:translate-x-2">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
          </Link>

          <Link
            to="https://drive.google.com/file/d/1OlNc8z5EGofEODoHViBX3MQK-oO7VUwS/view?usp=sharing"
            target="_blank"
            className="group px-10 py-5 bg-white/5 border border-white/10 hover:border-brand-purple/50 text-white rounded-2xl font-bold tracking-wider transition-all duration-500 hover:bg-white/10 flex items-center justify-center gap-3 w-full sm:w-auto"
          >
            <MdOutlineFindInPage className="text-xl group-hover:text-brand-light transition-colors" />
            <span className="uppercase text-xs tracking-[0.2em]">View Dossier</span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-20 md:mt-0 relative w-full md:w-auto flex justify-center"
      >
        <div className="relative z-10 p-2 glass rounded-[3rem] border border-white/10 shadow-[0_0_50px_rgba(123,44,191,0.2)]">
          <img
            src={myImage}
            alt="Kartikeya"
            className="w-[280px] h-[280px] md:w-[450px] md:h-[450px] object-cover rounded-[2.5rem] shadow-2xl animate-float"
          />
        </div>

        {/* Dynamic Glow Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-purple/20 blur-[120px] rounded-full -z-20 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-light/20 blur-[80px] rounded-full -z-20"></div>
      </motion.div>

      {/* Scroll Indicator */}
    </section>
  );
};

export default Home;
