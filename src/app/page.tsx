import { IWebsiteContents, websitePageType } from '@/constants/websiteContents'
import styles from './page.module.css'
import { prisma } from '../../server'
import { ExperiencePanel } from '@/components/Panel/ExperiencePanel'
import { getListOfFirstEntry } from '@/services/getListOfFirstEntry'
import { ContractedPanel } from '@/components/Panel/ContractedPanel/ContractedPanel'
import { da } from '@faker-js/faker'
import Link from 'next/link'
import { TreeBranch } from '@/components/Background/TreeBranch/TreeBranch'
import { BusinessNamePanel } from '@/components/Panel/BusinessNamePanel/BusinessNamePanel'

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

    return frontPageData !== undefined ? (
        <main className={styles.main}>
            <div className={styles.contentPanel}>
                <div className={styles.contentPanelWithTree}>
                    <TreeBranch />
                    <BusinessNamePanel data={frontPageData} />
                </div>
                <div>
                    {experienceData.map((data) => (
                        <div
                            key={data.id}
                            className={styles.contentPanelWithTree}
                        >
                            <TreeBranch />
                            <ExperiencePanel experienceData={data} />
                        </div>
                    ))}
                </div>
                <div>
                    {firstEntryList?.map((data) => (
                        <div
                            key={data.id}
                            className={styles.contentPanelWithTree}
                        >
                            <TreeBranch />
                            <Link href={`/${data.page}`} key={data.id}>
                                <ContractedPanel data={data} key={data.id} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    ) : (
        <main className={styles.main}>
            <h1>Hello, Dashboard Page!</h1>
        </main>
    )
}
