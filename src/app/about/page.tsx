import { prisma } from "@/../server";
import { PageTable } from "@/components/PageTable";
import { IWebsiteContents, websitePageType } from "@/constants/websiteContents";
import { auth } from "@clerk/nextjs";

export default async function AboutPage() {

  const authenticationDetails = await auth()

  const isAdmin = authenticationDetails.orgRole === 'org:admin'

  const aboutData: IWebsiteContents[] | null = await prisma.website.findMany({
    where: { page: websitePageType.about },
  });
  return aboutData !== null ? (
    <PageTable websiteContents={aboutData} isAdmin={isAdmin}/>
  ) : (
    <div></div>
  );
}
