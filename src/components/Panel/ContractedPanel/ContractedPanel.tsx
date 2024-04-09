'use client'

import { IWebsiteContents } from "@/constants/websiteContents";
import styles from './ContractedPanel.module.css'
import { capitalizeFirstLetter } from "@/app/utils";
import { motion } from 'framer-motion'

interface IContractedPanelProps {
    data: IWebsiteContents
}

export const ContractedPanel = ({data}: IContractedPanelProps): JSX.Element => {
    return (      
        <motion.div className={styles.contractedPanel} key={`contractedPanel-${data.id}`} whileHover={{
            scale: 1.05, 
            transition:{duration: 0.25}
        }}>
            <div className={styles.contractedContent} >
                <div className={styles.header} >
                    {capitalizeFirstLetter(data.page)}
                </div>
                <div className={styles.details} >
                    <tr className={styles.field}>{data.field}</tr>
                    <tr className={styles.content}>{data.content}</tr>
                </div>
            </div>
        </motion.div>
    )
}