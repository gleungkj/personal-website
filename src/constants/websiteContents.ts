export interface websiteContents {
  id: string;
  page: websitePageType | string;
  field: string;
  content: string;
}

export enum websitePageType {
  about = "about",
  works = "works",
  contact = "contact",
}
