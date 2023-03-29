import Image from "next/image";
import box from "../../../public/images/svg/hollowed-boxes.svg";
import styles from "../../styles/footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image className={styles.logo} src={box} alt="box" />
      <p className={styles.copyright}>
        Copyright © 2022 Andrés Céspedes. All rights reserved.
      </p>
      <Image className={styles.logo} src={box} alt="box" />
    </footer>
  );
}
