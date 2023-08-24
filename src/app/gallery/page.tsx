import UploadButton from "./UploadButton";

import CloudinaryImage from "./CloudinaryImage";

import { v2 as cloudinary } from "cloudinary";

export type SearchResults = {
  public_id: string; 
  tag: string[];
};

const GalleryPage = async () => {
  // Getting the uploaded image from cloudinary
  const results = await cloudinary.search
    .expression("resource_type:image")
    .with_field("tags") //getting the images with tags field
    .sort_by("created_at", "desc")
    .max_results(30) 
    .execute() as { resources: SearchResults[] }
    
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
            path={'/gallery'}
            src={result.public_id}
            imageData={result}
            width="400"
            height="300"
            alt="an image of something"
          />
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;