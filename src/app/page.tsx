import { IWebsiteContents, websitePageType } from "@/constants/websiteContents";
import styles from "./page.module.css";
import { prisma } from "../../server";
import { ExperiencePanel } from "@/components/Panel/ExperiencePanel";

export default async function Home() {

  const homeData: IWebsiteContents[] | null = await prisma.website.findMany({
    where: { page : websitePageType.home },
  })

  const frontPageData = homeData.find((data) => {
    return data.field === 'Gavin Leung'
  })

  const experienceData = homeData.filter((data) => {
    return data.field === "CV"
  })

  return frontPageData !== undefined ? (
      <main className={styles.main}>
        <div className={styles.contentPanel}>
          <div className={styles.field}>
          {frontPageData.field}
          </div>          
          <div className={styles.content}>
          {frontPageData.content}        
          </div>
          {experienceData.map((data) => (<ExperiencePanel experienceData={data}/>))}          
        </div>
      </main>
  ) : (
      <main className={styles.main}>
        <h1>Hello, Dashboard Page!</h1>
      </main>
  );
}
