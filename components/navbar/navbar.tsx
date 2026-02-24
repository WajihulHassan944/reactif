"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter for programmatic navigation

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  const handleContactClick = () => {
    // Navigate to the homepage and scroll to the contact section
    router.push("/#contact");
  };

  // Close sidebar handler
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      {/* OUTER BAR */}
      <nav className="w-full flex justify-center py-4 md:py-6 px-4 md:px-10">
        <div className="w-[95%] border border-[#FFFFFF3D] rounded-[14px] px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          {/* LEFT SECTION */}
          <div className="flex items-center gap-3 md:gap-5">
            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={26} />
            </button>

            {/* LOGO */}
            <div className="flex items-center gap-2">
              <Link href="/">
                <Image
                  src="/assets/logo.png"
                  alt="Reactif"
                  width={120}
                  height={30}
                  className="w-[100px] md:w-[120px]"
                />
              </Link>
            </div>

            {/* DESKTOP NAV LINKS */}
            <div className="hidden md:flex items-center gap-8 text-sm text-white">
              <div className="relative inline-block w-max">
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-32 h-16 pointer-events-none">
                  <Image
                    src="/assets/elipse.png"
                    alt="elipse background"
                    fill
                    className="object-contain"
                  />
                </div>
                <Link
                  href="#services"
                  className="relative px-4 py-1.5 rounded-full bg-transparent text-gray-300 z-10"
                >
                  Services
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <span className="hover:text-blue-400 transition cursor-pointer text-gray-300">
                  Automotive
                </span>
                <span className="text-[12px] bg-[#E2E2E2] px-3 py-[3px] rounded-full text-black font-[400]">
                  New
                </span>
              </div>

              <Link
                href="/catalog"
                className="hover:text-blue-400 transition text-gray-300"
              >
                Catalog
              </Link>

              {/* Updated Contact Link */}
              <span
                onClick={handleContactClick}
                className="hover:text-blue-400 transition text-gray-300 cursor-pointer"
              >
                Contact
              </span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Cart */}
            <button onClick={()=>router.push('/order/management')} className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white/10 transition">
              <ShoppingCart size={19} />
            </button>

            {/* Get Started */}
            <Link
              href="/login"
              className="hidden md:block bg-black text-[#E2E2E2] px-5 py-2 rounded-full bg-neutral-800 transition text-[15px]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={closeSidebar}
          />
          {/* Sidebar */}
          <div className="absolute left-0 top-0 w-[280px] h-full bg-white shadow-xl">
            {/* Close */}
            <div className="flex justify-end p-4">
              <button onClick={closeSidebar}>
                <X size={26} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-5 px-6 text-[15px]">
              <Link href="/dashboard" onClick={closeSidebar}>
                Dashboard
              </Link>
              <Link href="/automotive" onClick={closeSidebar}>
                Automotive
              </Link>
              <Link href="/services" onClick={closeSidebar}>
                Services
              </Link>
              <Link href="/catalog" onClick={closeSidebar}>
                Catalog
              </Link>
              <Link href="/contact" onClick={closeSidebar}>
                Contact
              </Link>
              <button className="mt-4 bg-black text-white py-2 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;