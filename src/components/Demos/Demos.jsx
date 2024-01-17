import React from "react";
import styles from "./Demos.module.css";
import { getImageUrl } from "../../utils";

export const Demos = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>Demos</h2>
            <div className={styles.content}>
            <img 
                src={getImageUrl("about/streamlit.png") } 
                alt="Depp learning image" 
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <h3>Experiments Demos</h3>
                        <p>
                        Here you will find some of my principal experimental demos, created using Python and the Streamlit library for the UI, as well as for deploying the models.
                        </p>
                    </div>
                </li>
            </ul>
            <a href="https://machine-learning-experiments.streamlit.app/" className={styles.DemosBtn}>Demos</a>
            </div>
        </section>
    )
};