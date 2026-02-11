"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactFormSection() {
  return (
    <section className="relative py-28 overflow-hidden text-white">

      {/* ================= BACKGROUND ================= */}
      <Image
        src="/assets/hero/Gradient.png"
        alt="bg"
        fill
        priority
        className="object-cover -z-10"
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <p className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm mb-6">
            Get in Touch
          </p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            START YOUR{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              PROJECT
            </span>{" "}
            TODAY
          </h1>

          <p className="text-white/60 mt-4">
            Let’s Discuss How We Can Transform Your Vision Into Reality
          </p>
        </div>

        {/* ================= MAIN CONTAINER ================= */}
        <div className="relative rounded-3xl border border-white/10 backdrop-blur-2xl bg-black/40 overflow-hidden">

          <div className="grid md:grid-cols-2">

            {/* ================================================= */}
            {/* LEFT SIDE */}
            {/* ================================================= */}
            <div className="p-12 border-r border-white/10 space-y-10">

              <h2 className="text-2xl font-semibold tracking-wide">
                CONTACT INFORMATION
              </h2>

              <Info icon={<Phone size={18} />} title="Phone">
                +31 1 23 45 67 89
              </Info>

              <Info icon={<Mail size={18} />} title="Email">
                reactif@gmail.com
              </Info>

              <Info icon={<MapPin size={18} />} title="Address">
                123 Avenue Des Champs, Paris, France
              </Info>

              {/* Trusted */}
             <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6">
  <p className="text-sm text-white/60 mb-4">Trusted By</p>

  <div className="flex items-center">

    {[1, 2, 3, 4].map((i) => (
      <Image
        key={i}
        src="/assets/hero/user.png"
        alt="user"
        width={38}
        height={38}
        className="rounded-full border-2 border-black -ml-3 first:ml-0"
      />
    ))}

    {/* 500+ badge */}
    <span className="ml-3 px-3 h-9 flex items-center rounded-full border border-white/30 text-white text-xs font-medium">
      500+
    </span>
  </div>
</div>

            </div>

            {/* ================================================= */}
            {/* RIGHT SIDE (CONIC GRADIENT) */}
            {/* ================================================= */}
            <div className="relative p-12">

              {/* Figma conic gradient background */}
              <div
                className="absolute inset-0 opacity-70 -z-10"
                style={{
                  background: `
                    conic-gradient(
                      from 197.32deg at 58.87% 96.79%,
                      #FFAC89 0deg,
                      rgba(242,98,181,0) 125.18deg,
                      #5FC5FF 193.41deg,
                      #8155FF 236.07deg,
                      #789DFF 259.95deg,
                      rgba(159,115,241,0) 311.08deg,
                      #FFAC89 360deg
                    )
                  `,
                  filter: "blur(80px)", // key for soft glow
                }}
              />

              {/* ================= FORM ================= */}
              <div className="space-y-6">

                <GlassInput placeholder="Full Name" />

                <div className="grid grid-cols-2 gap-4">
                  <GlassInput placeholder="Email" />
                  <GlassInput placeholder="Phone" />
                </div>

                <Select>
                  <SelectTrigger className="glass-input">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="design">UI/UX</SelectItem>
                    <SelectItem value="app">Mobile App</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Message"
                  className="glass-input min-h-[130px]"
                />

                <Button className="w-full rounded-xl bg-white text-black hover:bg-white/90 h-12">
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function Info({
  icon,
  title,
  children,
}: any) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-pink-500/10 border border-pink-500/30">
        {icon}
      </div>
      <div>
        <p className="text-sm text-white/50">{title}</p>
        <p className="font-medium">{children}</p>
      </div>
    </div>
  );
}

function GlassInput(props: any) {
  return (
    <Input
      {...props}
      className="glass-input"
    />
  );
}
