import { Button } from "@/components/ui/button";
import React from "react";

import { GalleryVertical, Album, Star } from "lucide-react";
import Link from "next/link";

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
              variant="ghost"
              className="w-full flex gap-2 justify-start"
              asChild
            >
              <Link href="/gallery">
                <GalleryVertical />
                Gallery
              </Link>
            </Button>
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
  );
};

export default SideMenu;
