import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function POST(req: any) {
  const data = await req.json();
  const email = data.email;
  const password = data.password;
  console.log(email, password);

  const newUser = await prisma.user.create({
    data: {
        email: email,
        password: email,
    },
  });
  return NextResponse.json({newUser}, { status: 200 });
}