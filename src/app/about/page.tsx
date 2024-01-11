import { prisma } from "@/../server"

export default async function AboutPage() {

    const aboutData = await prisma.website.findUnique({
        where: {page: 'about'}
    })
    return (
        aboutData !== null ? 
    <div>
        {aboutData.field}
        {aboutData.content}
    </div>
    :
    <div></div>)
}