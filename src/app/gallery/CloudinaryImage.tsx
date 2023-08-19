"use client";
import { startTransition, useTransition } from "react";

import { CldImage } from "next-cloudinary";

import { Heart } from "lucide-react";

import { setAsFavoriteAction } from "./actions";

import { SearchResults } from "./page";

const CloudinaryImage = (props: any & SearchResults) => {
  const [transition, startTransition] = useTransition();

  const isFavourited = props?.imageData.tags?.includes("favourite");

  return (
    <div className="relative">
      <CldImage {...props} />

      {isFavourited ? (
        <Heart
          className="absolute top-2 right-2 text-red-800 cursor-pointer"
          onClick={() => {
            startTransition(() => {
              setAsFavoriteAction(props.imageData.public_id, false, props.path);
            });
          }}
        />
      ) : (
        <Heart
          className="absolute top-2 right-2 hover:text-red-500 cursor-pointer"
          onClick={() => {
            startTransition(() => {
              setAsFavoriteAction(props.imageData.public_id, true, props.path);
            });
          }}
        />
      )}
    </div>
  );
};
export default CloudinaryImage;
// 1.03.55
