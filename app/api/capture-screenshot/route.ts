import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import axios from "axios";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    const screenshotResponse = await axios.get(
      `https://api.screenshotmachine.com?key=${process.env.SCREENSHOT_API_KEY}&url=${url}&dimension=1024x768`,
      {
        responseType: "arraybuffer",
      }
    );

    const buffer = Buffer.from(screenshotResponse.data, "binary");

    const uploadResponse = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "ui-resources" }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        })
        .end(buffer);
    });

    return NextResponse.json({ imageUrl: (uploadResponse as any).secure_url });
  } catch (error) {
    console.error("Error in screenshot capture:", error);
    return NextResponse.json(
      { error: "Failed to capture and upload screenshot" },
      { status: 500 }
    );
  }
}
