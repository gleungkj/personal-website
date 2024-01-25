import { websiteContents } from "@/constants/websiteContents";

export const deleteEntryById = async (
  id: websiteContents['id'],
): Promise<void> => {
  try {
    await fetch(`http://localhost:3000/api`, {
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