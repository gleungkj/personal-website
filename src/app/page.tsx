import styles from "./page.module.css";
import { OrganizationSwitcher, auth, currentUser, useAuth } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import { isAdminUser } from "@/services/utils";


export default async function Home() {  

  const authenticationDetails = await auth()

  return (
    <OrganizationSwitcher>
      <main className={styles.main}>
        <h1>Hello, Dashboard Page!</h1>
      </main>
    </OrganizationSwitcher>
  );
}
