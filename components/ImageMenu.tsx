"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FolderPlus, MenuSquare } from "lucide-react";
import { AddToAlbumDialog } from "./AddToAlbumDialog";
import { SearchResults } from "@/app/gallery/page";
import { useState } from "react";

export function ImageMenu({ image }: { image: SearchResults }) {
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-8 h-8 p-0">
            <MenuSquare />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-52">
          <DropdownMenuLabel>
            {/* Child Component to Open dialog box */}
            <AddToAlbumDialog image={image} />
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
