import { Dispatch, SetStateAction } from 'react'
import styles from './ExperienceContractedPanel.module.css'
import { IWebsiteContents } from '@/constants/websiteContents'

interface IExperienceContractPanelProps {
    data: IWebsiteContents
    isExpanded: boolean
    setPanelExpanded: Dispatch<SetStateAction<boolean>>
}

export const ExperienceContractedPanel = ({data, isExpanded, setPanelExpanded}: IExperienceContractPanelProps): JSX.Element => {

    const handleClick = (): void => {
        setPanelExpanded(!isExpanded)
    }

    return (
        <div key={data.id} className={styles.experienceContractedPanel} onClick={handleClick} data-testid='experienceContractedPanel'>
            <div className={styles.experienceContent}>
                <div className={styles.contentHeader}>
                Experience
                </div>
                <div className={styles.contentDetails}>
                {data.content}
                </div>
            </div>
            <div className={styles.contentInstruction}>
            Click on panel to expand            
            </div>
        </div>
    )
}