"use client";

import { IWebsiteContents } from "@/constants/websiteContents";
import { useState } from "react";
import { EditButton } from "./EditButton";
import { EditForm } from "./EditForm";
import { DeleteButton } from "./DeleteButton";

import styles from '@/components/EditPanel.module.css'

interface IEditPanelProps {
  websiteContents: IWebsiteContents;
  isAdmin: boolean
}

export const EditPanel = ({ websiteContents, isAdmin }: IEditPanelProps) => {
  const [isEditContentPanelOpen, setIsEditContentPanelOpen] = useState(false);

  return (
    <div className={styles.editPanel}>
      <EditButton
        setPanelOpen={setIsEditContentPanelOpen}
        isOpen={isEditContentPanelOpen}
      />
      <DeleteButton id={websiteContents.id} isAdmin={isAdmin}/>
      {isEditContentPanelOpen && <EditForm websiteContents={websiteContents} isAdmin={isAdmin}/>}
    </div>
  );
};
