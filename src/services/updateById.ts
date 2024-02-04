import { IWebsiteContents } from "@/constants/websiteContents";

export const updateEntryById = async (
  contents: IWebsiteContents,
): Promise<void> => {
  try {
    await fetch(`http://localhost:3000/api`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contents),
    });
  } catch (error) {
    throw new Error(error as unknown as string);
  }
};
