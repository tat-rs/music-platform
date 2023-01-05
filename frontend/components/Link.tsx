import Link from "next/link";
import styles from "../styles/LinkElement.module.scss";

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
