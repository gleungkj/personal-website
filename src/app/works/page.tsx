import { prisma } from "@/../server"
import { EditButton } from "@/components/EditButton"
import { EditPanel } from "@/components/EditPanel"
import { PageTable } from "@/components/PageTable"
import { websiteContents } from "@/constants/websiteContents"
import { useState } from "react"

export default async function WorksPage() {

    const worksData: websiteContents[]|null = await prisma.website.findMany({
        where: {page: 'works'}
    })

    return (
        worksData !== null ? 
        <PageTable websiteContents={worksData} />        
    :
    <div></div>)
}