import { websiteContents } from "@/constants/websiteContents";

export const updateEntryById = async (
  contents: websiteContents,
): Promise<void> => {
  try {
    await fetch(`http://localhost:3000/${contents.page}/api`, {
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
