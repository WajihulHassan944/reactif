import Container from "@/components/container";
import ContactFormSection from "@/components/Home/ContactFormSection";
import ContactSection from "@/components/Home/ContactSection";
import Hero from "@/components/Home/Hero";
import TailoredServices from "@/components/Home/TailoredServices";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Home() {
    return (
        <Container>
          <Hero />
          <TailoredServices />
          <WhyChooseUs />
          <ContactSection />
          <ContactFormSection />
        </Container>
    )
}
