import { Link, NavLink } from "react-router-dom";
import styles from './navbar.module.css';

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="8" fill="#3b6ef8"/>
            <path d="M8 14.5L12.5 19L20 10" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Flo</span>
        </Link>
        <ul className={styles.list}>
          <li><NavLink to="/" className={({isActive}) => isActive ? styles.active : ''}>Home</NavLink></li>
          <li><NavLink to="/projects" className={({isActive}) => isActive ? styles.active : ''}>Projects</NavLink></li>
          <li><NavLink to="/company" className={({isActive}) => isActive ? styles.active : ''}>Company</NavLink></li>
          <li><NavLink to="/contact" className={({isActive}) => isActive ? styles.active : ''}>Contact</NavLink></li>
        </ul>
        <Link to="/newproject" className={styles.cta_btn}>+ New Project</Link>
      </div>
    </nav>
  );
}

export default NavBar;
