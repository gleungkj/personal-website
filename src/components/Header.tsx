'use client'

import Link from "next/link";
import styles from "./Header.module.css";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { HomeIcon } from "@heroicons/react/24/outline"
import { useEffect } from "react";
import { HeaderLink } from "./HeaderLink";
import { stagger, useAnimate } from "framer-motion";

interface IHeaderProps {
  isLoggedIn: boolean
}

export const Header = ({isLoggedIn}: IHeaderProps): JSX.Element => {

  const [scope, animate] = useAnimate()
  
  useEffect(() => {
    
    animate("div", {opacity: 1, y: 0}, {delay: stagger(0.5, {startDelay: 0.25})})
    
  })

  return (  
      <div className={styles.header}>
        <div className={styles.grid} ref={scope}>
        <Link href="/" className={styles.homeButton}>
        <HomeIcon color="white" height="4vh"></HomeIcon>
        </Link>
            <HeaderLink href="/about" label="About"/>
            <HeaderLink href="/works" label="Works"/>
            <HeaderLink href="/contact" label="Contact"/>
          {/* </div> */}
          {isLoggedIn === false && 
          <Link href="/developer" className={`${styles.link} ${styles.linkDeveloper}`}>Developer Login</Link>}
        </div>
        <div className={styles.account}>
          <OrganizationSwitcher/>
          <UserButton />
        </div>
      </div>
  );
};
