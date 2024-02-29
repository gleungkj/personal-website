'use client'

import { type PutBlobResult } from '@vercel/blob';
import { upload } from '@vercel/blob/client'
import styles from '@/components/Button/Button.module.css'
import { useRef, useState } from "react";
import { ILoggedInUserDetails, IWebsiteContents } from '@/constants/websiteContents';

interface IAddWorksFormProps {
  websiteContents: IWebsiteContents,
  loggedInUserDetails: ILoggedInUserDetails
}

export const AddWorksForm = ({websiteContents,loggedInUserDetails}: IAddWorksFormProps) => {

    const inputFileRef = useRef<HTMLInputElement>(null)
    const [blob, setBlob] = useState<PutBlobResult | null>(null)

    const handleSubmit = async (
    ): Promise<void | Error> => {
      if (!loggedInUserDetails.isAdmin) return
        try {
          if (!inputFileRef.current?.files) {
            throw new Error('No file selected');
          }
 
          const file = inputFileRef.current.files[0];
         
          const newBlob: PutBlobResult = await upload(file.name, file, {
            access: 'public',
            handleUploadUrl: '/api/artworks/upload',
            clientPayload: JSON.stringify({
              page: websiteContents.page,
              field: websiteContents.field
            })
          });

          await setBlob(newBlob);

        } catch (error) {
            return new Error()
        }
    }

    return (
      <div>
        <form onSubmit={handleSubmit} >
          <input name="file" ref={inputFileRef} type="file" required />
        <button className={styles.button} type="submit" disabled={!loggedInUserDetails.isAdmin}>Add Files</button>
        </form>
        {blob && (
          <div>
            Blob url: <a href={blob.url}>{blob.url}</a>
          </div>
        )}
      </div>
    )
}