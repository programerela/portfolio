import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.name}>Ela Curic</p>
        <p className={styles.email}>
          <a href="mailto:curicela@gmail.com">curicela@gmail.com</a>
        </p>
        <div className={styles.socials}>
          <a href="https://github.com/programerela" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="../../assets/cv_eng.pdf" download target="_blank" rel="noreferrer">
            <FaFileDownload /> CV (EN)
          </a>
          <a href="../../assets/cv_rs.pdf" download target="_blank" rel="noreferrer">
            <FaFileDownload /> CV (RS)
          </a>
          <a href="https://linkedin.com/in/ela-curić-b39674241" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
        <p className={styles.signature}>
          Designed & coded by ell © 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;