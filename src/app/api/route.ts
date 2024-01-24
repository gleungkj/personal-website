import { prisma } from "@/../server";
import { websiteContents, websitePageType } from "@/constants/websiteContents";

export async function PATCH(request: Request) {
  const updatedContents = (await request.json()) as websiteContents;

  await prisma.website.update({
    where: {
      id: updatedContents.id,
    },
    data: {
      field: updatedContents.field,
      content: updatedContents.content,
    },
  });

  return Response.json(updatedContents);
}

export async function POST(request: Request) {
  const newContents = (await request.json()) as websiteContents;

  await prisma.website.create({
    data: {
      page: newContents.page,
      field: newContents.field,
      content: newContents.content,
    },
  });

  return Response.json(newContents);
}
