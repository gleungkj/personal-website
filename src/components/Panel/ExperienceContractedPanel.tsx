import { Dispatch, SetStateAction } from 'react'
import styles from './ExperienceContractedPanel.module.css'

interface IExperienceContractPanelProps {
    isExpanded: boolean
    setPanelExpanded: Dispatch<SetStateAction<boolean>>
}

export const ExperienceContractedPanel = ({isExpanded, setPanelExpanded}: IExperienceContractPanelProps): JSX.Element => {

    const handleClick = (): void => {
        setPanelExpanded(!isExpanded)
    }

    return (
        <div className={styles.experienceContractedPanel} onClick={handleClick} data-testid='experienceContractedPanel'>
            Temp experience panel<br />
            Click on panel to expand            
        </div>
    )
}