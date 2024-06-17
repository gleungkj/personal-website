'use client'

import { IWebsiteContents, websitePageType } from '@/constants/websiteContents'
import { EditPanel } from './Panel/EditPanel/EditPanel'
import { AddContentPanel } from './Panel/AddContentPanel'
import styles from './PageTable.module.css'
import { stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

interface IPageTableProps {
    websiteContents: IWebsiteContents[]
    isAdmin: boolean
}

export const PageTable: React.FC<IPageTableProps> = ({
    websiteContents,
    isAdmin,
}): JSX.Element => {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        animate(
            'div',
            { opacity: 1, x: 0, y: 0 },
            { delay: stagger(0.25), duration: 1 }
        )
    })

    return (
        <div className={styles.table} ref={scope}>
            {websiteContents.map((content) => (
                <div key={content.id}>
                    <motion.div
                        initial={{ opacity: 0, y: '50%' }}
                        animate={{ y: 0 }}
                        transition={{ ease: 'easeInOut' }}
                        className={styles.field}
                    >
                        {content.field}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: '-50%' }}
                        animate={{ x: 0 }}
                        transition={{ ease: 'easeInOut' }}
                        className={styles.content}
                    >
                        {content.content}
                    </motion.div>
                    <EditPanel websiteContents={content} isAdmin={isAdmin} />
                </div>
            ))}
            <AddContentPanel
                pageType={websiteContents[0].page as unknown as websitePageType}
                isAdmin={isAdmin}
            />
        </div>
    )
}
