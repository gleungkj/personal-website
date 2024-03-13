import { XCircleIcon } from "@heroicons/react/24/outline"
import { Dispatch, SetStateAction } from "react"
import styles from './ExperienceExpandedPanel.module.css'

interface IExperienceExpandedPanel {
    isExpanded: boolean
    setPanelExpanded: Dispatch<SetStateAction<boolean>>
}

export const ExperienceExpandedPanel = ({isExpanded, setPanelExpanded}: IExperienceExpandedPanel) => {

    const handleClick = (): void => {
        setPanelExpanded(!isExpanded)
    }

    return (        
        <div className={styles.experiencePanelBackground}
        data-testid='experienceExpandedPanel'> 
            <div className={styles.experienceExpandedPanel}> experience expanded panel
                <button onClick={handleClick} className={styles.closeButton} title="Close panel">
                    <XCircleIcon className={styles.closeIcon}/>
                </button>
            </div>
        </div>
    )
}