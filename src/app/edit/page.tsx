"use client";
import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

const Edit = ({
  searchParams: { publicId },
}: {
  searchParams: { publicId: string };
}) => {
  const [transformation, setTransformation] = useState<
    | undefined
    | "generative-fill"
    | "pixelate"
    | "grayscale"
    | "removeBackground"
  >();

  return (
    <section className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Edit {publicId}</h1>
      </div>

      <div className="mb-2 flex flex-col gap-8">
        <div className="flex gap-4">
          <Button variant="ghost" onClick={() => setTransformation(undefined)}>
            Clear
          </Button>
          <Button onClick={() => setTransformation("generative-fill")}>
            Generative Fill
          </Button>
          <Button onClick={() => setTransformation("pixelate")}>
            Pixelate
          </Button>
          <Button onClick={() => setTransformation("removeBackground")}>
            Remove Background
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <CldImage src={publicId} alt={publicId} width={300} height={300} />

          {transformation === "generative-fill" && (
            <CldImage
              src={publicId}
              alt={publicId}
              width={300}
              height={300}
              crop="pad"
              fillBackground
            />
          )}
          {transformation === "pixelate" && (
            <CldImage
              src={publicId}
              alt={publicId}
              width={300}
              height={300}
              crop="pad"
              //   @ts-ignore
              pixelate
            />
          )}
           {transformation === "removeBackground" && (
            <CldImage
              src={publicId}
              alt={publicId}
              width={300}
              height={300}
              crop="pad"
              //   @ts-ignore
              removeBackground
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Edit;
// 2.27.35
