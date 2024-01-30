"use client";

import { websiteContents } from "@/constants/websiteContents";
import { useState } from "react";
import { EditButton } from "./EditButton";
import { EditForm } from "./EditForm";
import { DeleteButton } from "./DeleteButton";

interface editPanelProps {
  websiteContents: websiteContents;
  isAdmin: boolean
}

export const EditPanel = ({ websiteContents, isAdmin }: editPanelProps) => {
  const [isEditContentPanelOpen, setIsEditContentPanelOpen] = useState(false);

  return (
    <div>
      <EditButton
        setPanelOpen={setIsEditContentPanelOpen}
        isOpen={isEditContentPanelOpen}
      />
      <DeleteButton id={websiteContents.id} isAdmin={isAdmin}/>
      {isEditContentPanelOpen && <EditForm websiteContents={websiteContents} isAdmin={isAdmin}/>}
    </div>
  );
};
