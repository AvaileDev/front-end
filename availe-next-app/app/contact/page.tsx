export default function Contact() {
    const inputClass = "border border-gray-300 w-3/5"

    return (
        <form className="flex flex-col gap-4 mb-8 items-center">
            <h2 className="text-lg">Contact Form</h2>
            <input type="email" name="Email" placeholder="Email" className={inputClass} />
            <textarea name="Message" rows={14} placeholder="Message" className={inputClass} />
            <button type="submit" className="w-1/5 self-center bg-blue-500 hover::bg-blue-700 text-white font-medium py-2 rounded">Submit</button>
        </form>
    )
}