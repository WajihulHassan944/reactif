"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <Image
        src="/assets/footer/background.png"
        alt="footer bg"
        fill
        priority
        className="object-cover -z-10"
      />

      <div className="max-w-7xl mx-auto px-8 py-20">

        {/* ================= TOP GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold leading-tight">
              Reactif Printing & Design <br /> Platform
            </h2>

            <p className="text-white/60 max-w-md">
              Transforming visions into reality through premium printing
              and design solutions.
            </p>

            <Button
              className="rounded-full bg-white text-black hover:bg-white/90 px-6"
            >
              GET STARTED
            </Button>
          </div>

          {/* RIGHT LINKS */}
          <div className="grid grid-cols-3 gap-10 text-sm">

            <FooterColumn
              title="Services"
              links={[
                "Automotive",
                "Visual Advertising",
                "Signalétique",
                "Apparel",
                "Accessories",
              ]}
            />

            <FooterColumn
              title="Company"
              links={[
                "About Us",
                "Careers",
                "Blogs",
                "Portfolio",
                "Contact Us",
              ]}
            />

            <FooterColumn
              title="Support"
              links={[
                "Help Center",
                "FAQ",
                "Contact Support",
                "Terms of Service",
                "Privacy Policy",
              ]}
            />

          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-12 border-t border-white/10" />

        {/* ================= BOTTOM ROW ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Social */}
          <div className="flex items-center gap-5">
            <span className="text-sm text-white/60">Follow us</span>

            <SocialIcon><Twitter size={16} /></SocialIcon>
            <SocialIcon><Facebook size={16} /></SocialIcon>
            <SocialIcon><Instagram size={16} /></SocialIcon>
            <SocialIcon><Youtube size={16} /></SocialIcon>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="rounded-full border-white/30 text-white bg-transparent hover:bg-white/10 px-6"
            >
              Sign In
            </Button>

            <Button
              variant="outline"
              className="rounded-full border-white/30 text-white bg-transparent hover:bg-white/10 px-6"
            >
              Contact Us
            </Button>
          </div>

        </div>
      </div>
    </footer>
  );
}

/* ================= COMPONENTS ================= */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold">{title}</h4>

      <ul className="space-y-2 text-white/60">
        {links.map((link) => (
          <li
            key={link}
            className="hover:text-white cursor-pointer transition"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ children }: any) {
  return (
    <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition cursor-pointer">
      {children}
    </div>
  );
}
