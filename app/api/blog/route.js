import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
const fs = require("fs");
// import BlogModel from "@/models/BlogModel"; // Uncomment and adjust as needed

// Ensure DB connection
const LoadDB = async () => {
  await ConnectDB();
};
LoadDB(); // Connect to DB once on server start

// API ENDPOINTS TO GET ALL BLOGS
export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }
}

// API endPoints For Uploading Blog
export async function POST(request) {
  try {
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get("image");

    // Validate image
    if (!image || typeof image === "string") {
      return NextResponse.json(
        { error: "Invalid image file" },
        { status: 400 }
      );
    }

    // Save image to /public
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const fileName = `${timestamp}_${image.name}`;
    const path = `./public/${fileName}`;

    await writeFile(path, buffer);
    const imgUrl = `/${fileName}`;
    console.log("Image saved:", imgUrl);

    //  BlogModel for save THis In database
    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: imgUrl,
      authorImg: formData.get("authorImg"),
    };
    await BlogModel.create(blogData);
    console.log("Blog Saved");

    return NextResponse.json({
      success: true,
      msg: "Blog uploaded successfully!",
      imgUrl,
    });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ error: "Failed to upload" }, { status: 500 });
  }
}

//Api END POINTS For For Delete Blog
export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("id");
  const blog = await BlogModel.findById(id);
  fs.unlink(`./public${blog.image}`, () => {});
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Blog Deleted" });
}
