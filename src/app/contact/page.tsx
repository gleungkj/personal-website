import { prisma } from "@/../server";
import { PageTable } from "@/components/PageTable";
import { websiteContents } from "@/constants/websiteContents";
import { auth } from "@clerk/nextjs";

export default async function ContactPage() {

  const authenticationDetails = await auth()

  const isAdmin = authenticationDetails.orgRole === 'org:admin'

  const contactData: websiteContents[] | null = await prisma.website.findMany({
    where: { page: "contact" },
  });
  return contactData !== null ? (
    <PageTable websiteContents={contactData} isAdmin={isAdmin}/>
  ) : (
    <div></div>
  );
}
