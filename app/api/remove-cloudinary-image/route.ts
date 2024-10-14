import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  const { publicId } = await request.json();

  if (!publicId) {
    return NextResponse.json(
      { message: "Public ID is required" },
      { status: 400 }
    );
  }

  try {
    const result = await cloudinary.uploader.destroy(
      `${process.env.CLOUDINARY_FOLDER_NAME}/${publicId}`,
      { invalidate: true }
    );
    console.log("Cloudinary delete result:", result);
    return NextResponse.json({ message: "Image deleted successfully", result });
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting image", error: error },
      { status: 500 }
    );
  }
}
