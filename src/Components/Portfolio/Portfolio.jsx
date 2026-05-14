"use client";
import Link from "next/link";
import { useState } from "react";

const projectsData = [
  { title: "E-commerce Website", href: "/projects/ecommerce", category: "Web", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsGkGhRo_EnQwjuBSYuo3q9pE1_BKL8dqWZqzNa59SIopm54vXjoF920smXxIf1pcSj4z4IqQiTCOav3c-_tz6nYpfK1rEyhkcvU2ZTM5XkTOnuu7A0TL0LX7YjsY6hKyzZUPweqDFg_P8gNK1gtkng9wakHQGxdcUjfVe4dUqCHCxVG05jCs61t_KncZGR81Gn_UMrGaPoyxyLOMgtrLIWzPv__4lLPdwswHPBY6tZzFMR9Lq9j8CQUHoMdg_pU19vtK-t6upQM0_" },
  { title: "Fitness Mobile App", href: "/projects/fitness", category: "Mobile", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBn6e6C3kL3Tmifcir9iceO4Kz_xvdixXKb-84cGPZMQi_1cZmX8GOrB_V93-OS5ER8EQb352eUb6YpAsebONpmScYFp4VcpLUO2epLUmxCt8jaBj0SuO0zL48nahEYgST2MdhrmutfiN6401Iqy-MeGzwk0rk_dJ-PiKawhRcrhUHPaHEEQ502Mlg1lkeqTVqkngp-7xij-1as03iJgXR71YS1uxIPW7Vl3FrjSdw-iI1ENbhVaBSJWAWWJKQPNz5zFD4xsiz8GEXG" },
  { title: "Restaurant Branding", href: "/projects/restaurant", category: "Social", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfYw-C0jZCBKx_YtvUnkhvcuel2SW8nDflEUPKMEECDMdbGr5EoYPlROi0rowES7rF9JrKVpVYlFsplWa_szY8DnxukGbFy932n5WzUHSZZ4Rn9v42yud9OUYpNb6NATCdMVHfro4IWMQjlS57OrvyCuRvtGrDC_J_0zE5-xEtO9Eo0snmeoaYzFJPyLYKmPnbWb1y13lY0ttjdeVydC6MR-OBBOGRCd58SlSJvfknax2M68tv8DBxQ7AqvPvE9e-4jVWD8Z1ElJzB" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <div className="bg-[#0e0e0e] text-white">
      <main className="pt-32">
        {/* Hero */}
        <section className="text-center px-6 mb-16">
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            Our Digital <span className="text-bb-yellow">Work.</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Architecting high-performance digital ecosystems that bridge
            imagination and technical precision.
          </p>

          {/* Filters */}
<div className="flex justify-center">
  
  {/* 📱 Mobile Dropdown */}
  <select
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    className="block md:hidden px-4 py-3 rounded-full bg-[#131313] text-gray-300 font-semibold outline-none"
  >
    {["all", "Web", "Mobile", "Social"].map((cat) => (
      <option key={cat} value={cat} className="bg-black">
        {cat}
      </option>
    ))}
  </select>

  {/* 💻 Tablet/Desktop Buttons */}
  <div className="hidden md:flex gap-3">
    {["all", "Web", "Mobile", "Social"].map((cat) => (
      <button
        key={cat}
        onClick={() => setFilter(cat)}
        className={`px-6 py-3 rounded-full font-bold capitalize transition ${
          filter === cat
            ? "bg-bb-yellow text-black"
            : "bg-[#131313] text-gray-400 hover:text-white"
        }`}
      >
        {cat}
      </button>
    ))}
  </div>

</div>
        </section>

        {/* Projects Grid */}
        <section className="px-6 pb-32 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              className="bg-[#131313] rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(227,247,0,0.1)] transition"
            >
              <img
                src={project.img}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <span className="text-bb-yellow text-xs uppercase">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold mt-2 mb-3">
                  {project.title}
                </h3>

                <Link href={project.href} className="text-bb-yellow text-sm font-bold">
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="text-center pb-32">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Have a project in mind?
          </h2>
          <Link href="/contact" className="bg-bb-yellow text-black px-10 py-4 rounded-full font-bold">
            Start a Project
          </Link>
        </section>
      </main>
    </div>
  );
}