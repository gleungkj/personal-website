import { IWebsiteContents } from "@/constants/websiteContents";

export const updateEntryById = async (
  contents: IWebsiteContents,
): Promise<void> => {

  console.log(process.env.VERCEL_BRANCH_URL)
  const url = await process.env.VERCEL_URL === undefined ? 'http://localhost:3000' : process.env.VERCEL_URL
    try {
        await fetch(`${url}/api`, {
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
