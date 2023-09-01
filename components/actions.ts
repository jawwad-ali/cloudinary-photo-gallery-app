'use server'

import { SearchResults } from '@/app/gallery/page'

import { revalidateTag } from "next/cache";

import { v2 as cloudinary } from "cloudinary"

// Configuring Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

// Favouriting the image
export async function setAsFavoriteAction(
  publicId: string,
  isFavourite: boolean
) { 
  if (isFavourite) {
    await cloudinary.uploader.add_tag("favourite", [publicId]);
  } else {
    await cloudinary.uploader.remove_tag("favourite", [publicId]);
  }
  await new Promise((resolve) => setTimeout(resolve, 1500));
  revalidateTag("favourite");
}

// Adding Picture to the Album
export async function addImageToAlbum(image: SearchResults, albums: string) {
  await cloudinary.api.create_folder(albums)

  let parts = image.public_id.split('/')
  if (parts.length > 1) {
    parts = parts.slice(1)
  }
  const publicId = parts.join('/')
  await cloudinary.uploader.rename(image.public_id, `${albums}/${publicId}`)
  revalidateTag("albums");
}
