import Link from "next/link";
import styles from "../../styles/mobile.module.css";

export default function Mobile() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <Link className={styles.navLinks} href="/">
          🏠
        </Link>
        <Link className={styles.navLinks} href="/portfolio">
          💼
        </Link>
        <Link className={styles.navLinks} href="/contact">
          💬
        </Link>
      </ul>
    </nav>
  );
}
