/* eslint-disable @next/next/no-img-element */
import { ListBlobResultBlob } from "@vercel/blob"
import { XCircleIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import styles from "./ImagePanel.module.css"
import { useState } from "react"
import { deleteImageByURL } from "@/services/deleteImageByURL"
import { useRouter } from "next/navigation"
import { ILoggedInUserDetails } from "@/constants/websiteContents"

interface IImagePanelProps {
    image: ListBlobResultBlob
    loggedInUserDetails: ILoggedInUserDetails
}

export const ImagePanel = ({image, loggedInUserDetails}: IImagePanelProps) => {

    const router = useRouter()

    const [isHovered, setIsHovered] = useState(false)

    const handleClick = async (): Promise<void|Error> => {

        const url = image.url

        if (!loggedInUserDetails.isAdmin) return
        
        try {
            await deleteImageByURL(url)
            router.refresh()
        } catch (error) {
            return new Error()
        }
    }

    return (
        <div className={styles.imagePanel}>
            {isHovered && loggedInUserDetails.isAdmin && 
            <button  className={styles.closeButton} onClick={handleClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <XCircleIcon height="2rem" />         
            </button>}   
            <Link href={image.url} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
            <img src={image.url} alt='blobImage' width="100%"/>
            </Link>
        </div>
    )

}