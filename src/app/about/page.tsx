import { prisma } from '@/../server'
import { IWebsiteContents, websitePageType } from '@/constants/websiteContents'
import { auth } from '@clerk/nextjs/server'
import dynamic from 'next/dynamic'

const PageTableComponent = dynamic(() =>
    import('../../components/PageTable').then((page) => page.PageTable)
)

export default async function AboutPage() {
    const authenticationDetails = await auth()

    const isAdmin = authenticationDetails.orgRole === 'org:admin'

    const aboutData: IWebsiteContents[] | null = await prisma.website.findMany({
        where: { page: websitePageType.about },
    })
    return aboutData !== null ? (
        <PageTableComponent websiteContents={aboutData} isAdmin={isAdmin} />
    ) : (
        <div></div>
    )
}
