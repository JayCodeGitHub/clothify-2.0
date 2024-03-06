import OrderItem from "./orderItem";
import { PurchaseFormItems } from "@/items/purchaseFormItems";
import { OrderType } from "@/types";

interface OrderProps {
    order: OrderType
}

export default function Order({ order }: OrderProps) {
    return (
        <div>
           {PurchaseFormItems.map((item) => (
                <p key={item.name}>{item.label}: {String(order[item.name])}</p>
           ))}
        {order.items.map((item: any) => (
            <OrderItem
                key={item.id}
                item={item}
            />
        ))}
        </div>
    );
}