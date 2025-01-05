import { writeFile } from "fs";
import { connectDB } from "@/app/lib/configs/db";
import { title } from "process";
import BlogModel from "../../lib/models/blogModel.js";
import { log } from "console";
import { NextResponse } from "next/server.js";

const LoadDB = async () => {
  await connectDB();
};
LoadDB();

export async function POST(request) {
  const formData = await request.formData();
  const timeStamp = Date.now();
  const image = formData.get("image");
  const imageByteData = await imageConfigDefault.arrayBuffer()
  const buffer =  Buffer.from(imageByteData)
  const path = `./public/${timeStamp}_${image.name}.png`
  await writeFile(path, buffer)
  const imgUrl = `/${timeStamp}_${image.name}`

  const blogData = {
    title: `${formData.get("title")}`,
    category: `${formData.get("category")}`,
    description: `${formData.get("description")}`,
    content: `${formData.get("content")}`,
    image: `${imgUrl}`,
    date: new Date(),
  };
  await BlogModel.create(blogData);
  console.log("blog saved");

  return NextResponse.json({ success: true, msg: "blog saved" });
}
