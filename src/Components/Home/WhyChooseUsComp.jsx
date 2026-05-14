import { FaLightbulb, FaGlobe, FaPalette, FaHeart } from "react-icons/fa";

export default function WhyChooseUsComp() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#0e0e0e] text-white">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,242,168,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Yellow Blur */}
      <div className="absolute top-1/4 -left-1/4 w-[50%] h-[50%] bg-bb-yellow-light rounded-full blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="inline-block text-bb-yellow text-[10px] uppercase tracking-[0.3em] mb-4 py-1.5 px-4 border border-bb-yellow-dark/20 rounded-full bg-bb-yellow-light">
            EXCELLENCE DRIVEN
          </span>

          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Why Sets <span className="text-bb-yellow italic">Us</span> Apart
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 text-xl">
            We combine creativity, strategy, and client satisfaction to help your business thrive in the digital world.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Fresh Approach */}
          <div className="md:col-span-5 md:row-span-2 bg-[#131313] p-10 rounded-lg border border-white/10 hover:border-bb-yellow-dark/40 transition-all hover:-translate-y-2 flex flex-col justify-end min-h-[500px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-bb-yellow-light blur-3xl rounded-full"></div>

            <div className="relative z-10">
              <FaLightbulb className="text-bb-yellow text-6xl mb-6" />
              <h3 className="text-3xl font-bold mb-4">Innovative Thinking</h3>
              <p className="text-gray-400">
                We bring fresh ideas and creative solutions to every project, ensuring your brand stands out in the digital landscape.
              </p>
            </div>
          </div>

          {/* Industry Knowledge */}
          <div className="md:col-span-7 bg-[#131313] p-10 rounded-lg border border-white/10 hover:border-bb-yellow-dark/40 transition-all hover:-translate-y-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <FaGlobe className="text-bb-yellow text-3xl" />
                <h3 className="text-2xl font-bold">Industry Expertise</h3>
              </div>
              <p className="text-gray-400">
                We understand websites, social media, and digital growth
                strategies that actually work for businesses.
              </p>
            </div>
          </div>

          {/* Creativity */}
          <div className="md:col-span-4 bg-[#131313] p-10 rounded-lg border border-white/10 hover:border-bb-yellow-dark/40 transition-all hover:-translate-y-2">
            <FaPalette className="text-bb-yellow text-5xl mb-6" />
            <h3 className="text-2xl font-bold mb-4">Creative Excellence</h3>
            <p className="text-gray-400">
              We craft unique visuals and engaging content that make your brand stand out.
            </p>
          </div>

          {/* Customer First */}
          <div className="md:col-span-3 bg-[#131313] p-10 rounded-lg border border-white/10 hover:border-bb-yellow-dark/40 transition-all hover:-translate-y-2 text-center">
            <FaHeart className="text-bb-yellow text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Client Focused</h3>
            <p className="text-gray-400 text-sm">
              Your satisfaction is our priority. We listen, understand and deliver beyond expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
