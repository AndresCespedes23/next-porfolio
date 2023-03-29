/* eslint-disable @next/next/no-img-element */
import github from "../../../public/images/icons/github.png";
import share from "../../../public/images/icons/share.png";
import Image from "next/image";
import styles from "../../styles/accordion.module.css";
import { useState } from "react";
export default function Accordion({
  image,
  logo,
  techStack,
  body,
  sourceCode,
  liveProject,
}) {
  const [isOpen, setOpen] = useState(false);

  const handleAccordion = () => {
    setOpen(!isOpen);
  };
  return (
    <div className={styles.accordion}>
      <div onClick={() => handleAccordion()} className={styles.accordionHeader}>
        <img alt="logo" src={logo} className={styles.projectLogo} />
        <div className={styles.accordionIndicator}>{isOpen ? "-" : "+"}</div>
      </div>
      {isOpen && (
        <div className={styles.accordionBody}>
          <div>
            <h2>Preview:</h2>
            <img alt="project" className={styles.accordionImage} src={image} />
          </div>
          <div className={styles.tech}>
            <h3 className={styles.techTitle}>Tech:</h3>
            {techStack?.map((data) => (
              <img
                alt="project"
                className={styles.techImg}
                src={data.url}
                key={data.title}
                {...data}
              />
            ))}
          </div>
          <h4 className={styles.projectDescription}>Project Description:</h4>
          {body}
          <div className={styles.btns}>
            <div className={styles.btn}>
              <a href={sourceCode} target="_blank" rel="noreferrer">
                <Image
                  className={styles.projectsLinks}
                  alt="github"
                  src={github}
                />
              </a>
            </div>
            <div className={styles.btn}>
              <a href={liveProject} target="_blank" rel="noreferrer">
                <Image
                  className={styles.projectsLinks}
                  alt="live project"
                  src={share}
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
