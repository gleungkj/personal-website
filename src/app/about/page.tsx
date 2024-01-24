import { prisma } from "@/../server";
import { PageTable } from "@/components/PageTable";
import { websiteContents } from "@/constants/websiteContents";

export default async function AboutPage() {
  const aboutData: websiteContents[] | null = await prisma.website.findMany({
    where: { page: "about" },
  });
  return aboutData !== null ? (
    <PageTable websiteContents={aboutData} />
  ) : (
    <div></div>
  );
}
