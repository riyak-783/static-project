import {
  FaPaintBrush,
  FaVideo,
  FaCode,
  FaSchool,
  FaCertificate,
  FaTools,
} from "react-icons/fa";

export default function ServicesComp() {
  const services = [
    {
      title: "Social Media Post Design",
      desc: "Attractive and engaging social media posts designed for your brand.",
      icon: <FaPaintBrush />,
    },
    {
      title: "Reel Creation & Handling",
      desc: "We create and manage reels to grow your social media presence.",
      icon: <FaVideo />,
    },
    {
      title: "Static Website Development",
      desc: "Fast, secure and modern static websites for businesses.",
      icon: <FaCode />,
    },
    {
      title: "Digital Branding",
      desc: "Logo design, brand colors and complete digital identity.",
      icon: <FaCertificate />,
    },
    {
      title: "Website Maintenance",
      desc: "We maintain, update and support your website regularly.",
      icon: <FaTools />,
    },
  ];

  return (
    <section className="bg-[#0e0e0e] text-white py-24 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <span className="text-bb-yellow text-xs uppercase tracking-[0.3em] font-bold mb-4 block">
          OUR SERVICES
        </span>

        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          What We Offer
        </h2>

        <p className="text-gray-400 text-lg">
          We help businesses grow online with modern websites, social media
          content, and digital branding solutions.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-[#131313] p-10 rounded-xl border border-[#2c2c2c]
            transition-all duration-300 hover:-translate-y-2 
            hover:shadow-[0_0_25px_rgba(250,204,21,0.15)]"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-lg bg-[#1f1f1f] flex items-center justify-center mb-6 text-bb-yellow text-2xl group-hover:scale-110 transition">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
