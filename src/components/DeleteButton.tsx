import { IWebsiteContents } from "@/constants/websiteContents";
import { deleteEntryById } from "@/services/deleteById";
import { useRouter } from "next/navigation";
import {Dispatch, SetStateAction} from 'react'
import styles from '@/components/Button.module.css'

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

  return (
    <button id={`deleteButton-${id}`} className={styles.button} onClick={handleClick} disabled={!isAdmin} onMouseOver={() => setIsWarned(!isAdmin)} onMouseLeave={() => setIsWarned(false)}>Delete Contents  
    </button>
    )
};
