export default function AboutIntro() {
  return (
    <section className="py-24 px-6 bg-[#131313]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
            Redefining the Digital Monolith
          </h2>

          <div className="space-y-6 text-gray-400 text-lg">
            <p>
              At Nexora, we believe that the digital world has become too
              cluttered. We see ourselves as digital architects, stripping away
              the unnecessary noise to reveal the luminous monolith within your
              brand's potential.
            </p>
            <p>
              Founded in 2020, we've pivoted away from the agency factory model.
              We choose depth over volume, craftsmanship over templates, and
              innovation over the status quo.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 rounded-xl overflow-hidden bg-[#262626]">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJVNmjkgg6eMdVFB3MJiRyeCTpoN6_CnfwSpFX5sJbEgyYqRPV8d0iOQt5dEdxtRyJ1JDIQufvv6_cZRRxEodrrKbyz35Bt-mGuAdMvbtPZeRCGKk5NUt2za41Z_a_gzGgbfO3gAkw6Tjw8iyY_KO2E7Qr8YCfpaFxoygyJ_LdqRy4mbyLTbFDt8n18zKu_2UjVv7_VJkcV699WbD3gcV82TrUHSKAM0O-1l-643aYATHqXUSxES02VTiEueWwqXmKpeqU4KvXd37A"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
}
