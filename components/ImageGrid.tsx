import CloudinaryImage from "@/app/gallery/CloudinaryImage";
import { SearchResults } from "@/app/gallery/page";

const ImageGrid = ({ images }: { images: SearchResults[] }) => {
  const MAX_COLUMNS = 4;
  function getColumns(colIndex: number) {
    return images.filter((_, idx) => idx % MAX_COLUMNS === colIndex);
  } 
 
  return (
    <>
      {/* Fetching images from cloudinary */}
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
    </>
  );
};

export default ImageGrid;