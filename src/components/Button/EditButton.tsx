import { Dispatch, SetStateAction } from "react";
import styles from '@/components/Button/Button.module.css'

interface IEditButtonProps {
  setPanelOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export const EditButton = ({ setPanelOpen, isOpen }: IEditButtonProps) => {
  const handleClick = () => {
    setPanelOpen(!isOpen);
  };

  return <button className={styles.button} onClick={handleClick}>Edit Contents</button>;
};
