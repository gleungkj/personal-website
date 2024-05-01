'use client'

import { IWebsiteContents } from '@/constants/websiteContents'
import { TreeBranch } from '../Background/TreeBranch/TreeBranch'
import { BusinessNamePanel } from '../Panel/BusinessNamePanel/BusinessNamePanel'
import { ExperiencePanel } from '../Panel/ExperiencePanel'
import Link from 'next/link'
import { ContractedPanel } from '../Panel/ContractedPanel/ContractedPanel'
import styles from './HomeScreen.module.css'

interface IHomeScreenProps {
    firstEntryList: IWebsiteContents[]
    frontPageData: IWebsiteContents
    experienceData: IWebsiteContents[]
}

export const HomeScreen = ({
    firstEntryList,
    frontPageData,
    experienceData,
}: IHomeScreenProps): JSX.Element => {
    return (
        <main className={styles.main}>
            <div className={styles.contentPanel}>
                <div className={styles.businessNamePanelTree}>
                    <TreeBranch />
                    <BusinessNamePanel data={frontPageData} />
                </div>
                {experienceData.map((data) => (
                    <div className={styles.contentPanelWithTree} key={data.id}>
                        <TreeBranch />
                        <ExperiencePanel experienceData={data} />
                    </div>
                ))}

                {firstEntryList?.map((data) => (
                    <div className={styles.contentPanelWithTree} key={data.id}>
                        <TreeBranch />
                        <Link href={`/${data.page}`} key={data.id}>
                            <ContractedPanel data={data} key={data.id} />
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    )
}
