import { IWebsiteContents } from "@/constants/websiteContents";
import { deleteEntryById } from "@/services/deleteById";
import { useRouter } from "next/navigation";
import { NonAdminWarningPanel } from "./NonAdminWarningPanel";
import {Dispatch, SetStateAction, useState} from 'react'

interface IDeleteButtonProps {
    id: IWebsiteContents["id"],
    isAdmin: boolean
    setIsWarned: Dispatch<SetStateAction<boolean>>    
}

export const DeleteButton = ({ id, isAdmin, setIsWarned }: IDeleteButtonProps) => {

  const router = useRouter()

  const handleClick = async (): Promise<void|Error> => {
    if (!isAdmin) return
    
    try {
        await deleteEntryById(id)
        router.refresh()
    } catch (error) {
        return new Error()
    }
  };

  // const handleMouseOver = (id: string): void => {
  //     setIsWarned(!isAdmin)    
  // }

  return (
    <button id={`deleteButton-${id}`} onClick={handleClick} disabled={!isAdmin} onMouseOver={() => setIsWarned(!isAdmin)} onMouseLeave={() => setIsWarned(false)}>Delete Contents  
    </button>
    )
};
