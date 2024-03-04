/* eslint-disable @next/next/no-img-element */
import { ListBlobResultBlob } from "@vercel/blob"
import '@heroicons/react/24/solid'
import { XCircleIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import styles from "./ImagePanel.module.css"
import { useState } from "react"
import { deleteImageByURL } from "@/services/deleteImageByURL"
import { useRouter } from "next/navigation"

interface IImagePanelProps {
    image: ListBlobResultBlob
}

export const ImagePanel = ({image}: IImagePanelProps) => {

    const router = useRouter()

    const [isHovered, setIsHovered] = useState(false)

    const handleClick = async (): Promise<void|Error> => {

        const url = image.url
        
        try {
            await deleteImageByURL(url)
            router.refresh()
        } catch (error) {
            return new Error()
        }
    }

    return (
        <div className={styles.imagePanel}>
            {isHovered && 
            <button  className={styles.closeButton} onClick={handleClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <XCircleIcon height="2rem" />         
            </button>}   
            <Link href={image.url} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
            <img src={image.url} alt='blobImage' width="100%"/>
            </Link>
        </div>
    )

}