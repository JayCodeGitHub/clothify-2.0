export const PurchaseFormItems = [
    {
        step: 1,
        label: 'Full Name',
        placeholder: 'Full Name',
        name: 'fullName',
        type: 'text',
        regex: ``,
        errorRequire: 'First name is required',
        errorRegex: '',
    },
    {
        step: 1,
        label: 'Email Adress',
        placeholder: 'Email',
        name: 'email',
        type: 'email',
        regex: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        errorRequire: 'Email is required',
        errorRegex: 'Please use correct formatting. Example: example@example.com',
    },
    {
        step: 2,
        label: 'Address',
        placeholder: 'Street, City',
        name: 'address',
        type: 'text',
        regex: '',
        errorRequire: 'Address is required',
        errorRegex: 'Please use correct formatting',
    },
    {
        step: 2,
        label: 'Country',
        placeholder: 'Country',
        name: 'country',
        type: 'text',
        regex: '',
        errorRequire: 'Country is required',
        errorRegex: 'Please use correct formatting',
    },
    {
        step: 3,
        label: `Cardholder's Name`,
        placeholder: 'Full Name',
        name: 'cardName',
        type: 'text',
        regex: '',
        errorRequire: `Cardholder's Name is required`,
        errorRegex: 'Please use correct formatting',
    },
    {
        step: 3,
        label: 'Card Number',
        placeholder: '---- ---- ---- ----',
        name: 'cardNumber',
        type: 'number',
        regex: '',
        errorRequire: `Card Number is required`,
        errorRegex: 'Please use correct formatting',
    },
    {
        step: 4,
        label: 'Expiry Date',
        placeholder: 'MM/YY',
        name: 'cardDate',
        type: 'text',
        regex: '',
        errorRequire: `Expiry Date is required`,
        errorRegex: 'Please use correct formatting',
    },
    {
        step: 4,
        label: 'CVV',
        placeholder: 'CVV',
        name: 'cardCvv',
        type: 'text',
        regex: '',
        errorRequire: `CVV is required`,
        errorRegex: 'Please use correct formatting',
    },
]