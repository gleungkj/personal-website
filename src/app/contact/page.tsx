import { prisma } from "@/../server";
import { PageTable } from "@/components/PageTable";
import { websiteContents } from "@/constants/websiteContents";

export default async function ContactPage() {
  const contactData: websiteContents[] | null = await prisma.website.findMany({
    where: { page: "contact" },
  });
  return contactData !== null ? (
    <PageTable websiteContents={contactData} />
  ) : (
    <div></div>
  );
}
