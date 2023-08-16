import { Button } from "@/components/ui/button";
import React from "react";

import { GalleryVertical, Album, Star } from "lucide-react";

const SideMenu = () => {
  return (
    <div className="pb-12 w-1/5">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <Button
              variant="secondary"
              className="w-full flex gap-2 justify-start"
            >
              <GalleryVertical />
              Gallery
            </Button>
            <Button variant="ghost" className="flex gap-2 w-full justify-start">
              <Album />
              Albums
            </Button>
            <Button variant="ghost" className="flex gap-2 w-full justify-start">
              <Star />
              Favourites
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
