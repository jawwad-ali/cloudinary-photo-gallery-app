import cloudinary from "cloudinary";
import { AddToAlbumCard } from "components/AddToAlbum";

export interface FolderProps {
  folders: {
    name: string;
    path: string;
  }[]; 
}

const Albums = async () => {
  const { folders } = (await cloudinary.v2.api.root_folders()) as FolderProps;
  return (
    <section className="flex flex-col gap-8">
      <div className="flex justify-between"> 
        <h1 className="text-4xl font-bold">Albums</h1>
      </div>
 
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full"> 
        {folders.map((folder) => (
          <AddToAlbumCard folder={folder} key={folder.name} />
        ))}
      </div>
    </section>
  );
};

export default Albums;
