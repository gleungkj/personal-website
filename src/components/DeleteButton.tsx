import { websiteContents } from "@/constants/websiteContents";
import { deleteEntryById } from "@/services/deleteById";
import { Dispatch, SetStateAction } from "react";

interface deleteButtonProps {
    id: websiteContents["id"]    
}

export const DeleteButton = ({ id }: deleteButtonProps) => {
  const handleClick = async (): Promise<void|Error> => {
    try {
        deleteEntryById(id)
    } catch (error) {
        return new Error()
    }
  };

  return <button onClick={handleClick}>Delete Contents</button>;
};
