import OrderItem from "./orderItem";
import { PurchaseFormItems } from "@/items/purchaseFormItems";

export default function Order({ order }: any) {
    return (
        <div>
            {PurchaseFormItems.map((item, i) => (
                <p key={i}>{order[item.name]}</p>
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