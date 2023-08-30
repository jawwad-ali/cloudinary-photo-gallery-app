"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FolderPlus, MenuSquare, Pencil } from "lucide-react";
import { AddToAlbumDialog } from "./AddToAlbumDialog";
import { SearchResults } from "@/app/gallery/page";
import Link from "next/link";

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
          <DropdownMenuGroup>
            <DropdownMenuItem>
              {/* Child Component to Open dialog box */}
              <AddToAlbumDialog image={image} />
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}>
                <Pencil className="h-4 w-4" />
                 <span>Edit</span> 
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
