'use client'

import { XCircleIcon } from "@heroicons/react/24/outline"
import { Dispatch, SetStateAction, useEffect } from "react"
import styles from './ExperienceExpandedPanel.module.css'
import { IWebsiteContents } from "@/constants/websiteContents"
import { motion, useAnimate } from 'framer-motion'
import { animatedContentFrameOnOpen, animatedPanelFrameOnOpen, initialContentFrame, initialPanelFrame } from "./animationFrames"

interface IExperienceExpandedPanel {
    data: IWebsiteContents
    isExpanded: boolean
    setPanelExpanded: Dispatch<SetStateAction<boolean>>
}

export const ExperienceExpandedPanel = ({data, isExpanded, setPanelExpanded}: IExperienceExpandedPanel) => {

    const [panelScope, animatePanelScope] = useAnimate()
    const [contentScope, animateContentScope] = useAnimate()
    
    const expandPanelAnimation = async () => {
        await animatePanelScope(panelScope.current, animatedPanelFrameOnOpen,{ease: "easeInOut", duration: 0.25})
        await animateContentScope(contentScope.current, animatedContentFrameOnOpen, {ease:'easeInOut', duration: 0.5})
    }

    useEffect(() => {
        expandPanelAnimation()
    },[])

    const handleClick = async (): Promise<void> => {
        await animateContentScope(contentScope.current, initialContentFrame, {ease: 'easeInOut', duration: 0.5})
        await animatePanelScope(panelScope.current, initialPanelFrame, {ease: "easeInOut", duration: 0.5})
        await setPanelExpanded(!isExpanded)
    }

    return (        
        <div key={`expandedPanel-${data.id}`} className={styles.experiencePanelBackground}
        data-testid='experienceExpandedPanel'> 
            <motion.div ref={panelScope} initial={initialPanelFrame} > 
                <motion.div initial={initialContentFrame} ref={contentScope}>
                    {data.content.split('\n').map((content) => (<div>{content}</div>))}
                </motion.div>
                <button onClick={handleClick} className={styles.closeButton} title="Close panel">
                    <XCircleIcon className={styles.closeIcon}/>
                </button>
            </motion.div>
        </div>
    )
}