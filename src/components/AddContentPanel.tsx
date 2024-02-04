"use client"

import { websitePageType } from "@/constants/websiteContents";
import { useState } from "react";
import { AddContentButton } from "./AddContentButton";
import { AddContentForm } from "./AddContentForm";

interface IAddContentPanelProps {
    pageType: websitePageType,
    isAdmin: boolean
}

export const AddContentPanel = ({pageType, isAdmin}: IAddContentPanelProps) => {

    const [isAddContentPanelOpen, setIsAddContentPanelOpen] = useState(false)

    return (
        <div>
            <AddContentButton setPanelOpen={setIsAddContentPanelOpen} isOpen={isAddContentPanelOpen} />
            {isAddContentPanelOpen && <AddContentForm pageType={pageType} isAdmin={isAdmin}/>}
        </div>
        )
}