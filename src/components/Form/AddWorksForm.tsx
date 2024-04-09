'use client'

import { type PutBlobResult } from '@vercel/blob';
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

          const response = await fetch(
            `/api/artworks/upload?filename=${file.name}`,
            {
              method: 'POST',
              body: file,
            },
          );
 
          const newBlob = (await response.json()) as PutBlobResult;
 
          setBlob(newBlob);

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