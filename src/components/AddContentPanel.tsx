"use client"

import { websitePageType } from "@/constants/websiteContents";
import { useState } from "react";
import { AddContentButton } from "./AddContentButton";
import { AddContentForm } from "./AddContentForm";

interface addContentPanelProps {
    pageType: websitePageType
}

export const AddContentPanel = ({pageType}: addContentPanelProps) => {

    const [isAddContentPanelOpen, setIsAddContentPanelOpen] = useState(false)

    return (
        <div>
            <AddContentButton setPanelOpen={setIsAddContentPanelOpen} isOpen={isAddContentPanelOpen} />
            {isAddContentPanelOpen && <AddContentForm pageType={pageType}/>}
        </div>
        )
}