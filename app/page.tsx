import CTA2 from "@/components/landing/cta2";
import Hero2 from "@/components/landing/hero2";
import Instagram from "@/components/landing/instagram";
import Welcome3 from "@/components/landing/welcome3";

export default function Home() {
    return (
        <main className="pt-[56px] lg:pt-[104px]">
            <Hero2 />
            <Welcome3 />
            <CTA2 bgColor="bg-pblue"/>
            <Instagram />
        </main>
    );
}
