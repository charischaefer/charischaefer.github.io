import '../App.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="About">
      <div className="about-container">
        <div className="about-grid-container">
          <div className="about-grid-item">
            <img className="profile-picture" src="%PUBLIC_URL%/chari.jpg" alt="Charlotte Schaefer" />
          </div>
          <div className="about-grid-item">
            <h2 className="highlighted">Hi. I'm Charlotte.</h2>
            <h2>I'm a full stack developer with a background in freelance copywriting and evaluation coordination, bringing a unique perspective to the programming world.
                Over the last two years, I've dedicated myself to continuous learning, finding accomplishment in crafting clean code.
                I'm passionate about creating experiences that are engaging, user-friendly, and accessible.
            </h2>
          </div>
        </div>
        <Link to="/contact">
          <button>Get in touch!</button>
        </Link>
      </div>
    </div>
  );
}

export default About;