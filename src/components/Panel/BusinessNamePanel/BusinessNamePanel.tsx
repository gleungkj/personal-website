'use client'

import { IWebsiteContents } from '@/constants/websiteContents'
import styles from './BusinessNamePanel.module.css'
import { useAnimate, motion, stagger } from 'framer-motion'
import {
    animatedPanelFrameFromTree,
    animatedPanelFrameOnLoad,
    initialPanelFrame,
} from './animationFrames'
import { useEffect } from 'react'

interface IBusinessPanelProps {
    data: IWebsiteContents
}

export const BusinessNamePanel = ({
    data,
}: IBusinessPanelProps): JSX.Element => {
    const [panelScope, animatePanelScope] = useAnimate()
    const [contentScope, animateContentScope] = useAnimate()

    const expandPanelAnimation = async () => {
        await animatePanelScope(
            panelScope.current,
            animatedPanelFrameFromTree,
            {
                ease: 'easeInOut',
                duration: 0.5,
            }
        )
        await animatePanelScope(panelScope.current, animatedPanelFrameOnLoad, {
            ease: 'easeInOut',
            duration: 0.5,
        })
    }

    const expandContentAnimation = async () => {
        await animateContentScope(
            'div',
            { opacity: 1 },
            {
                delay: stagger(0.5, { startDelay: 1.25 }),
                duration: 1,
                ease: 'easeInOut',
            }
        )
    }

    useEffect(() => {
        expandPanelAnimation()
        expandContentAnimation()
    })

    return (
        <motion.div
            className={styles.businessNamePanel}
            data-testid="businessNamePanel"
            ref={panelScope}
            initial={initialPanelFrame}
        >
            <div ref={contentScope}>
                <div className={styles.businessNameOwnerTitle}>
                    {data.field}
                </div>
                <div className={styles.businessNameOwnerOccupation}>
                    {data.content}
                </div>
            </div>
        </motion.div>
    )
}
