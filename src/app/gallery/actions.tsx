"use server";
import cloudinary from "cloudinary";

const setAsFavouriteAction = async (publicId: string) => {
  await cloudinary.v2.uploader.add_tag("favourite", [publicId]);
};

export default setAsFavouriteAction;
