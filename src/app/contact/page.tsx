import { prisma } from '@/../server'
import { PageTable } from '@/components/PageTable'
import { IWebsiteContents, websitePageType } from '@/constants/websiteContents'
import { auth } from '@clerk/nextjs/server'

export default async function ContactPage() {
    const authenticationDetails = await auth()

    const isAdmin = authenticationDetails.orgRole === 'org:admin'

    const contactData: IWebsiteContents[] | null =
        await prisma.website.findMany({
            where: { page: websitePageType.contact },
        })
    return contactData !== null ? (
        <PageTable websiteContents={contactData} isAdmin={isAdmin} />
    ) : (
        <div></div>
    )
}
