import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs'
import { del } from '@vercel/blob';
 
export async function POST(request: Request): Promise<NextResponse> {

  const body = (await request.json()) as HandleUploadBody;

  const { userId, orgRole } = await auth()

  console.warn(body.payload)

  console.warn(process.env.BLOB_READ_WRITE_TOKEN)

  try {

    if (userId === null || orgRole !== 'org:admin') {
      throw new Error('Bad request')
    }

    console.warn('uploading file')

    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (
        clientPayload: string | null
      ) => {
        
        if (clientPayload === null) {
            throw new Error('Unable to upload file');
        } 
        return {
          allowedContentTypes: ['image/jpeg', 'image/png', 'image/gif'],
          tokenPayload: clientPayload,
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {    
        
        console.warn('blob upload completed', blob, tokenPayload);
        try {
          
        } catch (error) {
          throw new Error('Could not complete upload');
        }
      },
    });

    console.warn(jsonResponse)

    console.warn('upload complete')
   
    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }, // The webhook will retry 5 times waiting for a 200
    );
  }
}
 
export async function DELETE(request: Request): Promise<NextResponse> {

  const { userId, orgRole } = await auth()

  const imageURL = (await request.json()) as string

  console.warn('getting body')
  console.warn(imageURL)

  try {

    if (userId === null || orgRole !== 'org:admin') {
      throw new Error('Bad request')
    }

    await del(imageURL)

    console.warn(`image deleted, original URL: ${imageURL}`)
   
    return new NextResponse();
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }, // The webhook will retry 5 times waiting for a 200
    );
  }
}