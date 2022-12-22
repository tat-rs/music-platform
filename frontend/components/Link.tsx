import styles from "../styles/LinkElement.module.scss";
import Link from "next/link";

interface LinkElementProps {
  link: string,
  text: string,
}

function LinkElement({link, text}: LinkElementProps) {
  return (
    <Link href={link} className={styles.link}>{text}</Link>
  )
}

export default LinkElement;
