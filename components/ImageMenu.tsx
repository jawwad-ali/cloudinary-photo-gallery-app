"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MenuSquare, Pencil } from "lucide-react";
import { AddToAlbumDialog } from "./AddToAlbumDialog";
import { SearchResults } from "@/app/gallery/page";
import Link from "next/link";
import { useState } from "react";

export function ImageMenu({ image }: { image: SearchResults }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-8 h-8 p-0">
            <MenuSquare />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-52">
          <DropdownMenuGroup >
            <DropdownMenuItem asChild>
              {/* Child Component to Open dialog box */}
              <AddToAlbumDialog image={image} onClose={() => setOpen(false)} />
            </DropdownMenuItem>

            <DropdownMenuItem asChild className="flex justify-start cursor-pointer">
              <Button asChild variant="ghost" className="pl-6">
                <Link
                  href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}
                >
                  <Pencil className="h-4 w-4" />
                  <span className="pl-4">Edit</span>
                </Link>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
