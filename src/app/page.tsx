"use client";
import { CldImage } from "next-cloudinary";
import { useState } from "react"; 
import UploadButton from "./gallery/UploadButton";

export default function Home() {
  const [imageId, setImageId] = useState(""); // image id to get the latest uploaded img

  return (
    <div className="flex justify-center items-center w-full">
      {/* Upload button */}
      <UploadButton />

      {/* Get image from cloudinary */}
      {imageId && (
        <CldImage
          width="300"
          height="400"
          src={imageId}
          sizes="100wv"
          alt="Description of an image"
        />
      )}
    </div>
  );
}
// 46.13