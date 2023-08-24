import { Avatar,  AvatarImage } from "@/components/ui/avatar";

import "../app/globals.css";

import { Inter } from "@next/font/google";

import SideMenu from "components/SideMenu";

import { v2 as cloudinary } from "cloudinary"

const inter = Inter({ subsets: ["latin"] });

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
}); 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head />
      <body className={inter.className}>
        {/* navbar */}
        <div className="border-b">
          <div className="flex h-16 items-center px-4 container mx-auto">
            PHOTOS APP
            <div className="ml-auto flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
            </div>
          </div>
        </div>

        {/* Body and Sidebar */}
        <div className="flex">
          <SideMenu />
          <div className="w-full px-4 pt-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
