export default function PersonalForm() {
    return (
        <form>
            <input type="text" placeholder="Full Name" className="w-full h-12 px-4 border border-gray-300 rounded-md my-2" />
            <input type="text" placeholder="Email" className="w-full h-12 px-4 border border-gray-300 rounded-md my-2" />
            <input type="text" placeholder="Street, City" className="w-full h-12 px-4 border border-gray-300 rounded-md my-2" />
            <input type="text" placeholder="Country" className="w-full h-12 px-4 border border-gray-300 rounded-md my-2" />
        </form>
    )
}