export interface IWebsiteContents {
  id: string;
  page: websitePageType | string;
  field: string;
  content: string;
}

export interface ILoggedInUserDetails {
  id: string;
  isAdmin: boolean
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
