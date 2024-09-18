import { prisma } from '@/../server'
import { WorksTable } from '@/components/WorksTable'
import {
    ILoggedInUserDetails,
    IWebsiteContents,
    websitePageType,
} from '@/constants/websiteContents'
import { auth } from '@clerk/nextjs/server'
import { list } from '@vercel/blob'

export default async function WorksPage() {
    const authenticationDetails = await auth()

    const isAdmin = authenticationDetails.orgRole === 'org:admin'

    const loggedInUserDetails: ILoggedInUserDetails = {
        id:
            authenticationDetails.userId != null
                ? authenticationDetails.userId
                : '',
        isAdmin: isAdmin,
    }

    const worksData: IWebsiteContents[] | null = await prisma.website.findMany({
        where: { page: websitePageType.works },
    })

    const { blobs } = await list()

    return worksData !== null ? (
        <WorksTable
            websiteContents={worksData}
            loggedInUserDetails={loggedInUserDetails}
            blobList={blobs}
        />
    ) : (
        <div></div>
    )
}
