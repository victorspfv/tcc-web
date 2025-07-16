import Image from "next/image";
import HeaderPage from "@/components/landing/header-page";

export default function AboutPage() {
    return (
        <main className="pt-[56px] lg:pt-[72px]">
            {/* Hero Section */}
            <HeaderPage title="About Us" />
            {/* About Section */}
            <section className="py-10 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-start gap-6 lg:flex-row">
                        <div className="flex w-full flex-col items-start justify-start gap-6 md:gap-24 lg:w-1/2">
                            <div className="pr-6">
                                <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:mb-10 lg:text-6xl">
                                    Our Mission
                                </h2>
                                <p className="mb-9 lg:text-xl">
                                    The Closet Clique empowers girls through closet sharing by creating trusted,
                                    school-based communities that promote sustainability, style, and connection.
                                    It&apos;s an easy, fun way to access outfits for every occasion while encouraging
                                    young women to embrace entrepreneurship and community spirit.
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={"/assets/images/img1.webp"}
                                    alt="about 1"
                                    className="bg-white shadow-lg p-2 aspect-[0.7] w-full object-cover md:w-1/2 hidden lg:block responsive-image"
                                />
                                <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={"/assets/images/img2.webp"}
                                        alt="about 2"
                                        className="bg-white shadow-lg p-2 aspect-[1.1] object-cover md:block responsive-image"
                                    />
                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={"/assets/images/img3.webp"}
                                        alt="about 3"
                                        className="bg-white shadow-lg p-2 aspect-[0.7] object-cover hidden md:block responsive-image"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-center justify-center gap-12 pt-12 lg:w-1/2 lg:pt-48">
                            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={"/assets/images/img4.webp"}
                                    alt="about 4"
                                    className="bg-white shadow-lg p-2 aspect-[0.9] w-full object-cover md:w-1/2 responsive-image"
                                />
                                <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={"/assets/images/img5.webp"}
                                        alt="about 5"
                                        className="bg-white shadow-lg p-2 aspect-[0.8] object-cover hidden md:block responsive-image"
                                    />
                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={"/assets/images/img6.webp"}
                                        alt="about 6"
                                        className="bg-white shadow-lg p-2 aspect-[0.9] object-cover responsive-image"
                                    />
                                </div>
                            </div>
                            <div className="md:px-8">
                                <h2 className="mb-8 text-4xl font-bold md:text-5xl lg:mb-10 lg:text-6xl">Our Vision</h2>
                                <p className="mb-9 lg:text-xl">
                                    We aim to become the go-to closet-sharing platform for high school and college girls
                                    nationwide where closets are connected, style is circular, and trust comes from
                                    community. We envision a world where dressing up doesn&apos;t mean buying new, but
                                    shopping smarter.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
