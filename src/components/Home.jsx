import '../App.css';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoodreads } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div className="Home">
      <div className="main-container">
        <h2 className="highlighted">Full Stack Developer</h2>
        <h1>Charlotte Schaefer</h1>
        <h2>After having finished an immersive bootcamp covering full-stack technologies, I've delved deeper into the world of coding.
            My hunger for learning keeps me on my toes—I'm always seeking new ways to level up my skill set.
        </h2>
        <Link to="/projects">
          <button>Check out my portfolio!</button>
        </Link>
      </div>

      <div className="icon-container">
        <a href="https://www.linkedin.com/in/charlotte-anna-schaefer/" target="_blank"><LinkedInIcon className="icon linkedin"/></a>
        <a href="https://github.com/charischaefer" target="_blank"><GitHubIcon className="icon github" /></a>
        <a href="https://www.goodreads.com/author/show/6108806.Charlotte_Schaefer" target="_blank"><FontAwesomeIcon icon={faGoodreads} className="icon goodreads" /></a>
        <a href="https://www.instagram.com/misscharlotte/" target="_blank"><InstagramIcon className="icon instagram" /></a>
      </div>
    </div>
  );
}

export default Home;