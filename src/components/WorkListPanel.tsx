/* eslint-disable @next/next/no-img-element */

import { ListBlobResultBlob } from '@vercel/blob';
import styles from "./WorkListPanel.module.css"
import Link from "next/link";

interface IWorkListPanelProps {
    blobList: ListBlobResultBlob[]
}

export const WorkListPanel = ({blobList}: IWorkListPanelProps) => {
       
    return (
    <div className={styles.workListPanel}>
        {blobList?.map((blob, index) => (
        <Link key={`blobSet-${index}`} id={`blobSet-${index}`} href={blob.url} >
            <img src={blob.url} alt='blobImage' width="100%"/>
        </Link>     
        ))}
    </div>)
}