import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs'
import { del } from '@vercel/blob';
 
export async function POST(request: Request): Promise<NextResponse> {

  const body = (await request.json()) as HandleUploadBody;

  const { userId, orgRole } = await auth()

  console.log(body.payload)

  console.log(process.env.BLOB_READ_WRITE_TOKEN)

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

    console.log(jsonResponse)

    console.log('upload complete')
   
    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }, // The webhook will retry 5 times waiting for a 200
    );
  }
}
 
export async function DELETE(request: Request): Promise<NextResponse> {

  const { searchParams } = new URL(request.url)

  const urlToDelete = searchParams.get('url') as string

  const { userId, orgRole } = await auth()

  const body = (await request.json()) as HandleUploadBody;

  console.log(body.payload)

  try {

    if (userId === null || orgRole !== 'org:admin') {
      throw new Error('Bad request')
    }

    await del(urlToDelete)

    console.log('upload complete')
   
    return new NextResponse();
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }, // The webhook will retry 5 times waiting for a 200
    );
  }
}