import { Dispatch, SetStateAction, useEffect } from 'react'
import styles from './ExperienceContractedPanel.module.css'
import { IWebsiteContents } from '@/constants/websiteContents'
import { motion, stagger, useAnimate } from 'framer-motion'
import {
    animatedFrameOnClick,
    animatedFrameOnHover,
    animatedPanelFrameFromTree,
    animatedPanelFrameOnLoad,
    initialPanelFrame,
} from './animationFrames'

interface IExperienceContractPanelProps {
    data: IWebsiteContents
    isExpanded: boolean
    setPanelExpanded: Dispatch<SetStateAction<boolean>>
}

export const ExperienceContractedPanel = ({
    data,
    isExpanded,
    setPanelExpanded,
}: IExperienceContractPanelProps): JSX.Element => {
    const [scope, animate] = useAnimate()

    const expandPanelAnimation = async () => {
        await animate(
            scope.current,
            { opacity: 'auto' },
            { delay: stagger(0.25, { startDelay: 0.5 }), duration: 1 }
        )
        await animate(scope.current, animatedPanelFrameFromTree, {
            ease: 'easeInOut',
            duration: 0.5,
        })
        await animate(scope.current, animatedPanelFrameOnLoad, {
            ease: 'easeInOut',
            duration: 0.5,
        })
    }

    const handleClick = async (): Promise<void> => {
        await animate(scope.current, animatedFrameOnClick)
        setPanelExpanded(!isExpanded)
    }

    useEffect(() => {
        expandPanelAnimation()
    })

    return (
        <motion.div
            ref={scope}
            key={data.id}
            className={styles.experienceContractedPanel}
            onClick={handleClick}
            data-testid="experienceContractedPanel"
            whileHover={animatedFrameOnHover}
            initial={initialPanelFrame}
        >
            <div className={styles.experienceContent}>
                <div
                    key={`contractedPanelExperience-${data.id}`}
                    className={styles.contentHeader}
                >
                    Experience
                </div>
                <div
                    key={`contractedPanelContent-${data.id}`}
                    className={styles.contentDetails}
                >
                    {data.content.split('\n').map((content, index) => (
                        <div key={`data-${index}`}>{content}</div>
                    ))}
                </div>
            </div>
            <div className={styles.contentInstruction}>
                Click on panel to expand
            </div>
        </motion.div>
    )
}