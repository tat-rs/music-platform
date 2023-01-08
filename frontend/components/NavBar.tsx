import Link from "next/link";
import styles from "../styles/NavBar.module.scss";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <Link href="/" className={styles.nav__link}>Главная</Link>
        </li>
        <li className={styles.nav__item}>
          <Link href="/tracks" className={styles.nav__link}>Треки</Link>
        </li>
      </ul>
    </nav>
  )
}