import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FolderPlus, MenuSquare } from "lucide-react";

export function ImageMenu() {
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-8 h-8 p-0">
            <MenuSquare />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 flex justify-start items-start">
          <FolderPlus className="mt-1 ml-1" />
          <DropdownMenuLabel>Add to Album</DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
