"use client";
import { useTransition } from "react";

import { CldImage } from "next-cloudinary";

import { Heart } from "lucide-react";

import setAsFavouriteAction from "./actions";

const CloudinaryImage = (props: any & { publicId: string }) => {
  const [transition, setTransition] = useTransition();

  return (
    <div className="relative">
      <CldImage {...props} />
      <Heart
        className="absolute top-2 right-2"
        onClick={() => setAsFavouriteAction(props.publicId)}
      />
    </div>
  );
};

export default CloudinaryImage;
