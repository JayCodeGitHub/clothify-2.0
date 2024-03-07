import OrderItem from "./orderItem";
import { PurchaseFormItems } from "@/items/purchaseFormItems";
import { OrderType } from "@/types";

interface OrderProps {
    order: OrderType
}

export default function Order({ order }: OrderProps) {
    return (
        <div className="flex flex-col gap-4 bg-white p-8 rounded-lg">
            <div className="grid gap-2">
                {PurchaseFormItems.map((item) => (
                    <p key={item.name} className="font-normal">
                        {item.label}: <span className="font-medium">{String(order[item.name])}</span>
                    </p>
                ))}
            </div>
           <div className="flex flex-col gap-4">
            {order.items.map((item: any) => (
                <OrderItem
                    key={item.id}
                    item={item}
                />
            ))}
            </div>
        </div>
    );
}