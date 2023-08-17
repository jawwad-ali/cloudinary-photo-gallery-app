"use client";

import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { CldUploadButton } from "next-cloudinary";

type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

const UploadButton = () => {
  return (
    <>
      <Button asChild>
        <div className="flex gap-2">
          <Upload />
          <CldUploadButton
            //   @ts-ignore
            onUpload={(result: UploadResult) => {
              console.log(result);
              // setImageId(result.info.public_id);
            }}
            uploadPreset="ewrqaie3"
          />
        </div>
      </Button>
    </>
  );
};

export default UploadButton;
