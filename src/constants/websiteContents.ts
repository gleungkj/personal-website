export interface IWebsiteContents {
  id: string;
  page: string;
  field: string;
  content: string;
}

export const addContentInitialValues = {
  field: "",
  content: ""
}

export enum websitePageType {
  "about",
  "works",
  "contact",
}
