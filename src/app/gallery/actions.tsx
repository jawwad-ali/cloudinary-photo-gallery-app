"use server";
import cloudinary from "cloudinary";
import { revalidateTag } from "next/cache";

export async function setAsFavoriteAction(
  publicId: string,
  isFavourite: boolean
  // path: string
) {
  if (isFavourite) {
    await cloudinary.v2.uploader.add_tag("favourite", [publicId]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favourite", [publicId]);
  }
  await new Promise((resolve) => setTimeout(resolve, 1500));
  // revalidatePath(path);
  revalidateTag("favourite");
}
