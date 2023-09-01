"use client";
import { useTransition, useState } from "react";

import { CldImage } from "next-cloudinary";

import { Heart, Loader2 } from "lucide-react";

import { SearchResults } from "./page";

import { ImageMenu } from "components/ImageMenu";

import { setAsFavoriteAction } from "components/actions";

const CloudinaryImage = (props: any & SearchResults) => {
  const [_, startTransition] = useTransition();

  const [isFavourited, setIsFavourited] = useState(
    props?.imageData?.tags?.includes("favourite") 
  );

  const [removing, setRemoving] = useState<boolean>(false);
    
  const RemoveImage = () => {
    setIsFavourited(false);
    setRemoving(true); 
    startTransition(() => {
      setAsFavoriteAction(props.imageData?.public_id, false)
        .then(() => {
          setTimeout(() => {
            setRemoving(false);
          }, 1000); // Delay setting removing back to false for 1 second
        }) 
        .catch((error) => {
          console.error("Error removing favorite:", error);
          setRemoving(false);
        });
    });
  };

  if (removing)
    return (
      <div>
        <Loader2 className="text-white loader" />
      </div>
    );
  return (
    <div className="relative">
      <CldImage {...props} />

      {isFavourited ? (
        <Heart
          className="absolute top-3 left-2 text-red-800 cursor-pointer"
          onClick={RemoveImage}
        />
      ) : (
        <Heart
          className="absolute top-3 left-2 hover:text-red-500 cursor-pointer"
          onClick={() => {
            setIsFavourited(true);
            startTransition(() => { 
              setAsFavoriteAction(props.imageData?.public_id, true); 
            });
          }}
        />
      )}

      {/* Humburger icon on the image to add image to the albums */}
      <ImageMenu image={props?.imageData} /> 
    </div>
  );
};
export default CloudinaryImage;
