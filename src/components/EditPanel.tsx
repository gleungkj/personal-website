"use client";

import { websiteContents } from "@/constants/websiteContents";
import { Dispatch, SetStateAction, useState } from "react";
import { EditButton } from "./EditButton";

interface editPanelProps {
    websiteContents: websiteContents
}

export const EditPanel = ({websiteContents}: editPanelProps) => {

    const [isEditContentPanelOpen, setIsEditContentPanelOpen]=useState(false)


    return (
        <div>
            <EditButton setPanelOpen={setIsEditContentPanelOpen} isOpen={isEditContentPanelOpen} />
            {isEditContentPanelOpen && 
            <div>{websiteContents.page}:{websiteContents.content}</div>}
        </div>
        )
}