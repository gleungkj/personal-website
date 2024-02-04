import { Dispatch, SetStateAction } from "react";

interface IEditButtonProps {
  setPanelOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export const EditButton = ({ setPanelOpen, isOpen }: IEditButtonProps) => {
  const handleClick = () => {
    setPanelOpen(!isOpen);
  };

  return <button onClick={handleClick}>Edit Contents</button>;
};
