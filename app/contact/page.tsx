'use client'
import React from "react";

export default function Contact() {
  const inputClass =
    "w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out self-center shadow-sm hover:shadow-md";
  const labelClass = "text-left block text-gray-600 text-sm font-medium mb-2";

  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      email: formData.get("Email"),
      subject: formData.get("Subject"),
      content: formData.get("Message"),
    };

    if (!data.email || !data.subject || !data.content) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true)
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        form.reset();
        alert("Email sent successfully.");
      }
    }
    catch {
      alert("Error occured while sending email.");
    }
    finally {
      setLoading(false);
    }
  }


  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-2/5 mx-auto">
        <h2 className="text-2xl font-semibold text-center">Contact Form</h2>
        <label htmlFor="Email" className={labelClass}>
          Email
        </label>
        <input type="email" name="Email" className={inputClass} autoComplete="email" />
        <label htmlFor="Subject" className={labelClass}>
          Subject
        </label>
        <input type="text" name="Subject" className={inputClass} autoComplete="off" />
        <label htmlFor="Message" className={labelClass}>
          Message
        </label>
        <textarea name="Message" rows={14} className={inputClass} autoComplete="off" />
        <button
          type="submit"
          className="w-full md:w-2/5 self-center bg-blue-500 text-white font-medium py-2 rounded hover:brightness-95"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
