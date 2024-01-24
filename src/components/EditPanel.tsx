"use client";

import { websiteContents } from "@/constants/websiteContents";
import { useState } from "react";
import { EditButton } from "./EditButton";
import { EditForm } from "./EditForm";

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
      {isEditContentPanelOpen && <EditForm websiteContents={websiteContents} />}
    </div>
  );
};
