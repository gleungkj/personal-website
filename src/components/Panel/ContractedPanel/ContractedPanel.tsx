'use client'

import { IWebsiteContents } from '@/constants/websiteContents'
import styles from './ContractedPanel.module.css'
import { capitalizeFirstLetter } from '@/app/utils'
import { motion, stagger, useAnimate, useInView } from 'framer-motion'
import {
    animatedPanelFrameFromTree,
    animatedPanelFrameOnLoad,
    animatedFrameOnHover,
    initialPanelFrame,
} from './animationFrames'
import { useCallback, useEffect } from 'react'

interface IContractedPanelProps {
    data: IWebsiteContents
}

export const ContractedPanel = ({
    data,
}: IContractedPanelProps): JSX.Element => {
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)

    const expandPanelAnimation = useCallback(async () => {
        await animate(
            scope.current,
            { opacity: 0.8 },
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
    }, [animate, scope])

    useEffect(() => {
        if (isInView) {
            expandPanelAnimation()
        }
    }, [animate, expandPanelAnimation, isInView, scope])

    return (
        <motion.div
            ref={scope}
            className={styles.contractedPanel}
            key={`contractedPanel-${data.id}`}
            whileHover={animatedFrameOnHover}
            initial={initialPanelFrame}
        >
            <div className={styles.contractedContent}>
                <div className={styles.header}>
                    {capitalizeFirstLetter(data.page)}
                </div>
                <div className={styles.details}>
                    <div className={styles.field}>{data.field}</div>
                    <div className={styles.content}>{data.content}</div>
                </div>
            </div>
        </motion.div>
    )
}
