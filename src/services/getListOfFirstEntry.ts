import { IWebsiteContents, websitePageType } from "@/constants/websiteContents"
import { prisma } from "../../server"

export const getListOfFirstEntry = async (): Promise<IWebsiteContents[]|null> => {
    const firstEntryList: IWebsiteContents[] = []

    const websitePageTypeList = [websitePageType.about, websitePageType.works, websitePageType.contact]

    for (const pageType of websitePageTypeList) {
        const pageFirstEntry: IWebsiteContents | null = await prisma.website.findFirst({ where: { page: pageType }})

        if (pageFirstEntry !== null) {
            firstEntryList.push(pageFirstEntry)
        }
    }

    return await firstEntryList
}