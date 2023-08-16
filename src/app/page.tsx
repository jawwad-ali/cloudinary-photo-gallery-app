"use client";
import { CldUploadButton, CldImage } from "next-cloudinary";
import { useState } from "react";

type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  const [imageId, setImageId] = useState(""); // image id to get the latest uploaded img

  return (
    <div className="flex justify-center items-center w-full">
      {/* Upload button */}
      <CldUploadButton
        // @ts-ignore
        onUpload={(result: UploadResult) => {
          console.log(result);
          setImageId(result.info.public_id);
        }}
        uploadPreset="ewrqaie3"
      />

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
// 30.00