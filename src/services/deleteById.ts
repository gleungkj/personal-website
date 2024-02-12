import { IWebsiteContents } from "@/constants/websiteContents";

export const deleteEntryById = async (
  id: IWebsiteContents['id'],
): Promise<void> => {

    try {
      await fetch(`/api`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    });
  } catch (error) {
    throw new Error(error as unknown as string);
  }
};