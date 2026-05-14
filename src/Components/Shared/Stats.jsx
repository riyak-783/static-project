export default function Stats() {
  return (
    <section className="py-20 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {[
          ["50+", "Projects Delivered"],
          ["20+", "Happy Clients"],
          ["15", "Design Awards"],
          ["100%", "Success Rate"],
        ].map((stat, i) => (
          <div key={i}>
            <div className="text-5xl font-black text-[#e3f700] mb-2">
              {stat[0]}
            </div>
            <div className="text-gray-400 uppercase tracking-widest text-xs font-bold">
              {stat[1]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
