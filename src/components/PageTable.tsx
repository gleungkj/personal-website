import { IWebsiteContents, websitePageType } from "@/constants/websiteContents";
import { EditPanel } from "./EditPanel";
import { AddContentPanel } from "./AddContentPanel";

interface IPageTableProps {
  websiteContents: IWebsiteContents[];
  isAdmin: boolean
}

export const PageTable: React.FC<IPageTableProps> = ({
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
