import VerifyOtpForm from "@/components/forms/VerifyOtpForm";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";


export default function Page() {

  return (

    <section className="relative overflow-hidden">
      <Navbar />
 <Image
        src="/assets/AllVendorServices/background.png"
        alt="Background"
        fill
        className="object-cover -z-10 bg-[#010304]"
      />
      <VerifyOtpForm />
    </section>

  );

}
