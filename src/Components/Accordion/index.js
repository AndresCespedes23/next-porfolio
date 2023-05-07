/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/accordion.module.css";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
export default function Accordion({
  image,
  logo,
  techStack,
  body,
  liveProject,
}) {
  const [isOpen, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleAccordion = () => {
    setOpen(!isOpen);
  };
  return (
    <div className={styles.accordion}>
      <div
        onClick={() => handleAccordion()}
        className={isOpen ? styles.accordionHeaderOpen : styles.accordionHeader}
      >
        {isLoading && (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#000"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        )}
        <img
          alt="logo"
          src={logo}
          className={styles.projectLogo}
          onLoad={() => setIsLoading(false)}
        />
        <div className={styles.accordionIndicator}>{isOpen ? "-" : "+"}</div>
      </div>
      {isOpen && (
        <div className={styles.accordionBody}>
          <div>
            <h2 className={styles.liveProjectTitle}>🔗 Link:</h2>
            <a href={liveProject} target="_blank" rel="noreferrer">
              <img
                alt="project"
                className={styles.accordionImage}
                src={image}
                onLoad={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
              />
            </a>
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
                onLoad={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
              />
            ))}
          </div>
          <h4 className={styles.project}>Project Description:</h4>
          <div className={styles.projectDescription}>{body}</div>
        </div>
      )}
    </div>
  );
}
