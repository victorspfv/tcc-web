import Image from "next/image";
import { Button } from "../ui/button";
import { InstagramIcon } from "lucide-react";

export default function Instagram2() {
    return (
        <section className="bg-gray-100">
            <div className="container px-4 md:px-32 flex flex-col items-center justify-center py-16 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-7xl">
                    <div className="col-span-1 flex flex-col h-full items-start p-4 md:p-10 gap-8 justify-center">
                        <h2 className="text-4xl lg:text-7xl font-pacifico leading-tight text-foreground">
                            Follow us on Instagram
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-md">
                            Join our community and get inspired by the latest outfit trends, styling tips, and behind-the-scenes content from your favorite closet clique!
                        </p>
                        <Button asChild className="bg-accent text-primary-foreground border-1 border-black shadow-card hover:shadow-hover transition ease-in-out hover:bg-primary/90 py-2 h-12 rounded-2xl px-8 font-bold">
                           <a href="https://www.instagram.com/theclosetclique/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon className="w-4 h-4 mr-2" />
                            Follow us
                           </a>
                        </Button>
                    </div>
                    
                    <div className="col-span-1 flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={"/assets/images/img4.webp"}
                                    alt="about 1"
                                    className="shadow-pblueHover aspect-[0.7] w-full rounded-2xl object-cover md:w-1/2 hidden lg:block responsive-image"
                                />
                                <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={"/assets/images/img3.webp"}
                                        alt="about 2"
                                        className="shadow-ppinkHover aspect-[1.1] rounded-2xl object-cover md:block responsive-image"
                                    />
                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={"/assets/images/img1.webp"}
                                        alt="about 3"
                                        className="shadow-pgreenHover aspect-[1.1] rounded-2xl object-cover hidden md:block responsive-image"
                                    />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
