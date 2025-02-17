
export const Stats = () => {
  return (
    <section className="py-24 bg-[#0FA0CE] text-white">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
          {[
            ["2M+", "Active Users"],
            ["$500M+", "Transactions Analyzed"],
            ["98%", "Customer Satisfaction"],
            ["24/7", "Expert Support"],
          ].map(([number, label], index) => (
            <div
              key={index}
              className="animate-fadeIn transform hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{number}</div>
              <div className="text-white/90">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
