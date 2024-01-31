export default function PaymentForm() {
    return (
        <form className="flex flex-col gap-2">
             <span className='flex flex-col w-full px-2'>
                <label className='text-sm self-start'>{`Cardholder's Name`}</label>
                <input type="text" placeholder="Full Name" name="card-name" className="w-full h-12 px-4 border border-gray-300 rounded-md my-2" />
             </span>
             <span className='flex flex-col w-full px-2'>
             <label className='text-sm self-start'>Card Number</label>
                <input type="text" placeholder="---- ---- ---- ----" name="card-number" className="w-full h-12 px-4 border border-gray-300 rounded-md my-2" />
             </span>
             <span className="flex">
                <span className='flex flex-col w-1/2 px-2'>
                    <label className='text-sm self-start'>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" name="card-date" className="w-full h-12 px-4 border border-gray-300 rounded-md my-2" />
                </span>
                <span className='flex flex-col w-1/2 px-2'>
                    <label className='text-sm self-start'>CVV</label>
                    <input type="text" placeholder="CVV" name="card-cvv" className="w-full h-12 px-4 border border-gray-300 rounded-md my-2" />
                </span>
             </span>
        </form>
    )
}