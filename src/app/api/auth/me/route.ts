import { NextResponse } from "next/server";
import { headers } from 'next/headers';
import jwt, { Secret } from 'jsonwebtoken';


export async function POST(req: any) {
    const data = await req.json();

    let email: string = '';

    try {
        await jwt.verify(data.token, process.env.JWT_SECRET as Secret, (err: any, decoded: any) => {
            email = decoded.email;
        })
    } catch (err) {
        return NextResponse.json(false, { status: 403 });
    }
    const token = jwt.sign( {email}, process.env.JWT_SECRET || '', { expiresIn: "72h" });

    return NextResponse.json(token, { status: 200 });
}


export async function GET(req: any) {

    const headersList = headers()
    const token = headersList.get('authorization')

    let email = '';

    if (token) {
        await jwt.verify(token, process.env.JWT_SECRET as Secret, (err: any, decoded: any) => {
            email = decoded.email;
        })
    }

    return NextResponse.json(email, { status: 200 });
}