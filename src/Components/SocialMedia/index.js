import linkedin from "../../../public/images/icons/linkedin.png";
import github from "../../../public/images/icons/github-white.png";
import Image from "next/image";
import styles from "../../styles/social-media.module.css";

export default function SocialMedia() {
  return (
    <div className={styles.contact}>
      <div className={styles.contactIcons}>
        <a
          href="https://github.com/AndresCespedes23"
          target="_blank"
          rel="noreferrer"
        >
          <Image className={styles.icons} src={github} alt="github" />
        </a>
      </div>
      <div className={styles.contactIcons}>
        <a
          href="https://www.linkedin.com/in/andres-pablo-cespedes/"
          target="_blank"
          rel="noreferrer"
        >
          <Image className={styles.icons} src={linkedin} alt="share" />
        </a>
      </div>
    </div>
  );
}
