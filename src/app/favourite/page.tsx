import cloudinary from "cloudinary";
import { SearchResults } from "../gallery/page";
import CloudinaryImage from "../gallery/CloudinaryImage";

const Favourite = async () => {
  // Getting the uploaded image from cloudinary
  const results = (await cloudinary.v2.search
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
      <div className="grid grid-cols-4 gap-4">
        {results?.resources?.map((result) => (
          <CloudinaryImage
            key={result.public_id}
            path={"/favourite"}
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

export default Favourite;
// 1.15.07