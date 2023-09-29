import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link"; 

export function AddToAlbumCard({
  folder,
}: {
  folder: { name: string; path: string };
}) { 
  return (
    <Card className="lg:w-[350px]">
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader> 
      <CardContent></CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild>
          <Link href={`/albums/${folder.path}`}>View Album</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
