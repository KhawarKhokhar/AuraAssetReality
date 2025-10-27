import Image from "next/image";
import HeroSection from "@/components/Home/HeroSection";
import { AboutSection } from "@/components/Home/About";
import { FeaturedProperties } from "@/components/Home/FeaturesProperties";
import { WhyChooseUs } from "@/components/Home/WhyChooseUs";
import { OurProcess } from "@/components/Home/OurProcess";
import { Testimonials } from "@/components/Home/Testonomials";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <FeaturedProperties/>
    <WhyChooseUs/>
    <OurProcess/>
    <Testimonials/>
    </>
  );
}
