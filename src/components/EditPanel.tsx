"use client";

import { websiteContents } from "@/constants/websiteContents";
import { useState } from "react";
import { EditButton } from "./EditButton";
import { EditForm } from "./EditForm";
import { DeleteButton } from "./DeleteButton";

interface editPanelProps {
  websiteContents: websiteContents;
}

export const EditPanel = ({ websiteContents }: editPanelProps) => {
  const [isEditContentPanelOpen, setIsEditContentPanelOpen] = useState(false);

  return (
    <div>
      <EditButton
        setPanelOpen={setIsEditContentPanelOpen}
        isOpen={isEditContentPanelOpen}
      />
      <DeleteButton id={websiteContents.id} />
      {isEditContentPanelOpen && <EditForm websiteContents={websiteContents} />}
    </div>
  );
};
