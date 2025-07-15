import Image from "next/image";
import { instagramImages } from "@/utils/constants";
import { Button } from "@/components/ui/button";

export default function Instagram() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h3 className="text-4xl md:text-5xl font-bold mb-4 text-secondary font-pacifico">
                        Follow us on Instagram
                    </h3>
                    <Button variant="link" className="text-xl">
                        <a href="https://www.instagram.com/joinheclosetclique" target="_blank" rel="noopener noreferrer">
                            @joinheclosetclique
                        </a>
                    </Button>
                </div>

                {/* Instagram grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {instagramImages.map((image, index) => (
                        <div
                            className="aspect-square bg-gradient-to-br from-[#E796BA] to-[#5CA1CB] rounded-lg"
                            key={index}>
                            <Image
                                loading="lazy"
                                src={image}
                                alt="Instagram"
                                className="w-full h-full rounded-lg object-cover border-3 border-primary shadow-pblue hover:shadow-pblueHover transition-all duration-300 ease-in-out"
                                width={300}
                                height={300}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
