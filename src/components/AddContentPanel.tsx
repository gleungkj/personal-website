"use client"

import { websitePageType } from "@/constants/websiteContents";
import { useState } from "react";
import { AddContentButton } from "./AddContentButton";
import { AddContentForm } from "./AddContentForm";
import styles from "./AddContentPanel.module.css"

interface IAddContentPanelProps {
    pageType: websitePageType,
    isAdmin: boolean
}

export const AddContentPanel = ({pageType, isAdmin}: IAddContentPanelProps) => {

    const [isAddContentPanelOpen, setIsAddContentPanelOpen] = useState(false)

    return (
        <div className={styles.addContentPanel} data-testid='addContentPanel'>
            <AddContentButton setPanelOpen={setIsAddContentPanelOpen} isOpen={isAddContentPanelOpen} />
            {isAddContentPanelOpen && <AddContentForm pageType={pageType} isAdmin={isAdmin}/>}
        </div>
        )
}