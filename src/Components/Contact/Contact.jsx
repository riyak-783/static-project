"use client";
import { Constant } from "@/Data/Constant";
import { FiArrowRight, FiMessageCircle } from "react-icons/fi";
import { formatPhone } from "../../../public/js/helpers";
import toast from "react-hot-toast";

export default function Contact() {
 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      }),
    });

    if (!res.ok) throw new Error();

    toast.success("Your query has been sent ✅");
    e.target.reset();
  } catch (error) {
    toast.error("There was a problem. Try again ❌");
  }
};
  return (
    <div className="bg-[#0e0e0e] text-white">
      <main className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        {/* Hero */}
        <header className="mb-12 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6 leading-tight">
            Initiate <span className="text-bb-yellow text-black">Contact</span>.
          </h1>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl">
            Ready to architect your digital product? Our team is ready to help
            turn your vision into reality.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Form */}
          <section className="lg:col-span-7 bg-[#131313] p-5 sm:p-6 md:p-10 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <input
                name="name"
                placeholder="Full Name"
                className="w-full bg-black border-b border-white/10 p-3 md:p-4 text-sm md:text-base focus:outline-none focus:border-[#e3f700]"
              />

              <input
                name="email"
                placeholder="Email Address"
                className="w-full bg-black border-b border-white/10 p-3 md:p-4 text-sm md:text-base focus:outline-none focus:border-[#e3f700]"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                className="w-full bg-black border-b border-white/10 p-3 md:p-4 text-sm md:text-base focus:outline-none focus:border-[#e3f700]"
              />

              <textarea
                name="message"
                placeholder="Your Project Brief"
                rows="4"
                className="w-full bg-black border-b border-white/10 p-3 md:p-4 text-sm md:text-base focus:outline-none focus:border-[#e3f700]"
              />

              {/* Buttons */}
              <div className="flex flex-col md:flex-row gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto justify-center bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-[1.02] transition"
                >
                  Send Message <FiArrowRight />
                </button>

                <a
                  href={`https://wa.me/${Constant.Company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto justify-center bg-bb-yellow text-black px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-[1.02] transition"
                >
                  WhatsApp <FiMessageCircle />
                </a>
              </div>
            </form>
          </section>

          {/* Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <section className="bg-[#262626] p-5 sm:p-6 md:p-8 rounded-xl">
              <h3 className="text-bb-yellow text-xs md:text-sm uppercase mb-6 md:mb-8">
                Contact Info
              </h3>

              <div className="space-y-5 md:space-y-6 text-gray-400 text-sm md:text-base">
                <div>
                  <p className="text-white font-bold">Office</p>
                  <p>Sultanpur, INDIA</p>
                </div>

                <div>
                  <p className="text-white font-bold">Email</p>
                  <a
                    href={`mailto:${Constant.Company.email}`}
                    className="text-gray-400 hover:text-bb-yellow transition-all duration-300 relative group inline-block"
                  >
                    {Constant.Company.email}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-bb-yellow transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </div>
                <div>
                  <p className="text-white font-bold">Phone</p>
                  <a
                    href={`tel:${Constant.Company.phones[0]}`}
                    className="text-gray-400 hover:text-bb-yellow transition-all duration-300 relative group inline-block"
                  >
                    {formatPhone(Constant.Company.phones[0])}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-bb-yellow transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
