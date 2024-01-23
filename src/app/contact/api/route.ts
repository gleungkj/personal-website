import { prisma } from "@/../server";
import { websiteContents } from "@/constants/websiteContents";

export async function PATCH (request: Request) {
    const updatedContents = await request.json() as websiteContents

    await prisma.website.update({
        where: {
            id: updatedContents.id
        }, data: {
            field: updatedContents.field,
            content: updatedContents.content
        }
    })

    return Response.json(updatedContents)
}