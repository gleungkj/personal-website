import { ListBlobResultBlob } from "@vercel/blob";

export const deleteImageByURL = async (url: ListBlobResultBlob['url']): Promise<void|Error> => {

    try {
        await fetch('api/artworks/upload', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(url)
        }) 
    } catch (error) {
        throw new Error(error as unknown as string);
      }
}