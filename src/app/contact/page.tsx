import { prisma } from "@/../server";
import { PageTable } from "@/components/PageTable";
import { IWebsiteContents } from "@/constants/websiteContents";
import { auth } from "@clerk/nextjs";

export default async function ContactPage() {

  const authenticationDetails = await auth()

  const isAdmin = authenticationDetails.orgRole === 'org:admin'

  const contactData: IWebsiteContents[] | null = await prisma.website.findMany({
    where: { page: "contact" },
  });
  return contactData !== null ? (
    <PageTable websiteContents={contactData} isAdmin={isAdmin}/>
  ) : (
    <div></div>
  );
}
