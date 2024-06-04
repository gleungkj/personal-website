'use client'

import { IWebsiteContents } from '@/constants/websiteContents'
import { TreeBranch } from '../Background/TreeBranch/TreeBranch'
import { BusinessNamePanel } from '../Panel/BusinessNamePanel/BusinessNamePanel'
import { ExperiencePanel } from '../Panel/ExperiencePanel'
import Link from 'next/link'
import styles from './HomeScreen.module.css'
import dynamic from 'next/dynamic'
import { useRef } from 'react'
import { motion } from 'framer-motion'

interface IHomeScreenProps {
    firstEntryList: IWebsiteContents[]
    frontPageData: IWebsiteContents
    experienceData: IWebsiteContents[]
}

const DynamicContractedPanel = dynamic(() =>
    import('../Panel/ContractedPanel/ContractedPanel').then(
        (component) => component.ContractedPanel
    )
)

const DynamicViewportRenderer = dynamic(() =>
    import('../ViewportRenderer/ViewportRenderer').then(
        (component) => component.ViewportRenderer
    )
)

export const HomeScreen = ({
    firstEntryList,
    frontPageData,
    experienceData,
}: IHomeScreenProps): JSX.Element => {
    const ref = useRef<HTMLDivElement>(null)

    return (
        <main className={styles.main}>
            <motion.div
                className={styles.contentPanel}
                id="contentPanel"
                ref={ref}
            >
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

                <DynamicViewportRenderer>
                    {firstEntryList?.map((data) => (
                        <div
                            className={styles.contentPanelWithTree}
                            key={data.id}
                        >
                            <TreeBranch />
                            <Link href={`/${data.page}`} key={data.id}>
                                <DynamicContractedPanel
                                    data={data}
                                    key={data.id}
                                />
                            </Link>
                        </div>
                    ))}
                </DynamicViewportRenderer>
            </motion.div>
        </main>
    )
}
