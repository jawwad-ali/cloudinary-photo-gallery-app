"use client";
import { SearchResults } from "@/app/gallery/page";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FolderPlus } from "lucide-react";
import { useState } from "react";
import { addImageToAlbum } from "./actions";

export function AddToAlbumDialog({
  image,
  onClose,
}: {
  image: SearchResults;
  onClose: () => void;
}) {
  const [albumName, setAlbumName] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild className="w-full flex justify-start">
        <Button variant="ghost">
          <FolderPlus className="mr-2" />
          <span>Add To Album</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>Move this image into an album.</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input
              id="name"
              value={albumName}
              onChange={(e) => setAlbumName(e.currentTarget.value)}
              className="col-span-3"
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            type="submit"
            onClick={() => addImageToAlbum(image, albumName)}
          >
            Add to Album
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
