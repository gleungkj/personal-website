"use client"

import { websitePageType } from "@/constants/websiteContents";
import { useState } from "react";
import { AddContentButton } from "../Button/AddContentButton";
import { AddContentForm } from "../Form/AddContentForm";
import styles from "@/components/Panel/AddContentPanel.module.css"

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