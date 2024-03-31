export default function Contact() {
    const inputClass = "border border-gray-300 w-3/5 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out"

    return (
        <form className="flex flex-col gap-4 items-center">
            <h2 className="text-lg">Contact Form</h2>
            <input type="email" name="Email" placeholder="Email" className={inputClass} />
            <input type="text" name="Subject" placeholder="Subject" className={inputClass} />
            <textarea name="Message" rows={14} placeholder="Message" className={inputClass} />
            <button type="submit" className="w-1/5 self-center bg-blue-500 text-white font-medium py-2 rounded hover:brightness-95">Submit</button>
        </form>
    )
}