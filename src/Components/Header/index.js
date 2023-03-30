import Link from "next/link";
import styles from "../../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.rocket}>🚀</div>
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
    </header>
  );
}
