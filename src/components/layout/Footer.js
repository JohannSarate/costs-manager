import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="8" fill="#3b6ef8"/>
            <path d="M8 14.5L12.5 19L20 10" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Flo</span>
        </div>
        <p className={styles.tagline}>Simple project budget management.</p>
        <ul className={styles.social_list}>
          <li><FaGithub /></li>
          <li><FaLinkedin /></li>
          <li><FaTwitter /></li>
        </ul>
        <p className={styles.copyright}>© {new Date().getFullYear()} Flo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
