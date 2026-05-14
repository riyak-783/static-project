import {
  FiPocket,
  FiEye,
} from "react-icons/fi";
export default function AboutMissionVision() {
  return (
      <section id="vision" className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-[#131313] p-12 rounded-xl">
              <FiPocket className="bg-bb-yellow text-4xl mb-6" />
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-400 text-lg">
                To empower visionaries by building digital structures that
                aren't just functional, but legendary.
              </p>
            </div>

            <div className="bg-[#1a1919] p-12 rounded-xl">
              <FiEye className="bg-bb-yellow text-4xl mb-6" />
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-gray-400 text-lg">
                We envision a future where the digital experience is seamless,
                quiet, and profoundly authoritative.
              </p>
            </div>
          </div>
        </section>
  )}