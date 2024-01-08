import React from "react";

import styles from "./Notebooks.module.css";

import projects from "../../data/notebooks.json";
import { NotebookCard } from "./NotebookCard";

export const Notebooks = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Studies Notebooks</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <NotebookCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};