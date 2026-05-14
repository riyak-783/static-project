export default function TermsAndCondition() {
  return (
    <div className="bg-[#0e0e0e] text-white">
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <header className="mb-20">
            <div className="inline-block px-3 py-1 rounded-full bg-[#262626] text-[#e3f700] text-xs font-bold uppercase mb-6">
              Legal Documentation
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
              Terms of <span className="text-[#e3f700]">Service</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-2xl">
              These terms govern your access to and use of Nexora's digital
              services and platform.
            </p>
          </header>

          {/* Sections */}
          <div className="space-y-16">
            {/* Acceptance */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Acceptance of Terms</h2>
              <p className="text-gray-400">
                By engaging Nexora Digital for any digital service, consulting,
                or platform access, you agree to these Terms and Conditions.
              </p>
            </section>

            {/* Scope */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Scope of Services</h2>

              <ul className="space-y-3 text-gray-400">
                <li>• Digital product development</li>
                <li>• Cloud infrastructure architecture</li>
                <li>• UI/UX design and branding</li>
                <li>• Software engineering</li>
              </ul>
            </section>

            {/* IP */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Intellectual Property</h2>

              <p className="text-gray-400">
                All deliverables created for the client become the property of
                the client after full payment. Nexora retains ownership of all
                frameworks, systems, and internal tools used.
              </p>
            </section>

            {/* Payments */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Payment & Billing</h2>

              <ul className="space-y-3 text-gray-400">
                <li>• Net-15 payment terms</li>
                <li>• Late payments incur interest fees</li>
                <li>• Work may pause on overdue invoices</li>
              </ul>
            </section>

            {/* Liability */}
            <section>
              <h2 className="text-2xl font-bold mb-6">
                Limitation of Liability
              </h2>

              <p className="text-gray-400">
                Nexora shall not be liable for indirect or consequential
                damages. Liability is limited to the total amount paid by the
                client.
              </p>
            </section>
          </div>

          {/* Contact */}
          <div className="mt-24 p-12 bg-[#e3f700] rounded-2xl text-black">
            <h3 className="text-3xl font-bold mb-4">
              Questions regarding these terms?
            </h3>

            <p className="mb-8">
              Our legal team is available to clarify any clauses.
            </p>

            <a
              href="mailto:legal@Nexora.digital"
              className="bg-black text-white px-8 py-3 rounded-full font-bold inline-block"
            >
              Contact Legal Team
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
