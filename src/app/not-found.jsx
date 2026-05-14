"use client";
import Link from "next/link";
import { FiMenu, FiTerminal } from "react-icons/fi";

export default function NotFoundPage() {
  return (
    <div className="bg-[#0e0e0e] text-white font-sans overflow-x-hidden">

      {/* Main */}
      <main className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-32 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex items-center justify-center">
          <div className="w-[800px] h-[800px] rounded-full bg-[#e3f700]/10 blur-[120px]" />
          <div className="absolute w-[1200px] h-[600px] bg-gradient-to-b from-[#e3f700]/20 to-transparent blur-[160px] rotate-45" />
        </div>

        {/* 404 Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
          <div className="relative group">
            <h1 className="text-[12rem] md:text-[24rem] font-extrabold tracking-tighter leading-none bg-gradient-to-b from-[#e3f700] to-[#0e0e0e] bg-clip-text text-transparent select-none transition-transform duration-700 group-hover:scale-[1.02]">
              404
            </h1>

            <div className="absolute inset-0 flex items-center justify-center text-[12rem] md:text-[24rem] font-extrabold text-[#e3f700]/10 blur-xl">
              404
            </div>
          </div>

          <div className="mt-[-2rem] md:mt-[-4rem] space-y-6">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Lost in the Monolith?
            </h2>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
              The page you are looking for has been decommissioned or moved to another node.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#e3f700] text-black rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(227,247,0,0.3)] active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Return to Base</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>

              {/* <Link
                href="#"
                className="flex items-center gap-2 text-[#e3f700] hover:text-white transition-colors font-medium border-b border-[#e3f700]/20 hover:border-white py-1"
              >
                <FiTerminal />
                <span>View System Status</span>
              </Link> */}
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}