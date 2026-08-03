// components/ExploreGrid.tsx
import Link from "next/link";
import Image from "next/image";
import {
  Settings,
  Wrench,
  Ship,
  Headphones,
  Building2,
  BarChart3,
  Landmark,
  Phone,
  Mail,
  MapPin,
  LucideIcon,
} from "lucide-react";

interface ExploreCard {
  title: string;
  description: string[];
  href: string;
  image: string;
  icons?: LucideIcon[];
}

const CARDS: ExploreCard[] = [
  {
    title: "About Us",
    description: ["Engineering solutions.", "Reliable support.", "Stronger partnerships."],
    href: "/about",
    image: "/images/explore/about-us.jpg",
  },
  {
    title: "Services",
    description: ["Comprehensive marine", "solutions tailored to", "your needs."],
    href: "/services",
    image: "/images/explore/services.jpg",
    icons: [Settings, Wrench, Ship, Headphones],
  },
  {
    title: "Products",
    description: ["Quality products.", "Proven performance.", "Trusted worldwide."],
    href: "/products",
    image: "/images/explore/products.jpg",
  },
  {
    title: "Industries",
    description: ["Serving diverse industries", "with expertise and", "commitment."],
    href: "/industries",
    image: "/images/explore/industries.jpg",
    icons: [Ship, Building2, BarChart3, Landmark],
  },
  {
    title: "Projects",
    description: ["Successful projects.", "Delivering value.", "Building trust."],
    href: "/projects",
    image: "/images/explore/projects.jpg",
  },
  {
    title: "Gallery",
    description: ["Moments from our", "operations and", "achievements."],
    href: "/gallery",
    image: "/images/explore/gallery.jpg",
  },
  {
    title: "Careers",
    description: ["Join our team.", "Grow your career.", "Sail towards success."],
    href: "/careers",
    image: "/images/explore/careers.jpg",
  },
  {
    title: "Contact Us",
    description: ["Let's connect.", "We're ready", "to assist you."],
    href: "/contact",
    image: "/images/explore/contact.jpg",
    icons: [Phone, Mail, MapPin],
  },
];

export default function ExploreGrid() {
  return (
    <section className="bg-navy">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {CARDS.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group relative h-64 sm:h-72 overflow-hidden"
          >
            {/* Background photo */}
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Fade from navy (left) into the photo (right), so text stays readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/10" />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center pl-8 sm:pl-10 pr-6 max-w-md">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-wide">
                {card.title.toUpperCase()}
              </h3>
              <span className="w-10 h-0.5 bg-teal mt-3 mb-4" />
              <div className="text-sm text-white/80 leading-relaxed space-y-0.5">
                {card.description.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              {card.icons && (
                <div className="flex gap-4 mt-5">
                  {card.icons.map((Icon, i) => (
                    <Icon key={i} size={18} className="text-white/70" />
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}