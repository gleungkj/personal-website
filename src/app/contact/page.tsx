import { prisma } from "@/../server"
import { EditPanel } from "@/components/EditPanel"

export default async function ContactPage() {

    const contactData = await prisma.website.findUnique({
        where: {page: 'contact'}
    })
    return (
       contactData !== null ? 
       <div>
            <div>
                {contactData.field}
                {contactData.content}
            </div>
            <EditPanel websiteContents={contactData} />
       </div>
        :
        <div></div>)
}