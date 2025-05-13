import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";

export async function GET() {
  try {
    await ConnectDB();

    const latestBlogs = await BlogModel.find({})
      .sort({ date: -1 }) // Sort by most recent
      .limit(5); // Fetch the 5 latest posts

    return NextResponse.json(latestBlogs);
  } catch (error) {
    console.error("Error fetching latest blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch latest blogs" },
      { status: 500 }
    );
  }
}
