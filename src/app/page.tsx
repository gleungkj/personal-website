import styles from "./page.module.css";
import { OrganizationSwitcher, auth, currentUser, useAuth } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";

export default async function Home() {

  return (
      <main className={styles.main}>
        <h1>Hello, Dashboard Page!</h1>
      </main>
  );
}
