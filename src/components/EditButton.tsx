import { websiteContents } from "@/constants/websiteContents";
import { Dispatch, SetStateAction } from "react";

interface editButtonProps {
    setPanelOpen: Dispatch<SetStateAction<boolean>>
    isOpen: boolean
}

export const EditButton = ({setPanelOpen, isOpen}: editButtonProps) => {

    const handleClick = () => {
        setPanelOpen(!isOpen)
    }

    return <button onClick={handleClick}>Edit Contents</button>
}