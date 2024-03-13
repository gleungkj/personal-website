/* eslint-disable @next/next/no-img-element */

import { ListBlobResultBlob } from '@vercel/blob';
import styles from "./WorkListPanel.module.css"
import { ImagePanel } from './ImagePanel';
import { ILoggedInUserDetails } from '@/constants/websiteContents';

interface IWorkListPanelProps {
    blobList: ListBlobResultBlob[]
    loggedInUserDetails: ILoggedInUserDetails
}

export const WorkListPanel = ({blobList, loggedInUserDetails}: IWorkListPanelProps) => {
       
    return (
    <div className={styles.workListPanel} data-testid="workListPanel">
        {blobList?.map((blob, index) => (
        <ImagePanel image={blob} key={`imageSet-${index}`} loggedInUserDetails={loggedInUserDetails}/> 
        ))}
    </div>)
}