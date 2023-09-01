"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

  const [prompt, setPrompt] = useState("");
  const [pendingPrompt, setPendingPrompt] = useState("");

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

          <div className="flex flex-col gap-2">
          <Button
              onClick={() => {
                setTransformation("generative-fill");
                setPrompt(pendingPrompt);
              }}
            >
              Apply Generative Fill
            </Button>
            <Label>Prompt</Label>
            <Input
              value={pendingPrompt}
              onChange={(e) => setPendingPrompt(e.currentTarget.value)}
            />
          </div>
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
              // @ts-ignore
              pixelate
            />
          )}
          {transformation === "removeBackground" && (
            <CldImage
              src={publicId}
              alt={publicId}
              width={300}
              height={300}
              removeBackground
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Edit;
