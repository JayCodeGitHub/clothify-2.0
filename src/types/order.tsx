import { OrderItemType } from './orderItem';

export type OrderType = {
    [key: string]: string | Array<OrderItemType>,
    fullName: string,
    email: string,
    address: string,
    country: string,
    cardName: string,
    cardNumber: string,
    cardDate: string,
    cardCvv: string,
    items: Array<OrderItemType>
}