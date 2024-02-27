"use client"

import { useState } from "react";
import { AddContentButton } from "./AddContentButton";
import styles from "./AddContentPanel.module.css"
import { AddWorksForm } from "./AddWorksForm";
import { ILoggedInUserDetails, IWebsiteContents } from "@/constants/websiteContents";

interface IAddWorksPanelProps {
    websiteContents: IWebsiteContents,
    loggedInUserDetails: ILoggedInUserDetails
}

export const AddWorksPanel = ({websiteContents,loggedInUserDetails}: IAddWorksPanelProps) => {

    const [isAddWorksPanelOpen, setIsAddWorksPanelOpen] = useState(false)

    return (
        <div className={styles.addContentPanel} data-testid='addContentPanel'>
            <AddContentButton setPanelOpen={setIsAddWorksPanelOpen} isOpen={isAddWorksPanelOpen} />
            {isAddWorksPanelOpen && <AddWorksForm websiteContents={websiteContents} loggedInUserDetails={loggedInUserDetails}/>}
        </div>
        )
}