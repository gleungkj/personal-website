import Link from "next/link";
import styles from "./Header.module.css";
import Head from "next/head";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export const Header = (): JSX.Element => {
  return (  
      <div className={styles.header}>
        <div className={styles.grid}>
            <Link href="/about" className={styles.link}>About</Link>          
            <Link href="/works" className={styles.link}>Works</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
            <Link href="/developer" className={styles.link}>Developer Portal</Link>
        </div>
        <div className={styles.account}>
          <OrganizationSwitcher/>
          <UserButton />
        </div>
      </div>
  );
};
