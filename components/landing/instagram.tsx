import Image from "next/image";
import { instagramImages, instagramImagesMobile } from "@/utils/constants";
import { Button } from "@/components/ui/button";
import { InstagramIcon } from "lucide-react";

export default function Instagram() {
    return (
        <section className="pt-16 bg-white">
            <div className="w-full mx-auto px-0">
                <div className="flex flex-col items-center p-4 md:p-10 gap-6 justify-center mb-10">
                    <h2 className="text-4xl lg:text-7xl font-pacifico leading-tight text-foreground">
                        Follow us on Instagram
                    </h2>
                    <p className="text-lg text-muted-foreground md:text-2xl max-w-2xl text-center">
                        Join our community and get inspired by the latest outfit trends, styling tips, and
                        behind-the-scenes content from your favorite closet clique!
                    </p>
                    <div>
                        <Button
                            asChild
                            className="bg-accent text-primary-foreground border-1 border-black shadow-card hover:shadow-hover transition ease-in-out py-2 h-12 rounded-2xl px-8 font-bold">
                            <a
                                href="https://www.instagram.com/theclosetclique/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <InstagramIcon className="w-4 h-4 mr-2" />
                                Follow us
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Instagram grid desktop */}
                <div className="grid-cols-2 md:grid-cols-4 hidden lg:grid">
                    {instagramImages.map((image, index) => (
                        <div
                            key={index}
                            className="aspect-square bg-gradient-to-br from-[#E796BA] to-[#5CA1CB] rounded-lg">
                            <Image
                                src={image}
                                alt="Instagram"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
                {/* Instagram grid mobile */}
                <div className="grid-cols-2 md:grid-cols-4 grid lg:hidden">
                    {instagramImagesMobile.map((image, index) => (
                        <div
                            key={index}
                            className="aspect-square bg-gradient-to-br from-[#E796BA] to-[#5CA1CB] rounded-lg">
                            <Image
                                src={image}
                                alt="Instagram"
                                width={100}
                                height={100}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
