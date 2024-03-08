import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function POST(req: any) {
  return NextResponse.json({message: 'Sorry our database is full'}, { status: 400 });
  
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
  
  try {
    const createdUser = await prisma.user.create({
      data: {
        email: email,
        password: password,
    },
    });
    console.log('Order created:', createdUser);
  } catch (error) {
    console.error('Error creating order:', error);
  }

  const token = jwt.sign( {email}, process.env.JWT_SECRET || '', { expiresIn: '72h' });

  return NextResponse.json(token, { status: 200 });
}
