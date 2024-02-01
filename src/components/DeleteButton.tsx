import { websiteContents } from "@/constants/websiteContents";
import { deleteEntryById } from "@/services/deleteById";
import { useRouter } from "next/navigation";

interface deleteButtonProps {
    id: websiteContents["id"],
    isAdmin: boolean    
}

export const DeleteButton = ({ id, isAdmin }: deleteButtonProps) => {

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

  return <button data-testid={`DeleteButton-${id}`} onClick={handleClick} disabled={!isAdmin}>Delete Contents</button>;
};
