/* eslint-disable @next/next/no-img-element */
import { ListBlobResultBlob } from "@vercel/blob"
import '@heroicons/react/24/solid'
import { XCircleIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import styles from "./ImagePanel.module.css"

interface IImagePanelProps {
    image: ListBlobResultBlob
    // isHovered: boolean
}

export const ImagePanel = ({image}: IImagePanelProps) => {

    return (
        <div className={styles.imagePanel}>
            <XCircleIcon className={styles.closeButton} height="2rem"/>
            <Link href={image.url}>
            <img src={image.url} alt='blobImage' width="100%"/>
            </Link>
        </div>
    )

}