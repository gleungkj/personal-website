import { ILoggedInUserDetails, IWebsiteContents } from "@/constants/websiteContents";
import styles from './PageTable.module.css'
import { AddWorksPanel } from "./AddWorksPanel";

interface IWorksTableProps {
  websiteContents: IWebsiteContents[];
  loggedInUserDetails: ILoggedInUserDetails
}

export const WorksTable: React.FC<IWorksTableProps> = ({
  websiteContents, loggedInUserDetails
}): JSX.Element => {
  return (
    <div className={styles.table}>
      {websiteContents.map((content) => (
        <div key={content.id}>
          <div className={styles.field}>{content.field}</div>
          <div className={styles.content}>{content.content}</div>
          <AddWorksPanel loggedInUserDetails={loggedInUserDetails} websiteContents={content}/>
        </div>
      ))}
      
    </div>
  );
};
