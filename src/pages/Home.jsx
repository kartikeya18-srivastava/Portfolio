import './Home.css';
import myImage from '../assets/1.jpg';
import { Link } from 'react-router-dom';
import { MdOutlineFindInPage } from "react-icons/md";
const Home = () => {
  return (
    <section id='home' className="home">
      <div className="home__content">
        <button className="tagline">Welcome to my Portfolio</button>
        <span className="highlight">
          <h3 className='typing-text'>Hi! I'm
            <h2>Kartikeya Srivastava</h2>
          </h3>
        </span>
        <p>Front-End Developer  | Python  | Tech Enthusiast</p>
        <br />
        <p>
          A Computer Science undergraduate passionate about software development and building efficient, scalable applications.
        </p>
        <Link
          to="/"
          className="connect-btn"
          onClick={() => {
            const section = document.getElementById('contact');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Let’s Connect →
        </Link>
        <Link
          to="https://drive.google.com/file/d/1OlNc8z5EGofEODoHViBX3MQK-oO7VUwS/view?usp=sharing" // REPLACE THIS with your Overleaf read-only link
          target="_blank"
          className="connect-btn resume-btn"
          style={{ marginLeft: "1rem" }}
        >
          <MdOutlineFindInPage />
          View Latest Resume
        </Link>
      </div>
      <div className="home__image">
        <img src={myImage} alt="Kartikeya Srivastava" />
      </div>
    </section>
  );
};

export default Home;
