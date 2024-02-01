export const PaymentFormItems = [
    {
        label: `Cardholder's Name`,
        placeholder: 'Full Name',
        name: 'card-name',
        type: 'text',
        long: true,
    },
    {
        label: 'Card Number',
        placeholder: '---- ---- ---- ----',
        name: 'card-number',
        type: 'text',
        long: true,
    },
    {
        label: 'Expiry Date',
        placeholder: 'MM/YY',
        name: 'card-date',
        type: 'text',
        long: false,
    },
    {
        label: 'CVV',
        placeholder: 'CVV',
        name: 'card-cvv',
        type: 'text',
        long: false,
    },
]