export default function Services() {
  const services = [
    {
      title: "Clinical Data Analysis",
      description:
        "Transform patient records, EHR, and lab results into actionable insights that improve treatment outcomes and decision-making.",
      icon: "💊",
    },
    {
      title: "Operational Performance Dashboards",
      description:
        "Track real-time KPIs for hospital operations, patient flow, and staff productivity through easy-to-use dashboards.",
      icon: "📊",
    },
    {
      title: "Financial & Revenue Cycle Analysis",
      description:
        "Identify revenue leaks, improve claims processing efficiency, and optimize billing workflows for better profitability.",
      icon: "💰",
    },
    {
      title: "Predictive Analytics",
      description:
        "Use AI to forecast patient risk, demand, and resource allocation, enabling proactive care and operational readiness.",
      icon: "🤖",
    },
  ];

  return (
    <section className="py-16 flex flex-col items-center text-white px-6 bg-black">
      {/* Section Heading */}
      <div className="max-w-[600px] w-full text-center mb-12">
        <h2 className="text-4xl font-bold">
          Our Healthcare Business Analysis Services
        </h2>
      </div>

      {/* Services List */}
      <div className="max-w-[600px] w-full flex flex-col gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800/70 p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

