import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Error submitting form:", response.status);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container mx-auto px-2 py-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-white font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-cyan-400 bg-opacity-5 border-cyen"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white font-bold mb-2 ">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  bg-cyan-400 bg-opacity-5 border-cyen"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-white font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  bg-cyan-400 bg-opacity-5 border-cyen"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-[6px] w-32 text-sm font-semibold button rounded-full border bg-zinc-900 border-cyan-200 text-cyen hover:text-white  hover:border-none hover:bg-cyen drop-shadow-[0_8px_80px_#00fff2b6] focus:outline-none focus:ring-2 shadow-2xl shadow-cyen focus:ring-cyen focus:ring-offset-2 dark:ring-offset-zinc-900"
        >
          Submit
        </button>
      </form>
      {submitted && (
        <p className="text-green-500 mt-4">Your message has been sent!</p>
      )}
    </div>
  );
}

export default ContactForm;
