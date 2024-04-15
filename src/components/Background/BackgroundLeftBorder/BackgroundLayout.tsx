'use client'

import { useAnimate, motion, easeInOut } from 'framer-motion'
import styles from '@/components/Background/BackgroundLeftBorder/BackgroundLayout.module.css'
import { useEffect } from 'react'
import { animatedLeftBorderOnLoad, initialPanelFrame } from './animationFrames'

export const BackgroundLayout: React.FC = (): JSX.Element => {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        animate(scope.current, animatedLeftBorderOnLoad, {
            ease: easeInOut,
            duration: 1,
        })
    })

    return (
        <div className={styles.backgroundLeftBorderPosition}>
            <motion.div
                className={styles.backgroundLeftBorder}
                initial={initialPanelFrame}
                ref={scope}
            />
            <div className={styles.backgroundTreeTrunk} />
        </div>
    )
}
