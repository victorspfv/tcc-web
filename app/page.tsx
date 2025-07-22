//import ComingSoon from "@/components/landing/coming-soon";
import Hero from "@/components/landing/hero";
import CTA2 from "@/components/landing/cta2";
//import Hero2 from "@/components/landing/hero2";
//import Instagram from "@/components/landing/instagram";
//import Welcome from "@/components/landing/welcome";
import Welcome2 from "@/components/landing/welcome2";
import Instagram2 from "@/components/landing/instagram2";

export default function Home() {
    return (
        <main className="pt-[56px] lg:pt-[72px]">
            <Hero />
            <Welcome2 />
            <CTA2 bgColor="bg-pblue" shadowColor="shadow-ppink" />
            <Instagram2 />
        </main>  
    );
}
