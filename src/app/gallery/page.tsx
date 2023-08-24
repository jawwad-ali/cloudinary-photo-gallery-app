import UploadButton from "./UploadButton";

import { v2 as cloudinary } from "cloudinary";
import ImageGrid from "components/ImageGrid";

export type SearchResults = {
  public_id: string;
  tag: string[];
};

const GalleryPage = async () => {
  // Getting the uploaded image from cloudinary
  const results = (await cloudinary.search
    .expression("resource_type:image")
    .with_field("tags") //getting the images with tags field
    .sort_by("created_at", "desc")
    .max_results(30)
    .execute()) as { resources: SearchResults[] };

  return (
    <section className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <UploadButton />
      </div>

      {/* Component to get Images */}
      <ImageGrid images={results.resources} />
    </section>
  );
};

export default GalleryPage;
