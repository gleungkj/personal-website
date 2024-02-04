import { Dispatch, SetStateAction } from "react";

interface IAddContentButtonProps {
  setPanelOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export const AddContentButton = ({
  setPanelOpen,
  isOpen,
}: IAddContentButtonProps) => {
  const handleClick = () => {
    setPanelOpen(!isOpen);
  };

  return <button onClick={handleClick}>Add Contents</button>;
};
