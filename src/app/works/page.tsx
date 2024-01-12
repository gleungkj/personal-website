import { prisma } from "@/../server"
import { EditButton } from "@/components/EditButton"
import { EditPanel } from "@/components/EditPanel"
import { websiteContents } from "@/constants/websiteContents"
import { useState } from "react"

export default async function WorksPage() {

    const worksData: websiteContents|null = await prisma.website.findUnique({
        where: {page: 'works'}
    })
    return (
        worksData !== null ? 
        <div>            
            <div>
                {worksData.field}
                {worksData.content}
            </div>
            <EditPanel websiteContents={worksData} />
        </div>
    :
    <div></div>)
}