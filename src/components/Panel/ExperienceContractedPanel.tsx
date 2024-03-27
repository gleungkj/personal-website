import { Dispatch, SetStateAction } from 'react'
import styles from './ExperienceContractedPanel.module.css'
import { IWebsiteContents } from '@/constants/websiteContents'
import { AnimationProps, motion, useAnimate } from 'framer-motion'

interface IExperienceContractPanelProps {
    data: IWebsiteContents
    isExpanded: boolean
    setPanelExpanded: Dispatch<SetStateAction<boolean>>
}

const animatedFrame: AnimationProps['animate'] = {   
        scale: 0.95, 
        transition:{duration: 0.5},  
}

export const ExperienceContractedPanel = ({data, isExpanded, setPanelExpanded}: IExperienceContractPanelProps): JSX.Element => {

    const [scope, animate] = useAnimate()

    const handleClick = async (): Promise<void> => {
        await animate(scope.current, animatedFrame)
        setPanelExpanded(!isExpanded)
    }

    return (
        <motion.div ref={scope}
        key={data.id} 
        className={styles.experienceContractedPanel} onClick={handleClick} data-testid='experienceContractedPanel' whileHover={{
            scale: 1.05, 
            transition:{duration: 0.25}
        }} 
        >
            <div className={styles.experienceContent}>
                <div key={`contractedPanelExperience-${data.id}`} className={styles.contentHeader}>
                Experience
                </div>
                <div key={`contractedPanelContent-${data.id}`}className={styles.contentDetails}>
                {data.content.split('\n').map((content, index) => (<div key={`data-${index}`}>{content}</div>))}
                </div>
            </div>
            <div className={styles.contentInstruction}>
            Click on panel to expand            
            </div>
        </motion.div>
    )
}