import React from "react";
import "../stars.scss";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import Typical from "react-typical";

export const Hero = () => {
  const skills = ["React", "Redux", "Node.js", "CSS", "JavaScript"];
  const skillSequence = skills.flatMap((skill) => [skill, 4000]); // Adds delay after each skill

  const stars = Array.from({ length: 50 }).map((_, index) => <div key={index} className={styles.star}></div>);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {/* <Typical steps={["Hi, I'm Mehak Sadique", 1000]} wrapper="span" /> */}
          Hi, I'm Mehak Sadique
        </h1>
        <p className={styles.description}>
          I'm a full-stack developer with 5 years of experience using{" "}
          <Typical loop={Infinity} wrapper="span" steps={skillSequence} />
          . Reach out if you'd like to learn more!
        </p>
        <a href="mailto:mehaksadique@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.gif")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      <div className={styles.stars}>{stars}</div> {/* Add the stars container */}
    </section>
  );
};
