export interface websiteContents {
  id: string;
  page: websitePageType | string;
  field: string;
  content: string;
}

export const addContentInitialValues = {
  field: "1",
  content: "2"
}

export enum websitePageType {
  about = "about",
  works = "works",
  contact = "contact",
}
