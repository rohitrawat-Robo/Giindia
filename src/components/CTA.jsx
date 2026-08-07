import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Glow */}
      <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl"></div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-16 text-center shadow-2xl">

          <span className="inline-flex rounded-full bg-green-500/15 px-5 py-2 text-sm font-semibold text-green-400">
            Transform Your Business with AI
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Ready to Accelerate Your
            <span className="text-green-500"> Digital Transformation?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Empower your organization with AI, High Performance Computing,
            Enterprise Infrastructure, Cloud Solutions, and Digital Innovation.
            Let's build the future together.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <button className="flex items-center gap-2 rounded-xl bg-green-500 px-8 py-4 font-semibold text-black transition hover:bg-green-400">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-green-500 hover:bg-white/5">
              <PhoneCall size={18} />
              Contact Us
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}