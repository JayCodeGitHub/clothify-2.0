import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function GET() {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
}

export async function POST(req: any) {
  const data = await req.json();
  const title = data.title;
  const content = data.content;
  const newUser = await prisma.post.create({
    data: {
        title,
        content
    },
  });
  
  return NextResponse.json(newUser);
}