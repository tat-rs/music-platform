import MainLayout from "../layout/MainLayout";
import styles from "../styles/Index.module.scss";

export default function Index() {
  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.page__container}>
          <p className={styles.page__text}>Добро пожаловать!</p>
          <h1 className={styles.page__title}>Здесь собраны все лучшие треки!</h1>
        </div>
      </div>
    </MainLayout>
  )
}
