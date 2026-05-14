export default function CookiePolicy() {
  return (
    <div className="bg-[#0e0e0e] text-white">
      {/* Hero */}
      <header className="pt-48 pb-24 px-8 text-left">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#e3f700] uppercase tracking-[0.3em] text-xs font-bold mb-6 block">
            Legal Architecture
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
            Cookie <span className="text-[#e3f700]">Policy</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
            This policy explains how we use cookies and tracking technologies to
            improve your experience and analyze website performance.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 space-y-4">
              <p className="text-xs text-gray-500 uppercase mb-6">Navigation</p>

              <nav className="flex flex-col gap-4 border-l border-white/10 pl-6">
                <a className="text-[#e3f700] font-bold text-sm">Overview</a>
                <a className="text-gray-400 hover:text-white text-sm">
                  Cookie Types
                </a>
                <a className="text-gray-400 hover:text-white text-sm">
                  Management
                </a>
                <a className="text-gray-400 hover:text-white text-sm">
                  Updates
                </a>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-9 space-y-24">
            {/* Overview */}
            <section>
              <div className="bg-[#131313] p-8 rounded-xl">
                <h2 className="text-3xl font-bold mb-6">What Are Cookies?</h2>

                <p className="text-gray-400 mb-4">
                  Cookies are small data files stored on your device that help
                  websites remember information about your visit.
                </p>

                <p className="text-gray-400">
                  They allow us to improve website performance, remember
                  preferences, and provide analytics.
                </p>
              </div>
            </section>

            {/* Types */}
            <section>
              <h2 className="text-3xl font-bold mb-6">
                Cookie Classifications
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#262626] p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Strictly Necessary</h3>
                  <p className="text-gray-400 text-sm">
                    Required for security, authentication, and website
                    functionality.
                  </p>
                </div>

                <div className="bg-[#262626] p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">
                    Analytics & Performance
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Helps measure traffic and improve performance.
                  </p>
                </div>

                <div className="bg-[#262626] p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Functional</h3>
                  <p className="text-gray-400 text-sm">
                    Remembers preferences like language and region.
                  </p>
                </div>

                <div className="bg-[#262626] p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Marketing</h3>
                  <p className="text-gray-400 text-sm">
                    Used for advertising and tracking campaigns.
                  </p>
                </div>
              </div>
            </section>

            {/* Table */}
            <section>
              <h3 className="text-2xl font-bold mb-6">Specific Cookies</h3>

              <div className="overflow-x-auto border border-white/10 rounded-xl">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#262626]">
                    <tr>
                      <th className="px-6 py-4">Name</th>
                      <th className="px-6 py-4">Origin</th>
                      <th className="px-6 py-4">Purpose</th>
                      <th className="px-6 py-4">Duration</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-6 py-4 text-[#e3f700]">_px_session</td>
                      <td className="px-6 py-4">First Party</td>
                      <td className="px-6 py-4">Maintains session state</td>
                      <td className="px-6 py-4">Session</td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 text-[#e3f700]">
                        _ga_analytics
                      </td>
                      <td className="px-6 py-4">Google</td>
                      <td className="px-6 py-4">Analytics tracking</td>
                      <td className="px-6 py-4">24 Months</td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 text-[#e3f700]">_li_id</td>
                      <td className="px-6 py-4">LinkedIn</td>
                      <td className="px-6 py-4">Marketing attribution</td>
                      <td className="px-6 py-4">90 Days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Manage */}
            <section className="bg-[#131313] p-12 rounded-xl">
              <h2 className="text-3xl font-bold mb-4">
                Manage Your Preferences
              </h2>

              <p className="text-gray-400 mb-8 max-w-2xl">
                You can disable cookies through your browser settings or manage
                preferences through our settings portal.
              </p>

              <div className="flex gap-4">
                <button className="bg-[#e3f700] text-black px-8 py-3 rounded-lg font-bold">
                  Open Preferences
                </button>

                <button className="bg-[#262626] px-8 py-3 rounded-lg font-bold">
                  Browser Settings Guide
                </button>
              </div>
            </section>

            {/* Updates */}
            <section className="border-t border-white/10 pt-8">
              <p className="text-gray-500 text-sm">
                Nexora reserves the right to update this Cookie Policy at any
                time. Please review this page periodically.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
