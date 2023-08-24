"use client";
import { useEffect } from "react";
import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//   cloud_name: "dcprrlc1p",
//   api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
//   api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
// });

// module.exports = {
//   cloudinary,
// };

useEffect(() => {
  CloudinarySetup()
}, []);

export default function CloudinarySetup() {
  cloudinary.config({
    cloud_name: "dcprrlc1p",
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
  });
}
