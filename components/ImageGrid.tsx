"use client";
import CloudinaryImage from "@/app/gallery/CloudinaryImage";
import { SearchResults } from "@/app/gallery/page";
import { useEffect, useState } from "react";

type NumberOfColumns = 4 | 2;

const ImageGrid = ({ images }: { images: SearchResults[] }) => {
  const MAX_COLUMNS: NumberOfColumns = 4;
  function getColumns(colIndex: number) {
    return images.filter((_, idx) => idx % MAX_COLUMNS === colIndex);
  }

  // Check if it is a mobile device or not
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <>
      {/* Fetching images from cloudinary */}
      {isMobile ? (
        <div className="grid grid-cols-2 gap-4">
          {[getColumns(0), getColumns(1)].map((column, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              {column?.map((result) => (
                <CloudinaryImage
                  key={result.public_id}
                  path={"/gallery"}
                  src={result.public_id}
                  imageData={result}
                  width="400"
                  height="300"
                  alt="an image of something"
                />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
            (column, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                {column?.map((result) => (
                  <CloudinaryImage
                    key={result.public_id}
                    path={"/gallery"}
                    src={result.public_id}
                    imageData={result}
                    width="400"
                    height="300"
                    alt="an image of something"
                  />
                ))}
              </div>
            )
          )}
        </div>
      )}
    </>
  );
};

export default ImageGrid;
