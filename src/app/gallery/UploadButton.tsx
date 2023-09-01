"use client";

import { Button } from "@/components/ui/button";

import { Upload } from "lucide-react";

import { CldUploadButton } from "next-cloudinary";

import { useRouter } from "next/navigation"; 
 
type UploadResult = {
  info: {
    public_id: string;
  }; 
  event: "success";
};

const UploadButton = () => {
  const router = useRouter(); 
  return (
    <>  
      <Button asChild>
        <CldUploadButton
          //   @ts-ignore
          onUpload={(result: UploadResult) => {
            console.log(result);
            router.refresh();
          }} 
          uploadPreset="ewrqaie3" 
        >
          <Upload className="mr-2" /> Upload
        </CldUploadButton>
      </Button>
    </>
  );
};

export default UploadButton;