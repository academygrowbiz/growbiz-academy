"use client";

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const experts = [
  {
    name: "Theresa Webb",
    role: "Application Support Analyst Lead",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    image: "/therasa.png",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Courtney Henry",
    role: "Director, Undergraduate Analytics and Planning",
    description:
      "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    image: "/courtney.png",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Albert Flores",
    role: "Career Educator",
    description:
      "Former PM for Linear, Lambda School, and On Deck.",
    image: "/albert.png",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Marvin McKinney",
    role: "Co-op & Internships Program & Operations Manager",
    description:
      "Former frontend dev for Linear, Coinbase, and Postscript.",
    image: "/marvin.png",
    socials: { twitter: "#", linkedin: "#" },
  },
];

export function Experts() {
  return (
    <section className="relative bg-[#FFFFFF] px-5 py-20 md:px-16 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#7C3AED]">
            Our Experts
          </p>
          <h2 className="font-heading text-3xl font-bold text-[#0F172A] md:text-4xl lg:text-[40px]">
            Learn From Industry Experts
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[#475569]">
            Instructors from all over the world share their knowledge and
            expertise to help you grow your skills and abilities.
          </p>
        </div>

        {/* Expert Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experts.map((expert) => (
            <div
              key={expert.name}
              className="group flex flex-col items-center rounded-[20px] border border-[#E5E7EB] bg-[#FFFFFF] px-5 pb-6 pt-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#DDD6FE] hover:bg-[#7C3AED]/[0.04] hover:shadow-[0_8px_30px_rgba(124,58,237,0.12)]"
            >
              {/* Avatar */}
              <div className="mb-4 h-20 w-20 overflow-hidden rounded-full border border-[#E5E7EB]">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="mb-1 font-heading text-base font-semibold text-[#0F172A]">
                {expert.name}
              </h3>

              {/* Role */}
              <p className="mb-3 text-xs font-medium text-[#7C3AED]">
                {expert.role}
              </p>

              {/* Description */}
              <p className="mb-5 flex-1 text-sm leading-relaxed text-[#64748B]">
                {expert.description}
              </p>

              {/* Socials */}
              <div className="flex items-center gap-3">
                <a
                  href={expert.socials.twitter}
                  aria-label={`${expert.name} Twitter`}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E5E7EB] bg-[#FFFFFF] text-[#64748B] transition-all hover:border-[#DDD6FE] hover:bg-[#EDE9FE] hover:text-[#7C3AED]"
                >
                  <TwitterIcon className="h-3.5 w-3.5 text-black" />
                </a>
                <a
                  href={expert.socials.linkedin}
                  aria-label={`${expert.name} LinkedIn`}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E5E7EB] bg-[#FFFFFF] text-[#64748B] transition-all hover:border-[#DDD6FE] hover:bg-[#EDE9FE] hover:text-[#7C3AED]"
                >
                  <LinkedinIcon className="h-3.5 w-3.5 text-[#0A66C2]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
