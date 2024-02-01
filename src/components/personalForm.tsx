import { PersonalFormItems } from "@/items/personalFormItems"

export default function PersonalForm() {
    return (
        <form className="flex flex-col gap-2">
            {PersonalFormItems.map(({label, type, placeholder, name}, index) => (
                <span className={`flex flex-col w-full px-2`} key={index}>
                    <label className='text-sm self-start'>{label}</label>
                    <input type={type} placeholder={placeholder} name={name} className="w-full p-3 border border-gray-300 rounded-md my-2" />
                </span>
            ))}
        </form>
    )
}