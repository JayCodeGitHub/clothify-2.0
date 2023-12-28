import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function POST(req: any) {
  const data = await req.json();
  const email = data.email;
  const password = data.password;

  if (email === undefined || password === undefined) {
    return NextResponse.json({message: 'Email or password is missing'}, { status: 400 });
  }

  const existingUser = await prisma.user.findUnique({ where: { email: email }});

  if (existingUser !== null) {
    return NextResponse.json({message: 'Email already exists'}, { status: 400 });
  }
  

  const newUser = await prisma.user.create({
    data: {
        email: email,
        password: password,
    },
  });
  return NextResponse.json({newUser}, { status: 200 });
}