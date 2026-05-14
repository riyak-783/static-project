export default function Privacy() {
  return (
    <div className="bg-[#0e0e0e] text-white">
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="px-8 mb-20 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
            <div className="max-w-2xl">
              <span className="text-[#e3f700] uppercase text-xs font-bold mb-4 block">
                Transparency First
              </span>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.9]">
                Privacy <br /> Policy
              </h1>
            </div>

            <div className="text-gray-400 max-w-xs">
              <p className="text-sm">
                Last updated: October 24, 2023. Our commitment to your data
                security and digital sovereignty.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="px-8 max-w-7xl mx-auto space-y-20">
          {/* Introduction */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Introduction</h2>
            <p className="text-gray-400 mb-4">
              At Nexora, we respect your privacy and are committed to protecting
              your personal information.
            </p>
            <p className="text-gray-400">
              This Privacy Policy explains how we collect, use, and protect your
              information when you use our website and services.
            </p>
          </div>

          {/* Data Collection */}
          <div className="bg-[#131313] p-10 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">Data Collection</h2>

            <p className="text-gray-400 mb-6">
              We collect information to provide better services to our users.
            </p>

            <ul className="space-y-4 text-gray-400">
              <li>• Name and email address</li>
              <li>• Contact information</li>
              <li>• IP address and browser information</li>
              <li>• Website usage analytics</li>
            </ul>
          </div>

          {/* Usage */}
          <div>
            <h2 className="text-3xl font-bold mb-6">How We Use Your Data</h2>

            <ul className="space-y-4 text-gray-400">
              <li>• To provide and improve our services</li>
              <li>• To communicate with you</li>
              <li>• To improve website performance</li>
              <li>• For security and fraud prevention</li>
            </ul>
          </div>

          {/* User Rights */}
          <div className="bg-[#262626] p-10 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">User Rights</h2>

            <p className="text-gray-400 mb-4">
              You have the right to access, update, or delete your personal
              information.
            </p>

            <ul className="space-y-2 text-gray-400">
              <li>• Access your data</li>
              <li>• Request deletion</li>
              <li>• Correct inaccurate data</li>
            </ul>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Cookie Policy</h2>

            <p className="text-gray-400">
              We use cookies to improve your browsing experience and analyze
              website traffic.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 mt-32 max-w-5xl mx-auto">
          <div className="bg-[#e3f700] p-12 rounded-2xl text-center">
            <h3 className="text-3xl font-black text-black mb-6">
              Have Questions About Your Privacy?
            </h3>

            <p className="text-black/70 mb-8">
              Our team is ready to answer your questions.
            </p>

            <a
              href="mailto:privacy@Nexora.com"
              className="bg-black text-white px-10 py-4 rounded-xl font-bold"
            >
              Contact Privacy Team
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
