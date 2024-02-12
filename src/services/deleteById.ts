import { IWebsiteContents } from "@/constants/websiteContents";

export const deleteEntryById = async (
  id: IWebsiteContents['id'],
): Promise<void> => {

  console.log(process.env.VERCEL_BRANCH_URL)
  const url = await process.env.VERCEL_URL === undefined ? 'http://localhost:3000' : process.env.VERCEL_URL
    try {
        await fetch(`${url}/api`, {
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