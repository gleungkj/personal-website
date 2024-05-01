import { IWebsiteContents, websitePageType } from '@/constants/websiteContents'
import styles from './page.module.css'
import { prisma } from '../../server'
import { getListOfFirstEntry } from '@/services/getListOfFirstEntry'
import { HomeScreen } from '@/components/HomeScreen/HomeScreen'

export default async function Home() {
    const homeData: IWebsiteContents[] | null = await prisma.website.findMany({
        where: { page: websitePageType.home },
    })

    const firstEntryList = await getListOfFirstEntry()

    const frontPageData = homeData.find((data) => {
        return data.field === 'Gavin Leung'
    })

    const experienceData = homeData.filter((data) => {
        return data.field === 'CV'
    })

    return frontPageData !== undefined &&
        firstEntryList !== null &&
        experienceData !== undefined ? (
        <HomeScreen
            firstEntryList={firstEntryList}
            frontPageData={frontPageData}
            experienceData={experienceData}
        />
    ) : (
        <main className={styles.main}>
            <h1>Hello, Dashboard Page!</h1>
        </main>
    )
}
