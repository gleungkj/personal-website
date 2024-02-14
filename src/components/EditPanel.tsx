"use client";

import { IWebsiteContents } from "@/constants/websiteContents";
import { useState } from "react";
import { EditButton } from "./EditButton";
import { EditForm } from "./EditForm";
import { DeleteButton } from "./DeleteButton";

import styles from '@/components/EditPanel.module.css'
import { NonAdminWarningPanel } from "./NonAdminWarningPanel";

interface IEditPanelProps {
  websiteContents: IWebsiteContents;
  isAdmin: boolean
}

export const EditPanel = ({ websiteContents, isAdmin }: IEditPanelProps) => {
  const [isEditContentPanelOpen, setIsEditContentPanelOpen] = useState(false);
  const [isWarned, setIsWarned] = useState(false)

  return (
    <div>
    <div className={styles.editPanel}>
      <EditButton
        setPanelOpen={setIsEditContentPanelOpen}
        isOpen={isEditContentPanelOpen}
      />
      <DeleteButton id={websiteContents.id} isAdmin={isAdmin} setIsWarned={setIsWarned}/>
      {isEditContentPanelOpen && <EditForm websiteContents={websiteContents} isAdmin={isAdmin}/>}
    </div>
      {isWarned && <NonAdminWarningPanel />}
    </div>
  );
};
