import './About.css';
import myImage from '../assets/1.jpg';

const About = () => {
  return (
    <section id='about' className="about">
      <div className="about__image">
        <img src={myImage} alt="Kartikeya Srivastava" />
      </div>
      <div className="about__content">
        <h1 className='about__typing'>About Me</h1>
        <ul>
        <li>
          I'm <strong>Kartikeya Srivastava</strong>, a Computer Science undergraduate from Raj Kumar Goel Institute of Technology, Ghaziabad.
        </li>
        <li>
          I specialize in software development and love solving real-world problems using clean, scalable code. I’ve built everything from full-fledged React apps to Python-based automation and AI projects.
        </li>
        <li>
          My goal is to keep learning, building, and contributing to impactful software solutions.
        </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
