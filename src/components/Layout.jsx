import { motion } from "framer-motion";

export default function Layout({ children }) {
  const descriptions = [
    "We transform complex healthcare data into clear, actionable insights.",
    "Our platform empowers providers, payers, and stakeholders to uncover trends, identify opportunities, and make smarter, faster decisions.",
    "With a blend of analytics expertise and industry knowledge, we turn numbers into strategies that improve outcomes and drive growth.",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Static Title */}
      <header className="py-12 text-center">
        <h1 className="text-3xl font-bold">
          Welcome to Healthcare Analysis Portal
        </h1>

        {/* Animated Looping Subtitle */}
        <motion.h2
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-2xl md:text-4xl font-semibold mt-4 text-gray-300"
        >
          Transform data into opportunities
        </motion.h2>
      </header>

      {/* About Section with Swirl Effect */}
      <section className="max-w-[700px] mx-auto mt-16 px-6 text-center leading-relaxed space-y-10">
        {descriptions.map((text, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 40, rotate: -20, scale: 0.8 }}
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
      </section>

      {/* Page Content */}
      <main className="px-6 flex flex-col items-center">{children}</main>
    </div>
  );
}






