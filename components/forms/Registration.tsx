"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { API_BASE_URL } from "@/lib/constants"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

import Link from "next/link"
import { toast } from "sonner"

export default function RegistrationForm() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validateForm = () => {
    if (!formData.fullName.trim())
      return "Full Name is required."

    if (!formData.email.trim())
      return "Email is required."

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email))
      return "Invalid email format."

    if (!formData.phone.trim())
      return "Phone number is required."

    if (!formData.password)
      return "Password is required."

    if (formData.password.length < 8)
      return "Password must be at least 8 characters."

    if (formData.password !== formData.confirmPassword)
      return "Passwords do not match."

    return null
  }

  
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setError(null)
  setSuccess(null)

  if (!navigator.onLine) {
    setError("No internet connection.")
    toast.error("No internet connection.")
    return
  }

  const validationError = validateForm()
  if (validationError) {
    setError(validationError)
    toast.error(validationError)
    return
  }

  try {
    setLoading(true)

    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      }),
    })

    const data = await response.json()

    /* -------------------------
       Error Handling (C5.1 / C5.2)
    -------------------------- */
    if (!response.ok) {
      let errorMessage = "Something went wrong."

      if (response.status === 409) {
        errorMessage = data?.message || "An account with this email already exists."
      }

      if (response.status === 422) {
        // Extract the first field error from `errors` object
        if (data?.errors) {
          const fieldErrors = Object.values(data.errors)
          if (fieldErrors.length > 0 && Array.isArray(fieldErrors[0])) {
            errorMessage = fieldErrors[0][0] // first error message
          }
        } else {
          errorMessage = data?.message || "Validation failed."
        }
      }

      if (response.status === 500) {
        errorMessage = data?.message || "Account creation failed. Try again."
      }

      setError(errorMessage)
      toast.error(errorMessage)
      return
    }

    /* -------------------------
       SUCCESS PATH (C5.3)
    -------------------------- */

    // Save session token
    localStorage.setItem("sessionToken", data.sessionToken)

    // Build full user object
    const userObject = {
      userId: data.userId,
      email: data.email,
      displayName: data.displayName,
      isVerified: data.isVerified ?? false,
    }

    // Store full user object
    localStorage.setItem("current_user", JSON.stringify(userObject))

    setSuccess("Account created successfully! Please verify your email with the OTP sent.")
    toast.success("Account created successfully! OTP sent to your email.")

    /* -------------------------
       Navigate to OTP (C6)
    -------------------------- */
    setTimeout(() => {
      router.push("/register/enter-otp")
    }, 1200)

  } catch (err: any) {
    const message = err.message || "Something went wrong."
    setError(message)
    toast.error(message)
  } finally {
    setLoading(false)
  }
}
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 py-10">
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
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="space-y-2">
            <Label className="text-neutral-50 font-semibold">
              Full Name
            </Label>
            <Input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
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
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter Username"
                className="bg-transparent border-neutral-50/30 text-white focus:border-blue-600"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-neutral-50 font-semibold">
                Phone Number
              </Label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
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
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
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
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Enter Confirm Password"
              className="bg-transparent border-neutral-50/30 text-white focus:border-blue-600"
            />
          </div>

          {/* Captcha (kept as-is) */}
          {/* <div className="flex items-center justify-between border border-neutral-50/30 rounded-md p-3">
            <div className="flex items-center gap-3">
              <Checkbox />
              <span className="text-neutral-50/60 text-sm">
                I am not a robot
              </span>
            </div>
            <div className="w-10 h-10 bg-neutral-400 rounded-sm" />
          </div> */}

          {/* Error / Success Messages */}
          {error && (
            <p className="text-red-500 text-sm font-medium">{error}</p>
          )}

          {success && (
            <p className="text-green-500 text-sm font-medium">{success}</p>
          )}

          {/* Register Button */}
          <Button
            type="submit"
            disabled={loading}
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
            {loading ? "Creating Account..." : "Register"}
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