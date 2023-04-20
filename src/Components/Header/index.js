import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/svg/sun.png";
import styles from "../../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image className={styles.logo} src={logo} alt="logo" />
      <nav>
        <ul>
          <Link className={styles.navLinks} href="/">
            Home
          </Link>
          <Link className={styles.navLinks} href="/portfolio">
            Portfolio
          </Link>
          <Link className={styles.navLinks} href="/contact">
            Contact
          </Link>
        </ul>
      </nav>
      <Image className={styles.logo} src={logo} alt="logo" />
    </header>
  );
}
