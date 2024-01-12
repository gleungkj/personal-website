import { prisma } from "@/../server"
import { EditPanel } from "@/components/EditPanel"

export default async function AboutPage() {

    const aboutData = await prisma.website.findUnique({
        where: {page: 'about'}
    })
    return (
        aboutData !== null ? 
    <div>
        <div>
            {aboutData.field}
            {aboutData.content}
        </div>
        <EditPanel websiteContents={aboutData} />
    </div>
    :
    <div></div>)
}