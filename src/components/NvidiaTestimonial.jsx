import React from "react";
import { Star } from "lucide-react";
import images from "../../public/images.js";


// ----------------------------------------------------------------------
// 1. TESTIMONIAL DATA
// ----------------------------------------------------------------------

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Dean",
    organization: "Delhi Public College",
    image: images.user,
    testimonial:
      "G6 ERP has completely transformed the way we manage our college operations. Attendance, student records, communication, and reports are now much easier to handle.",
  },
  {
    name: "Priya Verma",
    role: "University Administrator",
    organization: "St. Xavier's College",
    image: images.user,
    testimonial:
      "The platform is simple, fast, and incredibly useful. Our administrative workload has reduced significantly since implementing G6 ERP.",
  },
  {
    name: "Amit Kumar",
    role: "Director",
    organization: "Modern University",
    image: images.user,
    testimonial:
      "G6 ERP gives us everything we need in one place. The real-time dashboards and automated reports have made decision-making much easier.",
  },
  {
    name: "Neha Singh",
    role: "Vice Dean",
    organization: "Green Valley University",
    image: images.user,
    testimonial:
      "What impressed us most is how easy G6 ERP is for faculty and staff to use. We were able to get everyone onboarded quickly.",
  },
  {
    name: "Vikram Mehta",
    role: "Campus Manager",
    organization: "Bright Future University",
    image: images.user,
    testimonial:
      "From attendance management to student information, G6 ERP has helped us streamline our daily operations and save valuable time.",
  },
  {
    name: "Anjali Gupta",
    role: "Dean",
    organization: "Sunrise International University",
    image: images.user,
    testimonial:
      "We finally have a centralized system for managing our college. G6 ERP has improved transparency, communication, and overall efficiency.",
  },
];

// ----------------------------------------------------------------------
// 2. CLIENT LOGO DATA
// ----------------------------------------------------------------------

const clients = [
  { name: "ABESIT, Ghaziabad", image: images.abesitp },
  { name: "BML University", image: images.bmlp },
  { name: "BMS, Bengaluru", image: images.bmsp },
  { name: "CSJMU, Kanpur", image: images.csjmp },
  { name: "DBU, Punjab", image: images.dbup },
  { name: "Galgotias University", image: images.gal },
  { name: "GBU, Greater Noida", image: images.gbup },
  { name: "GLBITM, Greater Noida", image: images.glbitmp },
  { name: "Gujarat Technological University, Ahmedabad", image: images.gtup },
  { name: "KIET, Ghaziabad", image: images.kiet },
  { name: "Presidency University, Bengaluru", image: images.presidency },
  { name: "Sharda University", image: images.sharda },
  { name: "SRM, AP", image: images.srm },
];

// ----------------------------------------------------------------------
// 3. TESTIMONIAL CARD
// ----------------------------------------------------------------------

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="group w-[350px] shrink-0 rounded-2xl border border-[rgba(8,28,58,0.08)] bg-white p-6 shadow-[0_12px_32px_-12px_rgba(8,28,58,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00a63e]/30 hover:shadow-[0_20px_60px_-20px_rgba(8,28,58,0.18)] md:w-[400px]">
      <div className="mb-4 flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <Star key={index} size={16} className="fill-[#00a63e] text-[#00a63e]" />
        ))}
      </div>

      <p className="mb-6 text-[15px] leading-7 text-[#6B7F9E]">
        &ldquo;{testimonial.testimonial}&rdquo;
      </p>

      <div className="border-t border-[#E8EDF3] pt-5">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-11 w-11 rounded-full object-cover ring-2 ring-[#00a63e]/10"
            />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-[#00a63e]" />
          </div>

          <div className="min-w-0">
            <h4 className="truncate text-sm font-extrabold text-[#081C3A]">
              {testimonial.name}
            </h4>
            <p className="truncate text-xs font-medium text-[#6B7F9E]">
              {testimonial.role} &middot; {testimonial.organization}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// 4. CLIENT LOGO CARD
// ----------------------------------------------------------------------

const ClientLogoCard = ({ client }) => {
  return (
    <div className="flex h-24 w-40 shrink-0 items-center justify-center rounded-2xl border border-[rgba(8,28,58,0.08)] bg-white p-4 shadow-[0_12px_32px_-12px_rgba(8,28,58,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00a63e]/30 hover:shadow-[0_20px_60px_-20px_rgba(8,28,58,0.18)] sm:h-28 sm:w-48 md:h-32 md:w-56">
      <img
        src={client.image}
        alt={client.name}
        className="max-h-full max-w-full object-contain"
        loading="lazy"
      />
    </div>
  );
};

// ----------------------------------------------------------------------
// 5. MAIN SECTION
// ----------------------------------------------------------------------

const NvidiaTestimonial = () => {
  const clientRow = [...clients, ...clients];
  const testimonialRowOne = [...testimonials, ...testimonials];
  const testimonialRowTwo = [
    ...testimonials.slice(3),
    ...testimonials.slice(0, 3),
    ...testimonials.slice(3),
    ...testimonials.slice(0, 3),
  ];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#f9fafb] py-24 md:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#00a63e]/[0.05] blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#00D4FF]/[0.04] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(#081C3A 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* CLIENT LOGO MARQUEE */}
      <div className="relative z-10 mx-auto mb-20 max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#00a63e]">
            Trusted By
          </p>
          <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-[#081C3A] sm:text-4xl">
            Powering Colleges & Universities Across India
          </h2>
        </div>

        <div className="group relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#f9fafb] to-transparent md:w-24" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#f9fafb] to-transparent md:w-24" />

          <div className="flex w-max animate-client-marquee gap-5 will-change-transform group-hover:[animation-play-state:paused]">
            {clientRow.map((client, index) => (
              <ClientLogoCard key={`client-${index}`} client={client} />
            ))}
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="relative z-10">
        <div className="mx-auto mb-14 max-w-3xl px-6 text-center">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#00a63e]">
            Customer Testimonials
          </p>
          <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-[#081C3A] sm:text-4xl">
            Trusted by Colleges.
            <span className="block text-[#00a63e]">Loved by Faculty.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#6B7F9E]">
            See how colleges and universities are using G6 ERP
            to simplify operations, improve efficiency, and create a better
            experience for everyone.
          </p>
        </div>

        <div className="relative space-y-6">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#f9fafb] to-transparent md:w-32" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#f9fafb] to-transparent md:w-32" />

          <div className="group flex w-max animate-testimonial-left gap-6 will-change-transform hover:[animation-play-state:paused]">
            {testimonialRowOne.map((testimonial, index) => (
              <TestimonialCard key={`row-one-${index}`} testimonial={testimonial} />
            ))}
          </div>

          <div className="group flex w-max animate-testimonial-right gap-6 will-change-transform hover:[animation-play-state:paused]">
            {testimonialRowTwo.map((testimonial, index) => (
              <TestimonialCard key={`row-two-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes client-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-client-marquee {
          animation: client-marquee 35s linear infinite;
        }

        @keyframes testimonial-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-testimonial-left {
          animation: testimonial-left 50s linear infinite;
        }

        @keyframes testimonial-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-testimonial-right {
          animation: testimonial-right 50s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-client-marquee,
          .animate-testimonial-left,
          .animate-testimonial-right {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
};

export default NvidiaTestimonial;