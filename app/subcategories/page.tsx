import Navbar from "@/components/navbar/navbar";
import { SectionHeader } from "@/components/shared/SectionHeader";
import SubCategories from "@/components/SubCategories/SubCategories";
import GlobalBackground from "@/hooks/GlobalBackground";

const Page = () => {
  return (
    <>
      {/* ================= MAIN SECTION ================= */}
      <section className="relative overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Background */}
        <GlobalBackground />

        <div className="mx-auto px-4 sm:px-6 md:px-30 py-12 md:py-20">
          {/* Header */}
          <SectionHeader
            title={
              <>
                <span
                  style={{
                   color:'#F5F5F5'
                  }}
                >
                  Visual Advertising
                </span>
              </>
            }
            description="Transform your fleet into a mobile billboard. Our premium automotive visual solutions ensure your brand gets noticed on the road with durable, high-impact designs."  
          />
          <SubCategories />
        </div>
      </section>
    </>
  );
};

export default Page;