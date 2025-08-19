import Layout from "../components/Layout";

export default function Contact() {
  return (
    <div className="text-white min-h-screen flex flex-col items-center px-6 py-16 bg-black">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4 text-center max-w-[600px]">
        Get in Touch
      </h2>

      {/* Intro message with animation */}
 <p className="mb-8 text-center max-w-[600px] text-blue-400 text-lg md:text-xl font-bold 
              opacity-0 animate-fadeIn">
  Thanks for your interest in DataAnalitiq. Please leave a message and we will connect you with the right person!!!.
</p>

      {/* Contact Card */}
      <div className="max-w-[600px] w-full bg-gray-800/70 p-8 rounded-2xl shadow-lg flex flex-col gap-8">
        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:support@yourdomain.com" className="text-blue-400 hover:underline">
              support@dataanalitiq.com
            </a>
          </p>
          <p>
            <span className="font-semibold">Phone:</span>{" "}
            <a href="tel:+11234567890" className="text-blue-400 hover:underline">
              +971 (55) 7900915
            </a>
          </p>
          <p>
            <span className="font-semibold">Address:</span> Healthcare city, Dubai, UAE
          </p>
          <p>
            <span className="font-semibold">Working Hours:</span> Mon-Fri, 9am - 6pm
          </p>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

