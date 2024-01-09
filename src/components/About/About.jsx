import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
            <img 
                src={getImageUrl("about/aboutImage.png") } 
                alt="Depp learning image" 
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <h3>Machine Learning Intern</h3>
                        <p>
                        I'm a machine learning developer with experience in building projects involving Neural Networks, Natural Language Processing, and other fields related to machine learning and data science.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <h3>Data Science Intern</h3>
                        <p>
                        Familiar with Data Science, skilled in Python, machine learning, and data visualization. Eager to apply analytical prowess and collaborate on impactful projects to contribute valuable insights.
                        </p>
                    </div>
                </li>
            </ul>
            </div>
        </section>
    )
};