import ComingSoon from "@/components/landing/coming-soon";
import Hero2 from "@/components/landing/hero2";
import Instagram from "@/components/landing/instagram";
import Welcome from "@/components/landing/welcome";

export default function Home() {
    return (
        <main className="pt-[56px] lg:pt-[72px]">
            <Hero2 />
            <Welcome />
            <ComingSoon />
            <Instagram />
        </main>  
    );
}
