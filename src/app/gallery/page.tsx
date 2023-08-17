import { Button } from "@/components/ui/button";
import UploadButton from "./UploadButton";

import cloudinary from "cloudinary";
import CloudinaryImage from "./CloudinaryImage";

type SearchResults = {
  public_id: string;
};

const GalleryPage = async () => {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(10)
    .execute()) as { resources: SearchResults[] };

  return (
    <section className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <UploadButton />
      </div>

      {/* Fetching images from cloudinary */}
      <div className="grid grid-cols-4 gap-4">
        {results?.resources?.map((result) => (
          <CloudinaryImage
            key={result.public_id}
            src={result.public_id}
            width="400"
            height="300"
            alt="an image of something"
            public_id={result.public_id}
          />
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;
