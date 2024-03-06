import { NextResponse } from "next/server";
import { headers } from 'next/headers';
import { PrismaClient } from '@prisma/client'
import jwt, { Secret } from 'jsonwebtoken';

const prisma = new PrismaClient();


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

    const profile = await prisma.user.findUnique({ where: { email: email }});
    
    if (profile === null) {
        return NextResponse.json({message: 'User not found'}, { status: 404 });
    }
    
    const orders = await prisma.order.findMany({ where: { userId: profile.id }});


    await Promise.all(orders.map(async (item, i) => {
        const orderItems = await prisma.orderItem.findMany({ where: { orderId: item.id }});
        orders[i] = { ...item, items: orderItems } as typeof item;
    }));

    const user = {  email: profile.email, orders: orders}

    return NextResponse.json(user, { status: 200 });
}