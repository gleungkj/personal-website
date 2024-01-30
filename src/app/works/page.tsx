import { prisma } from "@/../server";
import { PageTable } from "@/components/PageTable";
import { websiteContents } from "@/constants/websiteContents";
import { auth } from "@clerk/nextjs";

export default async function WorksPage() {

  const authenticationDetails = await auth()

  const isAdmin = authenticationDetails.orgRole === 'org:admin'

  const worksData: websiteContents[] | null = await prisma.website.findMany({
    where: { page: "works" },
  });

  return worksData !== null ? (
    <PageTable websiteContents={worksData} isAdmin={isAdmin}/>
  ) : (
    <div></div>
  );
}
