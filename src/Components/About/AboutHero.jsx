import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-bb-yellow-light rounded-full blur-[120px]" />

        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-bb-yellow-light rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl text-center">
        <span className="text-bb-yellow uppercase tracking-[0.3em] text-xs mb-6 block">
          The Digital Architect
        </span>

        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8">
          Helping Businesses <span className="text-bb-yellow">Thrive</span> In
          The Digital World
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          From social media management to custom websites, Nexora creates modern
          digital solutions for brands that wants to grow online.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#vision"
            className="px-8 py-4 bg-bb-yellow text-black rounded-xl font-bold text-lg glow-yellow transition-all"
          >
            Our Vision
          </Link>

          <Link
            href="/portfolio"
            className="px-8 py-4 bg-[#1a1919] text-white rounded-xl border border-white/10 hover:bg-[#262626] transition-all"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
