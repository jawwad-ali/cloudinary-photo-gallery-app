import { SearchResults } from "@/app/gallery/page";
import AlbumGrid from "./AlbumGrid";

import { v2 as cloudinary } from "cloudinary";

const AlbumName = async ({ params }: { params: { albumName: string } }) => {
  // Getting the uploaded image from cloudinary
  const results = (await cloudinary.search
    .expression(`resource_type:image AND folder=${params.albumName}`)
    .with_field("tags") //getting the images with tags field
    .sort_by("created_at", "desc")
    .max_results(30)
    .execute()) as { resources: SearchResults[] };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Albums &quot;{params.albumName}&quot;</h1>
      </div>

      <div>
        <AlbumGrid images={results.resources} />
      </div>
    </div>
  );
};

export default AlbumName;
