import { NextResponse } from "next/server";

export async function POST(req: any) {
    const data = await req.json();
    const email = data.email;
    const password = data.password;
  
  return NextResponse.json({email, password}, { status: 200 });
}