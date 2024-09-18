'use client'

import styles from './Footer.module.css'
import { VercelLogoComponent } from '@/app/assets/vercelLogo'
import { ReactLogoComponent } from '@/app/assets/reactLogo'
import { NextJSLogoComponent } from '@/app/assets/nextJSLogo'

export const Footer = (): JSX.Element => {
    const logos = [
        <NextJSLogoComponent key="NextJSLogo" />,
        <VercelLogoComponent key="VercelLogo" />,
        <ReactLogoComponent key="ReactLogo" />,
    ]

    return (
        <div className={styles.footer} key="logoList">
            <div className={styles.footerLogo} key="footerLogos">
                Powered by
            </div>
            {logos.map((logo) => (
                <div className={styles.footerLogo} key="logo">
                    {logo}
                </div>
            ))}
        </div>
    )
}
