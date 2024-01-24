import Link from "next/link";
import styles from "../app/page.module.css";
import Head from "next/head";

export const Header = (): JSX.Element => {
  return (
    <div>
      Name Here
      <div className={styles.grid}>
        <Link href="/about">About</Link>
        <Link href="/works">Works</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/developer">Developer Portal</Link>
      </div>
    </div>
  );
};
