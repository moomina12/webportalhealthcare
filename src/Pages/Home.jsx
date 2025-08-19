import { motion } from "framer-motion";
import bgVideo from "../assets/background.mp4"; // adjust path as needed

export default function Home() {
  const descriptions = [
    "We transform complex healthcare data into clear, actionable insights.",
    "Our platform empowers providers, payers, and stakeholders to uncover trends, identify opportunities, and make smarter, faster decisions.",
    "With a blend of analytics expertise and industry knowledge, we turn numbers into strategies that improve outcomes and drive growth.",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Static Title */}
      <header className="py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Welcome to Healthcare Analysis Portal
        </h1>
        {/* Small space after welcome message */}
        <div className="mt-8"></div>
      </header>

      {/* About Section with Swirl-Up Effect */}
      <section className="max-w-[700px] mx-auto px-6 text-center leading-relaxed space-y-10">
        {descriptions.map((text, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 100, rotate: -15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            transition={{
              delay: index * 0.8,
              duration: 1.2,
              ease: "easeOut",
            }}
            className="text-gray-300 text-lg"
          >
            {text}
          </motion.p>
        ))}

        {/* Video Section */}
        <div className="mt-12">
          <video
            src={bgVideo}
            autoPlay
            loop
            muted
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}
