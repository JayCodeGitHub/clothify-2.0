import { NextResponse } from "next/server";
import { PurchaseFormItems } from "@/items/purchaseFormItems";

export async function POST(req: any) {
    let data;
    let form: { [x: string]: string; };
    let cart;
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

    return NextResponse.json("Order", { status: 200 });
}
