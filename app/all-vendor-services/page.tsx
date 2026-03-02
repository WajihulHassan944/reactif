import DeliveryService from "@/components/AllVendorServices/DeliveryService";
import SpecialistCard from "@/components/cards/SpecialistCard";
import Navbar from "@/components/navbar/navbar";
import { SectionHeader } from "@/components/shared/SectionHeader";
import GlobalBackground from "@/hooks/GlobalBackground";


const specialists = [
  {
    name: "React Studio",
    role: "Premium Specialist",
    rating: 4.9,
    reviews: 128,
    location: "Geneva, CH",
    tags: ["Luxury PPF", "Ceramic", "Tints"],
    experience: "12+ Years",
    price: "150.00",
    avatarColor: "#F472B6",
  },
  {
    name: "React Studio",
    role: "Premium Specialist",
    rating: 4.9,
    reviews: 128,
    location: "Geneva, CH",
    tags: ["Luxury PPF", "Ceramic", "Tints"],
    experience: "12+ Years",
    price: "150.00",
    avatarColor: "#60A5FA",
  },
  {
    name: "React Studio",
    role: "Premium Specialist",
    rating: 4.9,
    reviews: 128,
    location: "Geneva, CH",
    tags: ["Luxury PPF", "Ceramic", "Tints"],
    experience: "12+ Years",
    price: "150.00",
    avatarColor: "#818CF8",
  },
  {
    name: "React Studio",
    role: "Premium Specialist",
    rating: 4.9,
    reviews: 128,
    location: "Geneva, CH",
    tags: ["Luxury PPF", "Ceramic", "Tints"],
    experience: "12+ Years",
    price: "150.00",
    avatarColor: "#2563EB",
  },
];


const page = () => {

  return (

    <>


      {/* ================= MAIN SECTION ================= */}

      <section className="relative overflow-hidden">


        <Navbar />


        {/* Background */}
<GlobalBackground />



        <div className="mx-auto px-4 sm:px-6 md:px-30 py-12 md:py-20">


          {/* Header */}


          <SectionHeader

            badgeText="Our Commitment"

            title={
              <>
                SELECT A{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #F262B5 0%, #9F73F1 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  SPECIALIST
                </span>
              </>
            }

            description="Choose a certified vendor to explore their specific protection packages and designs."

          />



          {/* Grid */}


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-10 mt-10 md:mt-16">


            {specialists.map((specialist, index) => (

              <SpecialistCard
                key={index}
                {...specialist}
              />

            ))}


          </div>


        </div>


      </section>




      {/* ================= DELIVERY SERVICE ================= */}


      <div className="bg-[#010304] px-4 sm:px-6 md:px-30 pb-16 md:pb-30">


        <DeliveryService />


      </div>


    </>

  );

};


export default page;
