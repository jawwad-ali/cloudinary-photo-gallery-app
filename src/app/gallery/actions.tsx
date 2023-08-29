// "use server";
// import { revalidateTag } from "next/cache";

// import { v2 as cloudinary } from "cloudinary"

// cloudinary.config({
//   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
//   api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
// }); 

// export async function setAsFavoriteAction(
//   publicId: string,
//   isFavourite: boolean 
//   // path: string
// ) {
//   if (isFavourite) {
//     await cloudinary.uploader.add_tag("favourite", [publicId]);
//   } else {
//     await cloudinary.uploader.remove_tag("favourite", [publicId]);
//   }
//   await new Promise((resolve) => setTimeout(resolve, 1500));
//   // revalidatePath(path);
//   revalidateTag("favourite");
// }
