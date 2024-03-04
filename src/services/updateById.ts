import { IWebsiteContents } from "@/constants/websiteContents";

export const updateEntryById = async (
  contents: IWebsiteContents,
): Promise<void|Error> => {

    try {
      await fetch(`/api`, {
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
