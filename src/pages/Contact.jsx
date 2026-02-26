import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__heading">Let's Connect</h2>
      <p className="contact__text">
        I’m always excited to collaborate, contribute, or just chat about tech. Feel free to reach out!
      </p>

      <div className="contact__links">
        {/* Email */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            Swal.fire({
              title: 'Email Me',
              text: 'kartikeyasrivastava3182@gmail.com',
              icon:'success',
              confirmButtonText: 'Copy Email',
              background: '#1e1e2f',
              color: '#ffffff',
              confirmButtonColor: '#00ffff',
            });
          }}
          className="contact__link"
        >
          <FaEnvelope className="contact__icon" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/kartikeyasrivastava1811/"
          target="_blank"
          rel="noreferrer"
          className="contact__link"
        >
          <FaLinkedin className="contact__icon" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/kartikeya18-srivastava"
          target="_blank"
          rel="noreferrer"
          className="contact__link"
        >
          <FaGithub className="contact__icon" />
        </a>

        {/* Optional: Phone Number (non-clickable or tel: link) */}
        <a href="tel:+91-6388256003" className="contact__link">
          <FaPhoneAlt className="contact__icon" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
