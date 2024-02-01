export const PaymentFormItems = [
    {
        label: `Cardholder's Name`,
        placeholder: 'Full Name',
        name: 'cardName',
        type: 'text',
        long: true,
    },
    {
        label: 'Card Number',
        placeholder: '---- ---- ---- ----',
        name: 'cardNumber',
        type: 'text',
        long: true,
    },
    {
        label: 'Expiry Date',
        placeholder: 'MM/YY',
        name: 'cardDate',
        type: 'text',
        long: false,
    },
    {
        label: 'CVV',
        placeholder: 'CVV',
        name: 'cardCvv',
        type: 'text',
        long: false,
    },
]