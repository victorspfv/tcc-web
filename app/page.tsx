import CTA2 from "@/components/landing/cta2";
import Hero2 from "@/components/landing/hero2";
import Welcome2 from "@/components/landing/welcome2";
import Instagram from "@/components/landing/instagram";

export default function Home() {
    return (
        <main className="pt-[56px] lg:pt-[72px]">
            <Hero2 />
            <Welcome2 />
            <CTA2 bgColor="bg-pblue" shadowColor="shadow-ppink" />
            <Instagram />
        </main>
    );
}
