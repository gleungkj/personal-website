'use client'

import Link from "next/link";
import styles from "./Header.module.css";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { HomeIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline"
import { useEffect } from "react";
import { HeaderLink } from "./HeaderLink";
import { stagger, useAnimate, motion } from "framer-motion";

interface IHeaderProps {
  isLoggedIn: boolean
}

export const Header = ({isLoggedIn}: IHeaderProps): JSX.Element => {

  const [scope, animate] = useAnimate()
  
  useEffect(() => {    
    animate("div", {opacity: 1, y: 0}, {delay: stagger(0.5, {startDelay: 0.25}), duration: 1})
  })

  return (  
      <div className={styles.header}>
        <div className={styles.grid} ref={scope}>
        <Link href="/">
          <motion.div whileHover={{scale:1.3}} transition={{ease: 'easeIn', duration: 0.25}}>
            <HomeIcon color="#0e1122" height="4vh" title="Home"></HomeIcon>
          </motion.div>
        </Link>
        <div className={styles.websiteAuthor}>Gavin Leung</div>
        <div className={styles.linkListStart}>
            <HeaderLink href="/about" label="About"/>
        </div>
            <HeaderLink href="/works" label="Works"/>
            <HeaderLink href="/contact" label="Contact"/>
          {isLoggedIn === false && 
          <Link href="/developer" className={`${styles.link} ${styles.linkDeveloper}`}>
            <motion.div whileHover={{scale:1.3}} transition={{ease: 'easeIn', duration: 0.25}}>
          <WrenchScrewdriverIcon color="#0e1122" height="4vh" title="Developer Login"></WrenchScrewdriverIcon>
        </motion.div></Link>}
        </div>
        <div className={styles.account}>
          <OrganizationSwitcher/>
          <UserButton />
        </div>
      </div>
  );
};
