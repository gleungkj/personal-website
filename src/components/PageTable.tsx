import { IWebsiteContents, websitePageType } from "@/constants/websiteContents";
import { EditPanel } from "./EditPanel";
import { AddContentPanel } from "./AddContentPanel";
import styles from './PageTable.module.css'

interface IPageTableProps {
  websiteContents: IWebsiteContents[];
  isAdmin: boolean
}

export const PageTable: React.FC<IPageTableProps> = ({
  websiteContents, isAdmin
}): JSX.Element => {
  return (
    <div className={styles.table}>
      {websiteContents.map((content) => (
        <div key={content.id}>
          <div className={styles.field}>{content.field}</div>
          <div className={styles.content}>{content.content}</div>
          <EditPanel websiteContents={content} isAdmin={isAdmin}/>
        </div>
      ))}
      <AddContentPanel pageType={websiteContents[0].page as unknown as websitePageType} isAdmin={isAdmin}/>
    </div>
  );
};
