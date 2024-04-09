import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs'
import { del, put } from '@vercel/blob';
 
export async function POST(request: Request): Promise<NextResponse> {

  const { userId, orgRole } = await auth()


  console.warn(process.env.BLOB_READ_WRITE_TOKEN)

  if (request.body === null) {
    throw new Error
  }

  try {

    if (userId === null || orgRole !== 'org:admin') {
      throw new Error('Bad request')
    }

    console.warn('uploading file')

    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename') || '';

    console.warn(filename)
 
    const blob = await put(filename, request.body, {
      access: 'public',
    });

  console.warn('upload completed')
 
  return NextResponse.json(blob);

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