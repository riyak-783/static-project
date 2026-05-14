export const metadata = {
  title: "Services | Nexora",
  description:
    "Discover the range of digital services offered by Nexora, including high-end digital product development and innovative solutions.",

  alternates: {
    canonical: "https://nexora.in/services",
  },

  openGraph: {
    title: "Services | Nexora",
    description:
      "Discover the range of digital services offered by Nexora, including high-end digital product development and innovative solutions.",
    url: "https://nexora.in/services",
    type: "website",
    siteName: "Nexora",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Nexora",
      },
    ],
  },

  icons: {
    icon: [
      { url: "/nexora.png", sizes: "32x32", type: "image/png" },
      { url: "/nexora.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
export default function ServicesPage() {
  return (
    <div className="bg-[#0e0e0e] text-white">
      <main className="pt-32">
        {/* HERO */}
        <section className="relative text-center px-6 mb-32">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00b8e6]/10 rounded-full blur-[120px]" />
          </div>

          <h1 className="relative z-10 text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">
            Our Services.
          </h1>

          <p className="relative z-10 text-gray-400 max-w-2xl mx-auto text-xl">
            We architect high-performance digital ecosystems that bridge
            imagination and technical precision.
          </p>
        </section>

        {/* WEB DEVELOPMENT */}
        <section className="py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-[#1a1919] text-bb-yellow text-sm font-bold mb-6">
                ENGINEERING
              </div>

              <h2 className="text-5xl font-bold mb-6">Web Development</h2>

              <p className="text-gray-400 mb-8">
                We build robust, scalable web architectures optimized for
                performance, SEO, and conversion.
              </p>

              <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
                <li>• Business Websites</li>
                <li>• E-commerce</li>
                <li>• SaaS Platforms</li>
                <li>• Custom Apps</li>
              </ul>
            </div>

            <div className="bg-[#262626]/40 backdrop-blur-xl p-8 rounded-xl border border-white/10 shadow-[0_0_25px_rgba(227,247,0,0.1)]">
              <h3 className="font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3 text-sm">
                {["Next.js", "React", "Node.js", "Tailwind", "SQL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-black rounded-lg border border-white/10"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* APP DEVELOPMENT */}
        <section className="py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-[#262626]/40 backdrop-blur-xl p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Mobile Solutions</h3>
              <p className="text-gray-400">
                Native and cross-platform apps built for performance and UX.
              </p>
            </div>

            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-[#1a1919] text-bb-yellow text-sm font-bold mb-6">
                MOBILE
              </div>

              <h2 className="text-5xl font-bold mb-6">App Development</h2>

              <ul className="space-y-4 text-gray-300">
                <li>• iOS & Android Apps</li>
                <li>• React Native Apps</li>
                <li>• MVP Development</li>
                <li>• App UI/UX Design</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SOCIAL MEDIA */}
        <section className="py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-[#1a1919] text-bb-yellow  text-sm font-bold mb-6">
              GROWTH
            </div>

            <h2 className="text-5xl font-bold mb-4">Social Media Management</h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Elevating your brand presence across digital platforms.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {["Instagram Growth", "Content Design", "Ads Management"].map(
              (item) => (
                <div
                  key={item}
                  className="bg-[#262626]/40 backdrop-blur-xl p-8 rounded-xl border border-white/10 hover:border-[#e3f700]/30 transition"
                >
                  <h3 className="text-xl font-bold mb-4">{item}</h3>
                  <p className="text-gray-400 text-sm">
                    Strategic execution designed for growth and engagement.
                  </p>
                </div>
              ),
            )}
          </div>
        </section>
        {/* SEO */}
        <section className="py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-[#1a1919] text-bb-yellow text-sm font-bold mb-6">
                VISIBILITY
              </div>

              <h2 className="text-5xl font-bold mb-6">SEO Optimization</h2>

              <p className="text-gray-400 mb-8">
                Technical SEO, keyword research, and ranking strategies.
              </p>

              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="font-bold">Technical SEO</h4>
                  <p className="text-gray-500 text-sm">
                    Speed, structure, indexing optimization.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold">Keyword Research</h4>
                  <p className="text-gray-500 text-sm">
                    High-intent search targeting.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side — Image */}
            <div className="relative h-[400px] rounded-xl overflow-hidden border border-white/10">
              <img
                src="/seo.jpg"
                alt="SEO Optimization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </section>

        {/* LANDING PAGE */}
        <section className="py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side — Image */}
            <div className="relative h-[400px] rounded-xl overflow-hidden border border-white/10">
              <img
                src="/landing-page.jpg"
                alt="Landing Page Design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-[#1a1919] text-bb-yellow text-sm font-bold mb-6">
                CONVERSION
              </div>

              <h2 className="text-5xl font-bold mb-6">Landing Page Design</h2>

              <p className="text-gray-400 mb-8">
                High-impact landing pages engineered for conversion.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1a1919] p-6 rounded-xl">SaaS Pages</div>
                <div className="bg-[#1a1919] p-6 rounded-xl">Sales Funnels</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-32 border-t border-white/5">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Let’s Build Something Great
          </h2>

          <button className="bg-bb-yellow  text-black px-10 py-4 rounded-xl font-bold hover:shadow-[0_0_30px_rgba(227,247,0,0.3)]">
            Start a Project
          </button>
        </section>
      </main>
    </div>
  );
}
