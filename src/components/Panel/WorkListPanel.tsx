/* eslint-disable @next/next/no-img-element */

import { ListBlobResultBlob } from '@vercel/blob';
import styles from "./WorkListPanel.module.css"
import { ImagePanel } from './ImagePanel';

interface IWorkListPanelProps {
    blobList: ListBlobResultBlob[]
}

export const WorkListPanel = ({blobList}: IWorkListPanelProps) => {
       
    return (
    <div className={styles.workListPanel}>
        {blobList?.map((blob, index) => (
        <ImagePanel image={blob} key={`imageSet-${index}`}/> 
        ))}
    </div>)
}