import { FiCheck, FiMessageCircle } from "react-icons/fi";
import data from "@/Data/pricing.json";
import { Constant } from "@/Data/Constant";
export default function PricingSection() {
  return (
    <div className="bg-[#0e0e0e] text-white">
      <main className="pt-32">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 whitespace-pre-line">
            {data.hero.title}
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            {data.hero.subtitle}
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-7xl mx-auto px-6 pb-32">
          <div className="grid md:grid-cols-3 gap-8">
            {data.plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-xl flex flex-col p-8 border ${
                  plan.highlight
                    ? "bg-[#262626] border-2 border-[#e3f700]/30 scale-105"
                    : "bg-[#131313] border-white/10"
                }`}
              >
                {/* Tag */}
                {plan.tag && (
                  <div className="absolute top-0 right-0 bg-bb-yellow text-black px-4 py-1 text-xs font-black rounded-bl-xl">
                    {plan.tag}
                  </div>
                )}

                <h3
                  className={`text-sm uppercase mb-2 ${
                    plan.highlight ? "text-bb-yellow" : "text-gray-400"
                  }`}
                >
                  {plan.name}
                </h3>
                {plan.domain && (
                  <p className="text-xs text-bb-yellow mb-3 font-medium">
                    {plan.domainText}
                  </p>
                )}

                <div
                  className={`font-extrabold mb-6 ${
                    plan.highlight ? "text-5xl" : "text-4xl"
                  }`}
                >
                  {plan.price}
                </div>

                <ul className="space-y-4 mb-12 flex-grow text-gray-400">
                  {plan.features.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <FiCheck className="text-bb-yellow" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${Constant.Company.whatsapp}?text=${encodeURIComponent(
                    `Hi, I want to discuss about ${plan.name} package (Price: ${plan.price})`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center py-4 rounded-xl font-semibold transition ${
                    plan.highlight
                      ? "bg-bb-yellow text-black hover:scale-105"
                      : "bg-[#262626] hover:bg-[#333]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto px-6 mb-32">
          <div className="relative bg-[#111110] rounded-2xl border border-white/8 overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(37,211,102,0.06),transparent_70%)]" />

            <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center p-8 lg:p-12">
              {/* Left — CTA */}
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] text-xs font-medium px-3 py-1 rounded-full mb-5 tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full" />
                  Online now
                </div>

                <h4 className="text-3xl font-medium text-white mb-3 leading-tight">
                  {data.contact.title}
                </h4>
                <p className="text-white/45 text-sm leading-relaxed mb-8 max-w-lg">
                  {data.contact.desc}
                </p>

                <div className="flex items-center gap-6 flex-wrap">
                  <a
                    href={`https://wa.me/${Constant.Company.phones[0]}`}
                    className="inline-flex items-center gap-2.5 bg-[#25D366] text-white px-7 py-3.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
                  >
                    <svg
                      className="w-[18px] h-[18px]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12.004 0C5.374 0 0 5.373 0 12.004c0 2.117.552 4.107 1.518 5.835L.057 23.999l6.305-1.654A11.954 11.954 0 0012.004 24C18.627 24 24 18.627 24 12.004 24 5.373 18.627 0 12.004 0zm0 21.818a9.807 9.807 0 01-5.001-1.368l-.36-.214-3.724.976.994-3.62-.235-.372A9.79 9.79 0 012.188 12c0-5.414 4.406-9.818 9.816-9.818 5.41 0 9.818 4.404 9.818 9.818 0 5.413-4.408 9.818-9.818 9.818z" />
                    </svg>
                    Chat on WhatsApp
                  </a>

                  <a
                    href={`mailto:${Constant.Company.email}`}
                    className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white/85 transition-colors"
                  >
                    Or send an email
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right — Stat cards */}
              <div className="flex flex-row lg:flex-col gap-3 min-w-[200px]">
                {[
                  { label: "Response time", value: "Within 1 hour" },
                  { label: "Availability", value: "Mon – Sat, 10–5" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="bg-white/[0.04] border border-white/[0.08] rounded-2xl px-5 py-4 flex-1 lg:flex-none"
                  >
                    <p className="text-white/35 text-[11px] uppercase tracking-widest mb-1">
                      {label}
                    </p>
                    <p className="text-white text-sm font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
