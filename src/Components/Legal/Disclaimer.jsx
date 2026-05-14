export default function Disclaimer() {
  return (
    <div className="bg-[#0e0e0e] text-white">
      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#262626] text-[#e3f700] text-xs font-bold uppercase mb-6">
            Legal Governance
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
            Disclaimer & Compliance
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl">
            This document outlines the legal limitations and expectations for
            all digital interactions within our platform and services.
          </p>
        </header>

        {/* Sections */}
        <section className="space-y-12">
          {/* Liability */}
          <div className="bg-[#131313] p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Information Liability</h2>

            <p className="text-gray-400 mb-4">
              All materials and services provided are for informational purposes
              only. We do not guarantee accuracy or completeness.
            </p>

            <p className="text-gray-400">
              Your use of information on this website is at your own risk.
            </p>
          </div>

          {/* External Links */}
          <div className="border border-white/10 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">External Assets</h2>

            <p className="text-gray-400">
              This website may include links to external websites. We are not
              responsible for their content or security.
            </p>
          </div>

          {/* Advice */}
          <div className="bg-[#262626] p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Professional Advice</h2>

            <p className="text-gray-400 italic">
              The information on this website is not a substitute for legal,
              financial, or technical advice.
            </p>
          </div>

          {/* IP */}
          <div className="bg-[#131313] p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>

            <p className="text-gray-400">
              All assets, designs, and code belong to Nexora unless otherwise
              stated. Unauthorized reproduction is prohibited.
            </p>
          </div>

          {/* Errors */}
          <div className="bg-[#131313] p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Errors and Omissions</h2>

            <p className="text-gray-400 mb-4">
              Information is provided "as is" with no warranties.
            </p>

            <ul className="text-gray-400 space-y-2">
              <li>• No warranties of any kind</li>
              <li>• No guarantee of accuracy</li>
              <li>• No guarantee of virus-free systems</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <footer className="mt-32 pt-20 border-t border-white/10 text-center">
          <h4 className="text-3xl font-bold mb-4">
            Have questions about our terms?
          </h4>

          <p className="text-gray-400 mb-8">
            Contact our compliance team for clarification.
          </p>

          <a
            href="mailto:legal@Nexora.com"
            className="text-[#e3f700] font-bold"
          >
            legal@Nexora.com
          </a>
        </footer>
      </main>
    </div>
  );
}
