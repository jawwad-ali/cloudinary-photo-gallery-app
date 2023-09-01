import { SearchResults } from "../gallery/page";

import { v2 as cloudinary } from "cloudinary";
import ImageGrid from "components/ImageGrid";

const Favourite = async () => {
  // Getting the uploaded image from cloudinary
  const results = (await cloudinary.search
    .expression("resource_type:image AND tags=favourite")
    .with_field("tags")
    .sort_by("created_at", "desc")
    .max_results(30) 
    .execute()) as { resources: SearchResults[] };

  return (
    <section className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Favourite Images</h1>
      </div>

      {/* Fetching images from cloudinary */}
      <ImageGrid images={results.resources} /> 
    </section>
  );
};

export default Favourite;