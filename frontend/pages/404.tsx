import Link from "next/link";
import styles from "../styles/NotFoundPage.module.scss";

export default function NotFoundPage() {
  return (
    <section className={styles.notFound}>
      <h2 className={styles.notFound__title}>404</h2>
      <p className={styles.notFound__text}>Страница не найдена</p>
      <Link href="/" className={styles.notFound__link}>Вернуться на главную страницу</Link>
    </section>
  )
}