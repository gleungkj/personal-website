import { websiteContents, websitePageType } from "@/constants/websiteContents";
import { EditPanel } from "./EditPanel";
import { AddContentPanel } from "./AddContentPanel";

interface pageTableProps {
  websiteContents: websiteContents[];
}

export const PageTable: React.FC<pageTableProps> = ({
  websiteContents,
}): JSX.Element => {
  return (
    <div>
      {websiteContents.map((content) => (
        <div key={content.id}>
          <div>{content.field}</div>
          <div>{content.content}</div>
          <EditPanel websiteContents={content} />
        </div>
      ))}
      <AddContentPanel pageType={websiteContents[0].page as unknown as websitePageType}/>
    </div>
  );
};
