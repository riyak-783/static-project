import Link from "next/link";

export default function PortfolioComp() {
  const projects = [
    {
      title: "School Website",
      category: "Web Development",
      image: "/portfolio/p1.webp",
    },
    {
      title: "Brand Logo Design",
      category: "Branding",
      image: "/portfolio/p2.png",
    },
    {
      title: "Instagram Campaign",
      category: "Social Media",
      image: "/portfolio/p3.jpg",
    },
    {
      title: "Business Website",
      category: "Web Development",
      image: "/portfolio/p4.jpg",
    },
    {
      title: "Brand Identity",
      category: "Branding",
      image: "/portfolio/p5.png",
    },
    {
      title: "Reel Editing",
      category: "Reels",
      image: "/portfolio/p6.webp",
    },
  ];

  return (
    <section className="bg-[#0e0e0e] text-white py-24 px-6 md:px-12 relative">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-bb-yellow font-bold tracking-[0.3em] text-sm uppercase block">
            OUR WORK
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold mt-4 mb-6">
            Our <span className="text-bb-yellow italic">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Explore our latest digital creations across web development, social
            media, and branding.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#131313] rounded-2xl overflow-hidden
                border border-white/5 hover:border-bb-yellow/30
                transition-all duration-400 hover:-translate-y-1
                hover:shadow-[0_8px_30px_rgba(255,242,168,0.08)]"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500
                    group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                />

                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 bg-black/70 flex items-center justify-center
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Link
                    href="/portfolio"
                    className="bg-bb-yellow text-black text-sm font-bold px-5 py-2.5
                      rounded-full hover:scale-105 transition-transform duration-200"
                  >
                    View Project →
                  </Link>
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <span className="text-bb-yellow text-[11px] font-bold uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-white text-base font-semibold mt-0.5 leading-snug">
                    {project.title}
                  </h3>
                </div>

                {/* Arrow icon */}
                <div
                  className="w-8 h-8 rounded-full border border-white/10 group-hover:border-bb-yellow/60
                    flex items-center justify-center shrink-0 ml-3
                    text-gray-500 group-hover:text-bb-yellow transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Bottom accent bar */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-bb-yellow
                  group-hover:w-full transition-all duration-500"
              />
            </div>
          ))}
        </div>

        {/* See All Work Button */}
        <div className="flex justify-center mt-16">
          <Link
            href="/portfolio"
            className="px-10 py-4 border-2 border-bb-yellow text-bb-yellow
              hover:bg-bb-yellow hover:text-black transition-all duration-300
              rounded-full font-semibold tracking-wide"
          >
            See All Work
          </Link>
        </div>
      </div>
    </section>
  );
}
