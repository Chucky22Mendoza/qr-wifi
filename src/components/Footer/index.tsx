import styles from './footer.module.css';
import Github from '@/assets/Github.svg';
import Linkedin from '@/assets/Linkedin.svg';
import Portfolio from '@/assets/Portfolio.svg';

/**
 * Renders the Footer component displaying links to Github, Linkedin, and a personal portfolio.
 * Each link is accompanied by an icon and opens in a new tab.
 *
 * @returns {React.ReactElement} The rendered footer element with social and portfolio links.
 */
function Footer(): React.ReactElement {
  return (
    <div className={styles.links}>
      <div>
        <img src={Github} alt="Github" />
        <span>
          Made with <span role="img" aria-label="heart">❤️</span> by
          <a href="https://github.com/Chucky22Mendoza" target="_blank"> Jesús Mendoza Verduzco</a>
        </span>
      </div>
      <div>
        <img src={Linkedin} alt="Linkedin" />
        <a href="https://www.linkedin.com/in/jes%C3%BAsmendoza22/" target="_blank">My Linkedin profile</a>
      </div>
      <div>
        <img src={Portfolio} alt="Portfolio" />
        <a href="https://jesus-mendoza.pages.dev" target="_blank">My Portfolio</a>
      </div>
    </div>
  );
}

export default Footer;
