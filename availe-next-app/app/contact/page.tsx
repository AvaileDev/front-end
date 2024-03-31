export default function Contact() {
  const inputClass = "w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out self-center shadow-sm hover:shadow-md";
  const labelClass = "text-left block text-gray-600 text-sm font-medium mb-2";

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="flex flex-col gap-4 relative border rounded p-3 self-center w-3/5">
        <h2 className="text-lg">Contact Form</h2>
        <label htmlFor="Email" className={labelClass}>Email</label>
        <input
          type="email"
          name="Email"
          className={inputClass}
        />
        <label htmlFor="Subject" className={labelClass}>Subject</label>
        <input
          type="text"
          name="Subject"
          className={inputClass}
        />
        <label htmlFor="Message" className={labelClass}>Message</label>
        <textarea
          name="Message"
          rows={14}
          className={inputClass}
        />
        <button
          type="submit"
          className="w-1/5 self-center bg-blue-500 text-white font-medium py-2 rounded hover:brightness-95"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
