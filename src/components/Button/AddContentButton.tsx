import { Dispatch, SetStateAction } from "react";
import styles from '@/components/Button/Button.module.css'

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

  return <button className={styles.button} id='addContentButton' onClick={handleClick}>Add Contents</button>;
};
