import UploadButton from "./UploadButton";

import { v2 as cloudinary } from "cloudinary";

import ImageGrid from "components/ImageGrid";
import SearchForm from "./SearchForm";

export type SearchResults = {
  public_id: string;
  tag: string[];
};

const GalleryPage = async ({
searchParams: { search },
}: {
  searchParams: { search: string };
}) => {

  // Getting the uploaded image from cloudinary 
  const results = (await cloudinary.search
    .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`) // Get all imgs and also getting imgs by tag
    .with_field("tags")
    .sort_by("created_at", "desc") 
    .max_results(30)
    .execute()) as { resources: SearchResults[] };  

  return (
    <section className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <UploadButton />
      </div>  
      {}
      {/* Search image by TagName */}
      <SearchForm initialSearch={search} />

      {/* Component to get Images */} 
      <ImageGrid images={results.resources} />
    </section>
  );
};

export default GalleryPage;