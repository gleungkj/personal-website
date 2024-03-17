import { IWebsiteContents } from "@/constants/websiteContents";
import styles from "./page.module.css";
import { prisma } from "../../server";
import { ExperiencePanel } from "@/components/Panel/ExperiencePanel";

export default async function Home() {

  const homeData: IWebsiteContents[] | null = await prisma.website.findMany({
    where: { page: 'home' },
  })

  return homeData !== null? (
      <main className={styles.main}>
        <div className={styles.contentPanel}>
          <div className={styles.field}>
          {homeData[0].field}
          </div>          
          <div className={styles.content}>
          {homeData[0].content}        
          </div>
          <ExperiencePanel />
        </div>
      </main>
  ) : (
      <main className={styles.main}>
        <h1>Hello, Dashboard Page!</h1>
      </main>
  );
}
