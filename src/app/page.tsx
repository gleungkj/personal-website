import { IWebsiteContents, websitePageType } from "@/constants/websiteContents";
import styles from "./page.module.css";
import { prisma } from "../../server";
import { ExperiencePanel } from "@/components/Panel/ExperiencePanel";
import { getListOfFirstEntry } from "@/services/getListOfFirstEntry";
import { ContractedPanel } from "@/components/Panel/ContractedPanel/ContractedPanel";
import { da } from "@faker-js/faker";
import Link from "next/link";

export default async function Home() {

  const homeData: IWebsiteContents[] | null = await prisma.website.findMany({
    where: { page : websitePageType.home },
  })

  const firstEntryList = await getListOfFirstEntry()

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
          <div>
          {experienceData.map((data) => (<ExperiencePanel experienceData={data} key={data.id}/>))}
          </div>
          <div>
          {firstEntryList?.map((data) => (
          <Link href={`/${data.page}`} key={data.id}>
          <ContractedPanel data={data} key={data.id}/>
          </Link>
          ))}
          
          </div>
        </div>
      </main>
  ) : (
      <main className={styles.main}>
        <h1>Hello, Dashboard Page!</h1>
      </main>
  );
}
