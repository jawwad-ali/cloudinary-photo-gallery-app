import { Button } from "@/components/ui/button";

import { GalleryVertical, Album, Star } from "lucide-react";

import Link from "next/link";

import cloudinary from "cloudinary";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { SidebarOpenIcon } from "lucide-react";

const SideMenu = async () => {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: { name: string; path: string }[];
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild className="mt-14 ml-1">
          <Button variant="outline">
            <SidebarOpenIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <div className="grid gap-4 py-4">
            <div className="grid items-center gap-4">
              <div className="pb-12 w-full">
                <div className="space-y-4 py-4">
                  <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                      Manage
                    </h2>
                    <div className="space-y-1 w-full">
                      <div className="flex w-full justify-around ">
                        <Button
                          variant="ghost"
                          className="w-full flex gap-2 justify-start"
                          asChild
                        >
                          <Link href="/gallery">
                            <GalleryVertical />
                            Gallery
                          </Link>
                        </Button>
                      </div>
                      <Button
                        asChild
                        variant="ghost"
                        className="flex gap-2 w-full justify-start"
                      >
                        <Link href="/albums">
                          <Album />
                          Albums
                        </Link>
                      </Button>

                      {folders.map((folder) => (
                        <Button
                          asChild
                          variant="ghost"
                          className="flex gap-2 w-full justify-start ml-4"
                          key={folder.name}
                        >
                          <Link href={`/albums/${folder.path}`}>
                            <Album />
                            {/* to make the first letter uppercase */}
                            {folder.name.slice(0, 1).toUpperCase()}
                            {folder.name.slice(1)} {/* rest to the word */}
                          </Link>
                        </Button>
                      ))}

                      <Button
                        asChild
                        variant="ghost"
                        className="flex gap-2 w-full justify-start"
                      >
                        <Link href="/favourite">
                          <Star />
                          Favourites
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideMenu;