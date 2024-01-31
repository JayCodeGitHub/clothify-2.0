export default function PersonalForm() {
    return (
        <form className="flex flex-col gap-2">
            <span className='flex flex-col w-full px-2'>
                <label className='text-sm self-start'>Full Name</label>
                <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-md my-2" />
            </span>
            <span className='flex flex-col w-full px-2'>
                <label className='text-sm self-start'>Email Adress</label>
                <input type="text" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-md my-2" />
            </span>
            <span className='flex flex-col w-full px-2'>
                <label className='text-sm self-start'>Adress</label>
                <input type="text" placeholder="Street, City" className="w-full p-3 border border-gray-300 rounded-md my-2" />
            </span>
            <span className='flex flex-col w-full px-2'>
                <label className='text-sm self-start'>Country</label>
                <input type="text" placeholder="Country" className="w-full p-3 border border-gray-300 rounded-md my-2" />
            </span>
        </form>
    )
}