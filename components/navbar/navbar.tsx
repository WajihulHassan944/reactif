"use client";

import { useState } from "react";
import Link from "next/link"; // Next.js Link component for routing
import { Menu, ShoppingCart, X } from "lucide-react"; // Icons for menu and close button
import Image from "next/image";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* OUTER BAR */}
 <nav className="w-full flex justify-center py-6 px-10">
  <div className="w-[95%]  border border-[#FFFFFF3D] rounded-[14px] px-6 py-4 flex items-center justify-between">

  <div className="flex items-center gap-5">
      <div className="flex items-center gap-2">
      <Image
        src="/assets/logo.png"
        alt="Reactif"
        width={120}
        height={30}
      />
    </div>

    {/* CENTER: NAV LINKS */}
    <div className="hidden md:flex items-center gap-8 text-sm text-white">



<div className="relative inline-block w-max">
  {/* Elipse background */}
  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-32 h-16 pointer-events-none">
    <Image
      src="/assets/elipse.png"
      alt="elipse background"
      fill
      className="object-contain"
    />
  </div>

  {/* Button */}
  <Link
    href="/dashboard"
    className="relative px-4 py-1.5 rounded-full bg-transparent text-gray-300 z-10"
  >
    Dashboard
  </Link>
</div>


   

      {/* Automotive NEW badge */}
      <div className="flex items-center gap-2">
        <span className="hover:text-blue-400 transition cursor-pointer text-gray-300">
          Automotive
        </span>
        <span className="text-[12px] bg-[#E2E2E2] px-3 py-[3px] rounded-full text-black font-[400]">
          New
        </span>
      </div>

      <Link href="/services" className="hover:text-blue-400 transition text-gray-300">
        Services
      </Link>

      <Link href="/catalog" className="hover:text-blue-400 transition text-gray-300">
        Catalog
      </Link>

      <Link href="/contact" className="hover:text-blue-400 transition text-gray-300">
        Contact
      </Link>
    </div>

  </div>
    {/* RIGHT SIDE */}
    <div className="flex items-center gap-4">

      {/* Cart Icon Circle */}
      <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white/10 transition">
       <ShoppingCart size={19} />
      </button>

      {/* Get Started Button */}
      <button className="hidden md:block bg-black text-[#E2E2E2] px-5 py-2 rounded-full bg-neutral-800 transition text-[15px] ">
        Get Started
      </button>

    </div>
  </div>
</nav>


      {/* MOBILE SIDEBAR */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* OVERLAY */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setIsSidebarOpen(false)}
          />

          {/* SIDEBAR */}
          <div className="absolute right-0 top-0 w-64 h-full bg-white shadow-lg">
            {/* CLOSE BUTTON */}
            <div className="flex justify-end p-4">
              <button
                className="p-2 rounded-lg"
                onClick={() => setIsSidebarOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            {/* SIDEBAR LINKS */}
            <div className="flex flex-col gap-6 px-6 py-4 text-sm">
              <Link href="/dashboard" className="text-gray-700">
                Dashboard
              </Link>
              <Link href="/automotive" className="text-gray-700">
                Automotive
              </Link>
              <Link href="/new" className="text-gray-700">
                New
              </Link>
              <Link href="/services" className="text-gray-700">
                Services
              </Link>
              <Link href="/catalog" className="text-gray-700">
                Catalog
              </Link>
              <Link href="/contact" className="text-gray-700">
                Contact
              </Link>

              {/* BUTTON */}
              <button className="bg-blue-500 text-white py-2 px-5 rounded-full mt-4">
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
