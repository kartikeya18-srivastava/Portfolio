import myImage from '../assets/1.jpg';

const About = () => {
  return (
    <section id='about' className="relative min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full">
        {/* About Image */}
        <div className="relative mb-16 md:mb-0 animate-reveal opacity-0 w-full md:w-auto flex justify-center">
          <div className="relative z-10 text-center">
            <img
              src={myImage}
              alt="Kartikeya Srivastava"
              className="w-[260px] h-[260px] md:w-[400px] md:h-[400px] object-cover rounded-3xl border border-white/10 shadow-2xl animate-float"
            />
            {/* Decorative frame */}
            <div className="absolute -inset-4 border-2 border-brand-purple/20 rounded-[2.5rem] -z-10 animate-pulse"></div>
          </div>

          {/* Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-purple/15 blur-[100px] rounded-full -z-20"></div>
        </div>

        {/* About Content */}
        <div className="w-full md:max-w-[55%] animate-reveal opacity-0" style={{ animationDelay: '200ms' }}>
          <div className="mb-10 text-center md:text-left">
            <h2 className="font-outfit text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">
              The Mission<span className="text-brand-purple">.</span>
            </h2>
            <div className="h-1 w-20 bg-brand-purple rounded-full hidden md:block"></div>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-8 rounded-3xl border border-white/5 hover:bg-white/5 transition-all group">
              <p className="font-inter text-lg md:text-xl text-white/80 leading-relaxed">
                I'm <strong className="text-brand-light font-bold">Kartikeya Srivastava</strong>, a Computer Science visionary from RKGIT, Ghaziabad. My work sits at the intersection of <span className="text-white">mathematical precision</span> and <span className="text-white">creative digital architecting</span>.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-white/5 hover:bg-white/5 transition-all">
              <p className="font-inter text-lg md:text-xl text-white/70 leading-relaxed">
                I specialize in engineering systems that aren't just functional, but <span className="text-white">impactful</span>. From React-driven interfaces to Python-powered backends, I build with a focus on future-scale and human interaction.
              </p>
            </div>

            <div className="flex items-center gap-6 mt-12 pl-4">
              <div className="flex flex-col">
                <span className="font-outfit text-3xl font-black text-brand-light">2+</span>
                <span className="font-inter text-xs font-bold tracking-widest uppercase text-white/40">Projects Built</span>
              </div>
              <div className="h-10 w-[1px] bg-white/10"></div>
              <div className="flex flex-col">
                <span className="font-outfit text-3xl font-black text-brand-light">10+</span>
                <span className="font-inter text-xs font-bold tracking-widest uppercase text-white/40">Tech Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
