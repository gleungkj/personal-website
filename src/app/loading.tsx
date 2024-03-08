import { ArrowPathIcon } from "@heroicons/react/24/outline"
import styles from "./loading.module.css"

export default function Loading() {
    return <div className={styles.loadingPanel}>
        <ArrowPathIcon className={styles.spinner}height="8vh" color="white"/>
        Loading...
    </div>
}