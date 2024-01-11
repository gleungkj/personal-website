import { prisma } from "@/../server"

export default async function WorksPage() {
    const worksData = await prisma.website.findUnique({
        where: {page: 'works'}
    })
    return (
        worksData !== null ? 
    <div>
        {worksData.field}
        {worksData.content}
    </div>
    :
    <div></div>)
}