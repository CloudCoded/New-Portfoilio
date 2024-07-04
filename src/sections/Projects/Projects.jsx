import React from "react";
import styles from "./ProjectsStyles.module.css";
import yodma from "../../assets/yodma.png";
import oneVendor from "../../assets/OneVendor.png";
import lite from "../../assets/lite.png";
import kash from "../../assets/kash.png";
import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={yodma} link="https://yodma.lifebank.ng/login" h3="Yodma Web App" p="Healthcare Management System" />

        <ProjectCard src={oneVendor} link="https://play.google.com/store/apps/details?id=com.lifebankdevs.onevendor&hl=en_US" h3="OneVendor App" p="Medical Supplies Application" />

        <ProjectCard src={lite} link="https://lite.lifebank.ng/login" h3="Lite Web App" p="Order Management System" />

        <ProjectCard src={kash} link="https://kasdhma.lifebanktest.com/" h3="Kasdhma" p="Inventory and Facilities System" />
      </div>
    </section>
  );
}

export default Projects;
