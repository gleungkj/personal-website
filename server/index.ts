import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();
 
export default async function prismaExample() {
 
  const websiteData = await prisma.website.findMany();

  console.log(websiteData)
}

prismaExample()