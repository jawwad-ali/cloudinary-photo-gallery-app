"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import { useRouter } from "next/navigation";

const SearchForm = ({ initialSearch }: { initialSearch: string }) => {
  const [tagName, setTagName] = useState(initialSearch ?? "");
  const router = useRouter();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.replace(`/gallery?search=${encodeURIComponent(tagName)}`);
          router.refresh();
        }}
      >
        <Label htmlFor="tag-name" className="text-right">
          Search By Tag
        </Label>
        <div className="flex gap-2">
          <Input
            id="name"
            value={tagName}
            onChange={(e) => setTagName(e.currentTarget.value)}
            className="col-span-3"
          />
          <Button>Search</Button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
// 2.41.55