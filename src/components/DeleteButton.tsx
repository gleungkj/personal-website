import { websiteContents } from "@/constants/websiteContents";
import { deleteEntryById } from "@/services/deleteById";
import { Dispatch, SetStateAction } from "react";

interface deleteButtonProps {
    id: websiteContents["id"],
    isAdmin: boolean    
}

export const DeleteButton = ({ id, isAdmin }: deleteButtonProps) => {
  const handleClick = async (): Promise<void|Error> => {
    if (!isAdmin) return
    try {
        deleteEntryById(id)
    } catch (error) {
        return new Error()
    }
  };

  return <button onClick={handleClick} disabled={!isAdmin}>Delete Contents</button>;
};
