'use client'

import styles from './Footer.module.css'
import VercelLogo from '@/app/assets/vercelLogo'
import ReactLogo from '@/app/assets/reactLogo'
import NextJSLogo from '@/app/assets/nextJSLogo'

export const Footer = (): JSX.Element => {
    return (
        <div className={styles.footer}>
            <div>Powered by </div>
            <NextJSLogo height="56px" width="216px" />
            <VercelLogo height="56px" width="216px" />
            <ReactLogo height="56px" width="216px" />
        </div>
    )
}
