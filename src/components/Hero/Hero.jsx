import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm João</h1>
                <p className={styles.description}>I'm a Software Developer graduating in Software Enginering with experience using Python,DeppLearning,NLP,SQL. Reach out if you'd like to learn more!</p>
                <a href="mailto:jpanacleto5@gmail.com" className={styles.contactBtn}>Contact me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.jpg")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>  
    );
  };