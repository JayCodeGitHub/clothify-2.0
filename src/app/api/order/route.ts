import { NextResponse } from "next/server";

export async function POST(req: any) {
    const data = await req.json();
    console.log(data);
    return NextResponse.json("Order", { status: 200 });
    return NextResponse.json({message: 'Erorr'}, { status: 404 });
}
