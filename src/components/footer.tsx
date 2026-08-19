import Link from "next/link";
import Image from "next/image";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
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

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

const learningLinks = [
  { label: "AI & Technology", href: "/courses" },
  { label: "Business", href: "/courses" },
  { label: "Digital Skills", href: "/courses" },
  { label: "Professional Growth", href: "/courses" },
];

const supportLinks = [
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/contact" },
  { label: "Help", href: "/help" },
];

const socials = [
  {
    icon: InstagramIcon,
    href: "#",
    label: "Instagram",
    color: "text-[#E4405F]",
  },
  {
    icon: LinkedinIcon,
    href: "#",
    label: "LinkedIn",
    color: "text-[#0A66C2]",
  },
  {
    icon: YoutubeIcon,
    href: "#",
    label: "YouTube",
    color: "text-[#FF0000]",
  },
  {
    icon: FacebookIcon,
    href: "#",
    label: "Facebook",
    color: "text-[#1877F2]",
  },
  {
    icon: XIcon,
    href: "#",
    label: "X",
    color: "text-black",
  },
];

export function Footer() {
  return (
    // <footer className="border-t border-[#E5E7EB] bg-[#0F172A] px-5 pt-16 pb-8 md:px-16">
    <footer className="border-t border-[#F1F5F9] px-5 pt-16 pb-8 md:px-16">
      <div className="mx-auto max-w-[1440px]">
        {/* Top grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            
            <Link
           href="/"
           className="mb-4 inline-flex items-center gap-2 font-heading text-lg font-bold"
          >
          <Image
           src="/logo.png"
           alt="GrowBiz"
           width={32}
           height={32}
           className="h-8 w-8 object-contain scale-[1.7]"
          />

  <span className="text-black">
    GrowBiz<span className="text-[#7C3AED]"> Academy</span>
  </span>
</Link>

            <p className="mt-3 max-w-[300px] text-sm leading-relaxed text-[#48454d]">
              A premium learning platform with expert-led courses across
              technology, business, and professional growth.
            </p>

            {/* Socials */}
            <div className="mt-2 flex items-center gap-3 mb-3 ">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E5E7EB] bg-white transition-all hover:border-[#DDD6FE] hover:bg-[#EDE9FE]"
                >
                  <social.icon
                    className={`h-3.5 w-3.5 ${social.color}`}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold text-black">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#48454d] transition-colors hover:text-purple-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold text-black">
              Learning
            </h4>
            <ul className="flex flex-col gap-2.5">
              {learningLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#48454d] transition-colors hover:text-purple-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold text-black">
              Support
            </h4>
            <ul className="flex flex-col gap-2.5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#48454d] transition-colors hover:text-purple-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#b88ae8] pt-4 sm:flex-row">
          <p className="text-xs text-black">
            © 2026 GrowBiz Academy. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-black transition-colors hover:text-purple-600"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-black transition-colors hover:text-purple-600"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}