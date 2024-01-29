import { prisma } from "@/../server";
import { PageTable } from "@/components/PageTable";
import { websiteContents } from "@/constants/websiteContents";
import { auth } from "@clerk/nextjs";
import { User, currentUser } from "@clerk/nextjs/server";

export default async function AboutPage() {

  const user: User|null = await currentUser()

  const authenticationDetails = await auth()

  const aboutData: websiteContents[] | null = await prisma.website.findMany({
    where: { page: "about" },
  });
  return aboutData !== null ? (
    <PageTable websiteContents={aboutData} />
  ) : (
    <div></div>
  );
}
