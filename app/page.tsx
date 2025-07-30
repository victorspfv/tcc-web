import CTA2 from "@/components/landing/cta2";
import Hero2 from "@/components/landing/hero2";
import Welcome2 from "@/components/landing/welcome2";
import Instagram2 from "@/components/landing/instagram2";
import FeatureSection from "@/components/landing/feature-section";
import SectionContent from "@/components/landing/section-content";

export default function Home() {
    return (
        <main className="pt-[56px] lg:pt-[72px]">
            <Hero2 />
            <Welcome2 />
            <SectionContent /> 
            <FeatureSection />
            <Instagram2 />
            <CTA2 bgColor="bg-pblue" shadowColor="shadow-ppink" />
        </main>
    );
}
