"use client"

import React from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

import Link from "next/link"



export default function RegistrationForm() {


  return (


    <section className="w-full min-h-screen flex items-center justify-center px-4 py-10">


      {/* Card */}


      <div
        className="
        w-full
        max-w-xl
        rounded-3xl
        border border-indigo-600
        backdrop-blur-sm
        bg-black/10
        p-6 sm:p-8 md:p-14 md:py-17
        flex flex-col gap-8
        "
      >


        {/* Header */}


        <div className="text-center space-y-2">


          <h1 className="
          bg-gradient-to-r from-[#F262B5] to-[#9F73F1]
          bg-clip-text text-transparent
          text-2xl sm:text-3xl md:text-4xl
          font-bold font-hk uppercase
          ">


            Create New Account


          </h1>



          <p className="text-neutral-50/60 text-sm sm:text-base font-semibold font-hk">


            Join ReactIf Printing and Design Today


          </p>


        </div>



        {/* Form */}


        <form className="space-y-6">


          {/* Full Name */}


          <div className="space-y-2">


            <Label className="text-neutral-50 font-semibold">


              Full Name


            </Label>


            <Input
              placeholder="Enter Full Name"
              className="bg-transparent border-neutral-50/30 text-white focus:border-blue-600"
            />


          </div>



          {/* Username + Phone */}


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


            <div className="space-y-2">


              <Label className="text-neutral-50 font-semibold">


                Username (Optional)


              </Label>


              <Input
                placeholder="Enter Username"
                className="bg-transparent border-neutral-50/30 text-white focus:border-blue-600"
              />


            </div>



            <div className="space-y-2">


              <Label className="text-neutral-50 font-semibold">


                Phone Number


              </Label>


              <Input
                placeholder="Enter Phone Number"
                className="bg-transparent border-neutral-50/30 text-white focus:border-blue-600"
              />


            </div>


          </div>



          {/* Email */}


          <div className="space-y-2">


            <Label className="text-neutral-50 font-semibold">


              Email


            </Label>


            <Input
              type="email"
              placeholder="Enter Your Email"
              className="bg-transparent border-neutral-50/30 text-white focus:border-blue-600"
            />


          </div>



          {/* Password */}


          <div className="space-y-2">


            <Label className="text-neutral-50 font-semibold">


              Password


            </Label>


            <Input
              type="password"
              placeholder="Enter Password"
              className="bg-transparent border-neutral-50/30 text-white focus:border-blue-600"
            />


          </div>



          {/* Confirm Password */}


          <div className="space-y-2">


            <Label className="text-neutral-50 font-semibold">


              Confirm Password


            </Label>


            <Input
              type="password"
              placeholder="Enter Confirm Password"
              className="bg-transparent border-neutral-50/30 text-white focus:border-blue-600"
            />


          </div>



          {/* Captcha */}


          <div className="flex items-center justify-between border border-neutral-50/30 rounded-md p-3">


            <div className="flex items-center gap-3">


              <Checkbox />


              <span className="text-neutral-50/60 text-sm">


                I am not a robot


              </span>


            </div>



            <div className="w-10 h-10 bg-neutral-400 rounded-sm" />


          </div>



          {/* Register Button */}


          <Button
            className="
            w-full
            bg-gradient-to-l
            from-blue-600
            via-cyan-600
            to-blue-700
            text-white
            text-base sm:text-lg
            font-semibold
            hover:opacity-90
            py-3
            "
          >


            Register


          </Button>



          {/* Login Link */}


          <p className="text-center text-sm sm:text-base font-semibold text-neutral-50/60">


            Already Have an Account?{" "}


            <Link href="/login" className="text-blue-600">


              Sign in


            </Link>


          </p>


        </form>


      </div>


    </section>


  )

}
