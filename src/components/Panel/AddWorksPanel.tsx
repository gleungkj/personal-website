"use client"

import { useState } from "react";
import { AddContentButton } from "../Button/AddContentButton";
import styles from "./AddContentPanel.module.css"
import { AddWorksForm } from "../Form/AddWorksForm";
import { ILoggedInUserDetails, IWebsiteContents } from "@/constants/websiteContents";
import { WorkListPanel } from "./WorkListPanel";
import { ListBlobResultBlob } from "@vercel/blob";

interface IAddWorksPanelProps {
    websiteContents: IWebsiteContents,
    loggedInUserDetails: ILoggedInUserDetails
    blobList: ListBlobResultBlob[]
}

export const AddWorksPanel = ({websiteContents,loggedInUserDetails, blobList}: IAddWorksPanelProps) => {

    const [isAddWorksPanelOpen, setIsAddWorksPanelOpen] = useState(false)

    return (
        <div className={styles.addContentPanel} data-testid='addContentPanel'>
            <AddContentButton setPanelOpen={setIsAddWorksPanelOpen} isOpen={isAddWorksPanelOpen} />
            {isAddWorksPanelOpen && <AddWorksForm websiteContents={websiteContents} loggedInUserDetails={loggedInUserDetails}/>}
            <WorkListPanel blobList={blobList}/>
        </div>
        )
}