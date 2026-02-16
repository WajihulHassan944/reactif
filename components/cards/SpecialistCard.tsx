"use client";

import {
  FaStar,
  FaMapMarkerAlt,
  FaTrophy,
  FaArrowRight,
} from "react-icons/fa";

interface SpecialistCardProps {
  name: string;
  role: string;
  rating: number;
  reviews: number;
  location: string;
  tags: string[];
  experience: string;
  price: string;
  avatarColor?: string;
}

export default function SpecialistCard({
  name,
  role,
  rating,
  reviews,
  location,
  tags,
  experience,
  price,
  avatarColor = "#F472B6",
}: SpecialistCardProps) {

  return (

    <div className="w-full bg-[#0F172A] rounded-xl border border-white/20 p-4 sm:p-5 md:p-6 font-hk flex flex-col gap-5 md:gap-6 relative">


      {/* HEADER */}


      <div className="flex justify-between items-start gap-3">


        <div className="flex items-center gap-3 md:gap-4 min-w-0">


          {/* Avatar */}


          <div
            className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white shadow-inner flex-shrink-0"
            style={{
              background: avatarColor,
              boxShadow:
                "inset 0px 2px 4px rgba(255,255,255,0.4), inset 0px -2px 4px rgba(0,0,0,0.2)",
            }}
          >

            <span className="text-base md:text-lg font-bold">

              {name.charAt(0)}

            </span>

          </div>



          {/* Name Role */}


          <div className="min-w-0">


            <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold capitalize truncate">

              {name}

            </h3>


            <p className="text-stone-300 text-xs font-medium capitalize">

              {role}

            </p>


          </div>


        </div>



        {/* Rating */}


        <div className="flex items-center gap-1 flex-shrink-0">


          <FaStar className="text-yellow-400" size={14} />


          <span className="text-white font-semibold text-sm md:text-base">

            {rating}

          </span>


          <span className="text-stone-300 text-xs">

            ({reviews})

          </span>


        </div>


      </div>



      {/* Location */}


      <div className="flex items-center gap-2 text-stone-300 text-xs">

        <FaMapMarkerAlt size={12} />

        {location}

      </div>



      {/* Tags */}


      <div className="flex gap-2 flex-wrap">


        {tags.map((tag, index) => (

          <span
            key={index}
            className="px-2 md:px-3 py-1 text-[11px] md:text-xs text-stone-300 border border-stone-500 rounded-md"
          >

            {tag}

          </span>

        ))}


      </div>



      {/* Divider */}


      <div className="border-t border-stone-500/40" />



      {/* Experience Price */}


      <div className="flex justify-between items-start gap-4">


        <div>


          <p className="text-stone-300 text-xs mb-1">

            Experience

          </p>


          <div className="flex items-center gap-2 text-white font-semibold text-sm md:text-base">


            <FaTrophy className="text-amber-500" size={14} />

            {experience}


          </div>


        </div>



        <div>


          <p className="text-stone-300 text-xs mb-1">

            Start From

          </p>


          <div className="flex items-center gap-2 text-white font-semibold text-sm md:text-base">


            <span className="text-emerald-500">$</span>

            {price}


          </div>


        </div>


      </div>



      {/* Bottom Bar */}


      <div className="absolute bottom-0 left-0 w-full h-10 border-t border-stone-500/40 bg-[#0F172A] rounded-b-xl flex items-center justify-between px-4 md:px-6 text-xs">


        <div className="flex items-center gap-2 text-emerald-500">


          <span className="w-2 h-2 bg-emerald-500 rounded-full" />

          Available


        </div>



        <div className="flex items-center gap-2 text-stone-300 hover:text-white cursor-pointer transition">


          View Portfolio


          <FaArrowRight size={12} />


        </div>


      </div>



      {/* Spacer */}


      <div className="h-10" />


    </div>

  );

}
