import { websitePageType } from "@/constants/websiteContents"

export const addContentByPageType = async (contents: {
    page: websitePageType,
    field: string,
    content: string
}): Promise<void> => {
    try {
        await fetch(`http://localhost:3000/api`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contents),
        });
      } catch (error) {
        throw new Error(error as unknown as string);
      }
}