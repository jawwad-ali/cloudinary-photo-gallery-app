"use client";

import { SearchResults } from "@/app/gallery/page";
import ImageGrid from "components/ImageGrid";

const AlbumGrid = ({ images }: { images: SearchResults[] }) => {
  return (
    <div>
      <div>
        <ImageGrid images={images} />
      </div>
    </div>
  );
};

export default AlbumGrid;