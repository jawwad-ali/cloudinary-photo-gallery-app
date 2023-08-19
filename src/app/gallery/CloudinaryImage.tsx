"use client";
import { useTransition, useState } from "react";

import { CldImage } from "next-cloudinary";

import { Heart, Loader, Loader2 } from "lucide-react";

import { setAsFavoriteAction } from "./actions";

import { SearchResults } from "./page";

const CloudinaryImage = (props: any & SearchResults) => {
  const [transition, startTransition] = useTransition();

  const [isFavourited, setIsFavourited] = useState(
    props?.imageData.tags?.includes("favourite")
  );

  const [removing, setRemoving] = useState<boolean>(false);

  const RemoveImage = () => {
    setIsFavourited(false);
    setRemoving(true);
    startTransition(() => {
      setAsFavoriteAction(props.imageData.public_id, false)
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
          className="absolute top-2 right-2 text-red-800 cursor-pointer"
          onClick={RemoveImage}
        />
      ) : (
        <Heart
          className="absolute top-2 right-2 hover:text-red-500 cursor-pointer"
          onClick={() => {
            setIsFavourited(true);
            startTransition(() => {
              setAsFavoriteAction(props.imageData.public_id, true);
            });
          }}
        />
      )}
    </div>
  );
};
export default CloudinaryImage;
//1.26.56