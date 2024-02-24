import { prisma } from "@/../server";
import { IWebsiteContents } from "@/constants/websiteContents";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {

  const { userId, orgRole } = await auth()

  if (userId === null || orgRole !== 'org:admin') {
    throw new Error('Bad request')
  }

  const updatedContents = (await request.json()) as IWebsiteContents;

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

  const { userId, orgRole } = await auth()

  if (userId === null || orgRole !== 'org:admin') {
    throw new Error('Bad request')
  }

  const newContents = (await request.json()) as IWebsiteContents;

  await prisma.website.create({
    data: {
      page: newContents.page as string,
      field: newContents.field,
      content: newContents.content,
    },
  });

  return Response.json(newContents);
}

export async function DELETE(request: Request) {

  const { userId, orgRole } = await auth()

  if (userId === null || orgRole !== 'org:admin') {
    throw new Error('Bad request')
  }
  
  const deletedContents = (await request.json()) as IWebsiteContents['id'];

  await prisma.website.delete({
    where: {
      id: deletedContents,
    }
  });

  return NextResponse.json({
    message: `entry with id:"${deletedContents}" deleted`
  }, {
    status: 200,
  });
}