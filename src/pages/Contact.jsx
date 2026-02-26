import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-6 py-24 md:py-32 overflow-hidden" id="contact">
      <div className="max-w-4xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-outfit text-5xl md:text-8xl font-black tracking-tighter mb-8 relative inline-block uppercase">
            Start Connection<span className="text-brand-light">.</span>
            <div className="absolute -bottom-4 left-0 w-full h-[8px] bg-brand-purple/20 blur-md shadow-[0_0_10px_rgba(0,180,216,0.5)]"></div>
          </h2>
          <p className="font-inter text-lg md:text-2xl text-white/40 max-w-2xl mx-auto leading-relaxed italic">
            Available for ambitious collaborations, full-stack architecture, or high-performance engineering inquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              icon: <FaEnvelope />, label: "Email", action: () => {
                Swal.fire({
                  title: 'kartikeyasrivastava3182@gmail.com',
                  text: 'Transmission channel open.',
                  icon: 'success',
                  confirmButtonText: 'Copy Address',
                  background: '#0a1128',
                  color: '#ffffff',
                  confirmButtonColor: '#00b4d8',
                  customClass: {
                    popup: 'rounded-[2.5rem] border border-white/10 glass-card'
                  }
                });
              }
            },
            { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/kartikeyasrivastava1811/" },
            { icon: <FaGithub />, label: "GitHub", href: "https://github.com/kartikeya18-srivastava" },
            { icon: <FaPhoneAlt />, label: "Encrypted", href: "tel:+91-6388256003" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-6 p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-brand-purple/50 transition-all duration-500 hover:-translate-y-3 group overflow-hidden"
                >
                  <span className="text-4xl text-white/30 group-hover:text-brand-light transition-colors transform group-hover:scale-125 duration-500 relative z-10">
                    {item.icon}
                  </span>
                  <span className="font-outfit text-[10px] font-black tracking-[0.4em] uppercase text-white/10 group-hover:text-brand-light/40 transition-colors relative z-10">
                    {item.label}
                  </span>
                  <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
              ) : (
                <button
                  onClick={item.action}
                  className="w-full flex flex-col items-center gap-6 p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-brand-purple/50 transition-all duration-500 hover:-translate-y-3 group overflow-hidden"
                >
                  <span className="text-4xl text-white/30 group-hover:text-brand-light transition-colors transform group-hover:scale-125 duration-500 relative z-10">
                    {item.icon}
                  </span>
                  <span className="font-outfit text-[10px] font-black tracking-[0.4em] uppercase text-white/10 group-hover:text-brand-light/40 transition-colors relative z-10">
                    {item.label}
                  </span>
                  <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-24"
        >
          <p className="font-inter text-[10px] font-black tracking-[0.5em] uppercase text-white/40">
            Engineered in India • Available Globally
          </p>
        </motion.div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute -bottom-64 -right-64 w-[600px] h-[600px] bg-brand-purple/5 blur-[150px] rounded-full -z-10 animate-pulse shadow-[0_0_50px_rgba(0,180,216,0.1)]"></div>
      <div className="absolute -top-64 -left-64 w-[600px] h-[600px] bg-brand-light/5 blur-[150px] rounded-full -z-10"></div>
    </section>
  );
};

export default Contact;
