export default function Contact() {
  const inputClass = "border border-gray-300 w-3/5 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out self-center";
  const labelClass = "block text-gray-600 text-sm font-medium mb-2";

  return (
    <form className="flex flex-col gap-4 items-center relative border rounded p-3 min-h-screen justify-center">
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
  );
}
