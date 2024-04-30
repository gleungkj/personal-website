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
    )
}
