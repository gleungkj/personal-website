import { prisma } from "@/../server";
import { PageTable } from "@/components/PageTable";
import { websiteContents } from "@/constants/websiteContents";

export default async function WorksPage() {
  const worksData: websiteContents[] | null = await prisma.website.findMany({
    where: { page: "works" },
  });

  return worksData !== null ? (
    <PageTable websiteContents={worksData} />
  ) : (
    <div></div>
  );
}
