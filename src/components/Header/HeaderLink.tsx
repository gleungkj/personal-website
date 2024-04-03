import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"
import styles from "./Header.module.css";
import { motion } from 'framer-motion'

interface IHeaderLinkProps {
    href: Url,
    label: string
}

export const HeaderLink = ({href, label}: IHeaderLinkProps): JSX.Element => {

    return (
        <motion.div 
        initial={{opacity:0, y: "50%"}} animate={{y: 0}} whileHover={{y: "-20%"}} transition={{ease:'easeInOut'}}>
            <Link href={href} className={styles.link}>{label}</Link>
        </motion.div>
    )
}