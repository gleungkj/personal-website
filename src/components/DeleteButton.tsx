import { IWebsiteContents } from "@/constants/websiteContents";
import { deleteEntryById } from "@/services/deleteById";
import { useRouter } from "next/navigation";
import { NonAdminWarningPanel } from "./NonAdminWarningPanel";
import {useState} from 'react'

interface IDeleteButtonProps {
    id: IWebsiteContents["id"],
    isAdmin: boolean    
}

export const DeleteButton = ({ id, isAdmin }: IDeleteButtonProps) => {

  const [isWarned, setIsWarned] = useState(false)
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

  const handleMouseOver = (id: string): void => {
    if (id === id) {
      setIsWarned(!isAdmin)
    }
  }

  return (
  <div>
    <button id={`deleteButton-${id}`} onClick={handleClick} disabled={!isAdmin} onMouseOver={() => handleMouseOver(id)} onMouseLeave={() => setIsWarned(false)}>Delete Contents  
    </button>
    {isWarned && <NonAdminWarningPanel />}
  </div>)
};
