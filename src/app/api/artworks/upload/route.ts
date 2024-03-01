import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs'
 
export async function POST(request: Request): Promise<NextResponse> {

  const body = (await request.json()) as HandleUploadBody;

  const { userId, orgRole } = await auth()

  console.log(body.payload)

  try {

    if (userId === null || orgRole !== 'org:admin') {
      throw new Error('Bad request')
    }

    console.log('uploading file')

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
        
        console.log('blob upload completed', blob, tokenPayload);
        try {
          
        } catch (error) {
          throw new Error('Could not complete upload');
        }
      },
    });

    console.log('upload complete')
   
    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }, // The webhook will retry 5 times waiting for a 200
    );
  }
}