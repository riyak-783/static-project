export default function RefundPolicy() {
  return (
    <div className="bg-[#0e0e0e] text-white">


      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="px-8 max-w-5xl mx-auto mb-20 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Refund <span className="text-[#e3f700]">Policy</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
            Transparency is at the heart of our services. Learn about our
            refund guidelines and cancellation terms.
          </p>
        </section>

        {/* Content */}
        <div className="px-8 max-w-5xl mx-auto space-y-24">
          {/* Notice */}
          <div className="bg-[#262626] rounded-xl p-8 border-l-4 border-[#e3f700]">
            <h3 className="text-[#e3f700] font-bold text-xl mb-4">
              Important Notice
            </h3>

            <p className="text-gray-300">
              Our digital services are customized projects. Once work or a
              milestone has started, costs associated with development are
              generally non-refundable.
            </p>
          </div>

          {/* Eligibility */}
          <section>
            <h2 className="text-3xl font-bold mb-12 text-center">
              Refund Eligibility
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Eligible */}
              <div className="bg-[#131313] p-10 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-[#e3f700]">
                  Eligible for Refund
                </h3>

                <ul className="space-y-3 text-gray-400">
                  <li>• Cancellation within 48 hours</li>
                  <li>• Double payments</li>
                  <li>• Billing errors</li>
                  <li>• Failure to deliver initial scope</li>
                </ul>
              </div>

              {/* Not Eligible */}
              <div className="bg-[#131313] p-10 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-red-400">
                  Non-Refundable
                </h3>

                <ul className="space-y-3 text-gray-400">
                  <li>• Approved milestones</li>
                  <li>• Consulting sessions delivered</li>
                  <li>• Third-party costs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Process */}
          <section>
            <h2 className="text-3xl font-bold mb-12">
              The Refund Process
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black border border-white/10 p-8 rounded-xl">
                <h4 className="text-xl font-bold mb-4">
                  Step 01
                </h4>
                <p className="text-gray-400">
                  Submit refund request via email with project ID and reason.
                </p>
              </div>

              <div className="bg-[#262626] p-8 rounded-xl">
                <h4 className="text-xl font-bold mb-4">
                  Step 02
                </h4>
                <p className="text-gray-400">
                  Request will be reviewed within 5 business days.
                </p>
              </div>

              <div className="bg-[#e3f700] p-8 rounded-xl text-black">
                <h4 className="text-xl font-bold mb-4">
                  Step 03
                </h4>
                <p>
                  Approved refunds are returned to original payment method
                  within 7–10 business days.
                </p>
              </div>
            </div>
          </section>

          {/* Support */}
          <section className="bg-[#262626] rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Still have questions?
            </h2>

            <p className="text-gray-400 mb-8">
              Contact our support team for clarification regarding refunds.
            </p>

            <div className="flex justify-center gap-4">
              <button className="bg-[#e3f700] text-black px-8 py-3 rounded-lg font-bold">
                Contact Support
              </button>

              <button className="bg-black px-8 py-3 rounded-lg font-bold border border-white/10">
                View Terms
              </button>
            </div>
          </section>
        </div>
      </main>

    </div>
  );
}