'use client'

import { XCircleIcon } from "@heroicons/react/24/outline"
import { Dispatch, SetStateAction, useEffect } from "react"
import styles from './ExperienceExpandedPanel.module.css'
import { IWebsiteContents } from "@/constants/websiteContents"
import { motion, useAnimate } from 'framer-motion'
import { animatedContentOnOpen, animatedFrameOnOpen, initialFrame } from "./animationFrames"

interface IExperienceExpandedPanel {
    data: IWebsiteContents
    isExpanded: boolean
    setPanelExpanded: Dispatch<SetStateAction<boolean>>
}

export const ExperienceExpandedPanel = ({data, isExpanded, setPanelExpanded}: IExperienceExpandedPanel) => {

    const [scope, animate] = useAnimate()
    
    const expandPanelAnimation = async () => {
        await animate(scope.current, animatedFrameOnOpen,{ease: "easeInOut", duration: 0.25})
        await animate(scope.current, animatedContentOnOpen, {ease: "easeIn", duration: 1, delay: 0.25})
    }

    useEffect(() => {
        expandPanelAnimation()
    })

    const handleClick = async (): Promise<void> => {
        await setPanelExpanded(!isExpanded)
    }

    return (        
        <div className={styles.experiencePanelBackground}
        data-testid='experienceExpandedPanel'> 
            <motion.div ref={scope} initial={initialFrame}> 
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease:'easeInOut', duration: 2} }>
                    {data.content}
                </motion.div>
                <button onClick={handleClick} className={styles.closeButton} title="Close panel">
                    <XCircleIcon className={styles.closeIcon}/>
                </button>
            </motion.div>
        </div>
    )
}