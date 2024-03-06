import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
import { PurchaseFormItems } from "@/items/purchaseFormItems";
import { OrderItemType } from "@/types";

const prisma = new PrismaClient();

export async function POST(req: any) {
    let data;
    let form: { [x: string]: string; };
    let cart: Array<OrderItemType>;
    try {
        data = await req.json();
        form = data.form;
        cart = data.cart;
    } catch (error) {
        return NextResponse.json({message: "Data is missing"}, { status: 404 });
    }

    // data validation
    let valid = true;
    let error = "";

    {PurchaseFormItems.map((item) => {
        if(!form[item.name as keyof typeof form]) {
            valid = false;
            error = item.errorRequire;
        } else if (item.regex && !new RegExp(item.regex).test(form[item.name as keyof typeof form])) {
            valid = false;
            error = item.errorRegex;
        }
      })}

      if (!valid) {
        return NextResponse.json({message: error}, { status: 404 });
      }

      if (cart.length === 0) {
        return NextResponse.json({message: 'Your cart is empty'}, { status: 404 });
      }

      try {
        const createdOrder = await prisma.order.create({
          data: {
            fullName: form.fullName,
            email: form.email,
            address: form.address,
            country: form.country,
            cardName: form.cardName,
            cardNumber: form.cardNumber,
            cardDate: form.cardDate,
            cardCvv: form.cardCvv,
            items: {
              create: Array.isArray(cart) ? cart.map((item: OrderItemType) => {
                return { title: item.title, price: item.price, size: item.size, quantity: item.quantity }
              }) : [],
            },
          },
        });
        console.log('Order created:', createdOrder);
      } catch (error) {
        console.error('Error creating order:', error);
      }

    return NextResponse.json("Order", { status: 200 });
}
