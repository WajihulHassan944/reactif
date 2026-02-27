"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Share2, User, Check, X } from "lucide-react";
import Link from "next/link";
import { API_BASE_URL } from "@/lib/constants";
import { toast } from "sonner";

interface UserProfile {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string,
  avatar: string | null;
  is_verified: boolean;
  created_at: string;
  updated_at: string;
}

const Profile = () => {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
const [deleting, setDeleting] = useState(false);
  // Static UI data (NOT from backend — preserved as requested)
  const bio =
    "Passionate automotive designer with over 8 years of experience in visual communication and branding. Specializing in futuristic vehicle concepts and digital showrooms.";


  // =========================
  // Fetch User Detail
  // =========================
useEffect(() => {
  const fetchUserDetail = async () => {
    const token = localStorage.getItem("sessionToken");

    if (!token) {
      toast.error("Session expired. Please login again.");
      router.push("/login");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/user-detail`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("sessionToken");
          localStorage.removeItem("current_user");
          toast.error("Session expired. Please login again.");
          router.push("/login");
          return;
        }

        throw new Error(result?.message || "Failed to load profile.");
      }

      const backendUser = result?.data;

      // Get existing stored user (to preserve isVerified)
      const storedUser = JSON.parse(
        localStorage.getItem("current_user") || "{}"
      );

      const mergedUser = {
        id: backendUser.id,
        name: backendUser.name,
        email: backendUser.email,
        phone: backendUser.contact_number,
        avatar: backendUser.profile_image,
        address:backendUser.address,
        created_at: backendUser.created_at,
        updated_at: backendUser.updated_at,

        // Preserve existing isVerified if already stored
        is_verified: storedUser.isVerified ?? false,
      };

      // Update localStorage (preserve isVerified)
      localStorage.setItem(
        "current_user",
        JSON.stringify({
          ...storedUser,
          ...mergedUser,
        })
      );

      // Update state
      setUser(mergedUser);

    } catch (error: any) {
      toast.error(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  fetchUserDetail();
}, []);

const handleDeleteAccount = async () => {
  const token = localStorage.getItem("sessionToken");

  if (!token) {
    toast.error("Session expired. Please login again.");
    router.push("/login");
    return;
  }

  const confirmed = window.confirm(
    "Are you absolutely sure? This action cannot be undone."
  );

  if (!confirmed) return;

  try {
    setDeleting(true);

    const response = await fetch(`${API_BASE_URL}/delete-user-account`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        confirmation: "DELETE",
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem("sessionToken");
        localStorage.removeItem("current_user");
        toast.error("Session expired. Please login again.");
        router.push("/login");
        return;
      }

      throw new Error(result?.message || "Failed to delete account.");
    }

    // ✅ Clear everything after successful delete
    localStorage.removeItem("sessionToken");
    localStorage.removeItem("current_user");

    toast.success("Account deleted successfully.");

    router.push("/");
  } catch (error: any) {
    toast.error(error.message || "Something went wrong.");
  } finally {
    setDeleting(false);
  }
};
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading profile...
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen w-full px-4 sm:px-6 lg:px-12 py-12 flex justify-center">
      <div className="w-full max-w-4xl backdrop-blur-md border border-indigo-600/40 rounded-2xl shadow-xl p-8 sm:p-8 text-white">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          {/* Left Side */}
          <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-start gap-5 w-full">

            {/* Avatar */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 p-[3px]">
                <img
                  src={user.avatar || "https://i.pravatar.cc/150?img=32"}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-4 border-slate-900"
                />
              </div>

              {/* Absolute Verified / Unverified Badge (ALWAYS RENDERED) */}
              <div className="absolute bottom-1 right-1 w-7 h-7 rounded-full flex items-center justify-center border-2 border-slate-900 bg-indigo-600">
                {user.is_verified ? (
                  <Check size={14} className="text-white" />
                ) : (
                  <X size={14} className="text-white" />
                )}
              </div>
            </div>

            {/* Name & Role */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold">
                {user.name}
              </h2>

              <p className="text-sm text-gray-400 mt-1">
                Senior Automotive Designer
              </p>

              <span className="inline-block mt-3 px-3 py-1 text-xs font-medium rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/40">
                {user.is_verified ? "Active Member" : "Inactive Member"}
              </span>
            </div>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center justify-center lg:justify-end gap-3">
            <Link
              href="/profile/edit"
              className="w-[125px] flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-l from-blue-600 via-cyan-600 to-blue-700 hover:opacity-90 transition"
            >
              <Pencil size={16} />
              Edit Profile
            </Link>

            <button className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
              <Share2 size={18} />
            </button>
          </div>
        </div>

        <div className="my-8 border-t border-white/10" />

        {/* ================= PERSONAL INFO ================= */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <User size={18} className="text-blue-400" />
            <h3 className="text-lg font-semibold">
              Personal Information
            </h3>
          </div>

          <div className="space-y-6 text-sm">

            {[
              { label: "Full Name", value: user.name },
              { label: "Email Address", value: user.email },
              { label: "Phone Number", value: user.phone || "Not provided" },
              { label: "Address", value: user.address }, // Preserved static
            ].map((item, index) => (
              <div key={index}>
                <p className="text-gray-400 uppercase text-xs tracking-wide mb-1">
                  {item.label}
                </p>
                <p className="text-white break-words">
                  {item.value}
                </p>
                <div className="mt-3 border-t border-white/10" />
              </div>
            ))}

            {/* Bio (PRESERVED as requested) */}
            <div>
              <p className="text-gray-400 uppercase text-xs tracking-wide mb-3">
                Bio
              </p>
              <textarea
                className="w-full bg-slate-800/60 border border-pink-500/40 rounded-xl p-4 text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500/50 resize-none transition"
                rows={4}
                defaultValue={bio}
              />
            </div>
          </div>
        </div>

        {/* ================= DANGER ZONE ================= */}
        <div className="mt-12">
          <p className="text-red-500 text-xs uppercase tracking-widest font-semibold mb-4">
            Danger Zone
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
            <div>
              <h4 className="font-semibold text-gray-900">
                Delete Account
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Once you delete your account, there is no going back.
                Please be certain.
              </p>
            </div>

           <button
  onClick={handleDeleteAccount}
  disabled={deleting}
  className="text-red-600 font-semibold hover:text-red-700 transition disabled:opacity-50"
>
  {deleting ? "Deleting..." : "Delete Account"}
</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;