import styles from "./SkillsStyles.module.css";
import  SkillList  from "../../common/SkillList";
import checkMarkDark from "../../assets/checkmark-dark.svg";
import checkMarkLight from "../../assets/checkmark-light.svg";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
    const { theme } = useTheme();
    const checkMarkIcon = theme === "light" ? checkMarkLight : checkMarkDark;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillsList}>
        <SkillList src={checkMarkIcon} skill="HTML5" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="React" />
      </div>
      <hr />
      <div className={styles.skillsList}>
        <SkillList src={checkMarkIcon} skill="React Native" />
        <SkillList src={checkMarkIcon} skill="PHP" />
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="React Query" />
      </div>
      <hr />

      <div className={styles.skillsList}>
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        <SkillList src={checkMarkIcon} skill="SCSS" />
        <SkillList src={checkMarkIcon} skill="Chakra UI" />
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Jest" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
