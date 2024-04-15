'use client'

import { IWebsiteContents } from '@/constants/websiteContents'
import styles from './BusinessNamePanel.module.css'

interface IBusinessPanelProps {
    data: IWebsiteContents
}

export const BusinessNamePanel = ({
    data,
}: IBusinessPanelProps): JSX.Element => {
    return (
        <div
            className={styles.BusinessNamePanel}
            data-testid="businessNamePanel"
        >
            <div className={styles.BusinessNameOwnerTitle}>{data.field}</div>
            <div className={styles.BusinessNameOwnerOccupation}>
                {data.content}
            </div>
        </div>
    )
}
