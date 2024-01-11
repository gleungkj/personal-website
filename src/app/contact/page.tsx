import { prisma } from "@/../server"

export default async function ContactPage() {

    const contactData = await prisma.website.findUnique({
        where: {page: 'contact'}
    })
    return (
       contactData !== null ? 
        <div>
            {contactData.field}
            {contactData.content}
        </div>
        :
        <div></div>)
}