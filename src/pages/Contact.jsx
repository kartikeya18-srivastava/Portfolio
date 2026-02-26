import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Swal from 'sweetalert2';

const Contact = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-6 py-20 md:py-32 overflow-hidden" id="contact">
      <div className="max-w-4xl w-full text-center relative z-10 animate-reveal opacity-0">
        <div className="mb-12">
          <h2 className="font-outfit text-5xl md:text-8xl font-black tracking-tighter mb-6 relative inline-block">
            Get in Touch<span className="text-brand-purple">.</span>
            <div className="absolute -bottom-2 left-0 w-full h-[6px] bg-brand-purple/20 blur-sm"></div>
          </h2>
          <p className="font-inter text-lg md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            I’m available for collaborations, freelance opportunities, or just a friendly conversation about the future of tech.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            {
              icon: <FaEnvelope />, label: "Email", action: () => {
                Swal.fire({
                  title: 'kartikeyasrivastava3182@gmail.com',
                  text: 'Drop me a line anytime!',
                  icon: 'success',
                  confirmButtonText: 'Copy Email',
                  background: '#0f0526',
                  color: '#ffffff',
                  confirmButtonColor: '#7b2cbf',
                  customClass: {
                    popup: 'rounded-[2rem] border border-white/10'
                  }
                });
              }
            },
            { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/kartikeyasrivastava1811/" },
            { icon: <FaGithub />, label: "GitHub", href: "https://github.com/kartikeya18-srivastava" },
            { icon: <FaPhoneAlt />, label: "Phone", href: "tel:+91-6388256003" }
          ].map((item, idx) => (
            <div key={idx} className="group relative">
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-4 p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-brand-purple/50 transition-all duration-500 hover:-translate-y-2 group"
                >
                  <span className="text-3xl md:text-4xl text-white/40 group-hover:text-brand-light transition-colors transform group-hover:scale-110 duration-500">
                    {item.icon}
                  </span>
                  <span className="font-outfit text-[10px] font-bold tracking-[0.2em] uppercase text-white/20 group-hover:text-brand-light/60 transition-colors">
                    {item.label}
                  </span>
                </a>
              ) : (
                <button
                  onClick={item.action}
                  className="w-full flex flex-col items-center gap-4 p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-brand-purple/50 transition-all duration-500 hover:-translate-y-2 group"
                >
                  <span className="text-3xl md:text-4xl text-white/40 group-hover:text-brand-light transition-colors transform group-hover:scale-110 duration-500">
                    {item.icon}
                  </span>
                  <span className="font-outfit text-[10px] font-bold tracking-[0.2em] uppercase text-white/20 group-hover:text-brand-light/60 transition-colors">
                    {item.label}
                  </span>
                </button>
              )}
              {/* Glow backdrop */}
              <div className="absolute inset-0 bg-brand-purple/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <p className="font-inter text-xs font-bold tracking-[0.3em] uppercase text-white/20">
            Based in Ghaziabad, India • Available Worldwide
          </p>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute -bottom-64 -right-64 w-[600px] h-[600px] bg-brand-purple/10 blur-[150px] rounded-full -z-10"></div>
    </section>
  );
};

export default Contact;
