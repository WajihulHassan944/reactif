"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
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

      <div className="max-w-7xl mx-auto px-8 py-12">

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

          <div className="h-11 px-5 py-2.5 bg-white rounded-[100px] shadow-[0px_0px_85px_0px_rgba(255,255,255,1.00)] outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2.5">
  <Link href="/login" className="text-center justify-start text-zinc-800 font-bold font-hk text-[14px]">GET STARTED</Link>
</div>
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
        <div className="my-8 border-t border-white/10" />

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
            <Button onClick={()=>router.push('/login')}
              variant="outline"
              className="rounded-full border-white/30 text-white bg-transparent hover:bg-white/10 px-6"
            >
              Sign In
            </Button>

            <Button onClick={()=>router.push("/#contact")}
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
