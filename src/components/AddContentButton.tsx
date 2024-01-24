import { websitePageType } from "@/constants/websiteContents";
import { Dispatch, SetStateAction } from "react";

interface addContentButtonProps {
  setPanelOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export const AddContentButton = ({
  setPanelOpen,
  isOpen,
}: addContentButtonProps) => {
  const handleClick = () => {
    setPanelOpen(!isOpen);
  };

  return <button onClick={handleClick}>Add Contents</button>;
};
