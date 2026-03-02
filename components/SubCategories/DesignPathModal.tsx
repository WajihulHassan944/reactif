"use client";

import React from "react";
import { X, PencilRuler, Brush } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const DesignPathModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#333333CC] animate-fadeBackdrop"
        onClick={onClose}
      />

      {/* Wrapper (important for scroll fix) */}
      <div className="flex min-h-screen items-start md:items-center justify-center px-4 py-10">
        
        {/* Modal Container */}
        <div className="relative w-full max-w-4xl bg-[#0B0F19] rounded-3xl border border-gray-800 p-6 md:p-12 animate-scaleIn">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 bg-gray-800 rounded-full p-2 text-gray-400 hover:text-white transition"
          >
            <X size={20} />
          </button>

          {/* Content Wrapper */}
          <div className="w-full flex flex-col items-center gap-8 md:gap-10">
            
            {/* Title */}
            <div className="text-center">
              <h2 className="text-white text-2xl md:text-3xl font-bold leading-9">
                Choose Your Design Path
              </h2>
            </div>

            {/* Cards */}
            <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8">
              
              {/* CARD 1 */}
              <div className="flex-1 p-6 md:p-8 bg-black/50 rounded-3xl border border-gray-800 flex flex-col justify-between items-center text-center">
                
                <div className="w-20 h-24 pb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gray-900 rounded-3xl border border-gray-800 flex items-center justify-center">
                    <PencilRuler size={28} className="text-pink-400" />
                  </div>
                </div>

                <div className="pb-3">
                  <h3 className="text-white text-xl md:text-2xl font-bold">
                    I have a design
                  </h3>
                </div>

                <div className="max-w-xs pb-8">
                  <p className="text-gray-400 text-sm md:text-base leading-6">
                    Upload your print-ready files. Perfect for designers and
                    agencies who already have their artwork prepared.
                  </p>
                </div>

                <button className="w-full h-11 px-6 bg-pink-400 rounded-full flex items-center justify-center hover:opacity-90 transition">
                  <span className="text-white text-lg md:text-xl font-semibold">
                    Select
                  </span>
                </button>
              </div>

              {/* CARD 2 */}
              <div className="flex-1 p-6 md:p-8 bg-black/50 rounded-3xl border border-gray-800 flex flex-col justify-between items-center text-center">
                
                <div className="w-20 h-24 pb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gray-900 rounded-3xl border border-gray-800 flex items-center justify-center">
                    <Brush size={28} className="text-sky-300" />
                  </div>
                </div>

                <div className="pb-3">
                  <h3 className="text-white text-xl md:text-2xl font-bold">
                    I need a designer
                  </h3>
                </div>

                <div className="max-w-xs pb-8">
                  <p className="text-gray-400 text-sm md:text-base leading-6">
                    Let our expert team create a custom design for you. We'll
                    work with you to bring your vision to life.
                  </p>
                </div>

                <button className="w-full h-11 px-6 bg-sky-300 rounded-full flex items-center justify-center hover:opacity-90 transition">
                  <span className="text-white text-lg md:text-xl font-semibold">
                    Select
                  </span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-scaleIn {
          animation: scaleIn 0.25s ease-out forwards;
        }

        .animate-fadeBackdrop {
          animation: fadeBackdrop 0.2s ease-out forwards;
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeBackdrop {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default DesignPathModal;