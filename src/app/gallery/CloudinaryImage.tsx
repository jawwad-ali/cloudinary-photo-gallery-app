'use client'
import { CldImage } from "next-cloudinary";

const CloudinaryImage = (props: any) => {
  return <CldImage {...props} />;
};

export default CloudinaryImage;
