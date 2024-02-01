import { PaymentFormItems } from "@/items/paymentFormItems"

export default function PaymentForm({updateField}: {updateField: (e: React.ChangeEvent<HTMLInputElement>) => void}) {
    return (
            <fieldset className="flex flex-col gap-2">
            {PaymentFormItems.map(({long, label, type, placeholder, name}, index) => (
                <span className={`flex flex-col w-full px-2 ${long ? 'w-full' : 'w-1/2'}`} key={index}>
                    <label className='text-sm self-start'>{label}</label>
                    <input 
                        onChange={updateField}
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        className="w-full p-3 border border-gray-300 rounded-md my-2" 
                    />
                </span>
            ))}
            </fieldset>
    )
}