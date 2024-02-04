import { IWebsiteContents } from "@/constants/websiteContents";
import { deleteEntryById } from "@/services/deleteById";
import { useRouter } from "next/navigation";

interface IDeleteButtonProps {
    id: IWebsiteContents["id"],
    isAdmin: boolean    
}

export const DeleteButton = ({ id, isAdmin }: IDeleteButtonProps) => {

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

  return <button onClick={handleClick} disabled={!isAdmin}>Delete Contents</button>;
};
