import demoVideo from "../assets/HealthcareApp-demo6.mp4";  

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-10">
      {/* Title at the top */}
      <h1 className="text-3xl font-bold text-black mb-6">
        Healthcare App Demo
      </h1>

      {/* Video */}
      <video
        className="w-[80%] max-w-4xl h-auto object-cover rounded-lg shadow-lg"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={demoVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

