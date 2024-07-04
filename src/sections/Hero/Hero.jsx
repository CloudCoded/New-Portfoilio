import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import myAge from "../../assets/IMG_1487.jpg"
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import mediumLight from "../../assets/medium-light.svg";
import mediumDark from "../../assets/medium-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Abdulazeez Frontend.pdf";
import { useTheme } from "../../common/ThemeContext";
function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const mediumIcon = theme === "light" ? mediumLight : mediumDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const LinkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={myAge} alt="Profile picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.info}>
        <h1>Hello, I'm Abdulazeez</h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://medium.com/@the.devdude" target="_blank">
            <img src={mediumIcon} alt="Medium icon" />
          </a>

          <a href="https://github.com/CloudCoded" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/abdulazeez-akindolapo-3898b3257/"
            target="_blank"
          >
            <img src={LinkedinIcon} alt="Linkedin icon" />
          </a>
        </span>

        <p className={styles.description}>
          Building innovative, high-quality software solutions with precision
        </p>
        <a href={CV} download>
          <button className="hover">
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
