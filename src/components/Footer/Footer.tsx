'use client'

import styles from './Footer.module.css'
import VercelLogo from '@/app/assets/vercelLogo'
import ReactLogo from '@/app/assets/reactLogo'
import NextJSLogo from '@/app/assets/nextJSLogo'

export const Footer = (): JSX.Element => {
    const logos = [
        <NextJSLogo height="5vh" width="5vh" />,
        <VercelLogo height="5vh" width="10vw" />,
        <ReactLogo height="5vh" width="5vh" />,
    ]

    return (
        <div className={styles.footer}>
            <div className={styles.footerLogo}>Powered by </div>
            {logos.map((logo) => (
                <div className={styles.footerLogo}>{logo}</div>
            ))}
        </div>
    )
}
