import { websiteContents, websitePageType } from "@/constants/websiteContents";
import { EditPanel } from "./EditPanel";
import { AddContentPanel } from "./AddContentPanel";

interface pageTableProps {
  websiteContents: websiteContents[];
  isAdmin: boolean
}

export const PageTable: React.FC<pageTableProps> = ({
  websiteContents, isAdmin
}): JSX.Element => {
  return (
    <div>
      {websiteContents.map((content) => (
        <div key={content.id}>
          <div>{content.field}</div>
          <div>{content.content}</div>
          <EditPanel websiteContents={content} isAdmin={isAdmin}/>
        </div>
      ))}
      <AddContentPanel pageType={websiteContents[0].page as unknown as websitePageType} isAdmin={isAdmin}/>
    </div>
  );
};
