import { Button } from "../ui/button";
import Image from "next/image";

export default function CTA() {
    return (
        <section>
            <div className="max-w-full overflow-hidden border-y border-border bg-accent pt-10 md:pt-16 lg:pt-20">
                <div className="relative container flex flex-col md:flex-row md:space-x-12">
                    <div className="mb-[18rem] md:mb-28 md:w-2/3 lg:shrink-0 xl:mb-20 xl:w-1/2">
                        <h3 className="font-pacifico mb-3 text-4xl font-semibold md:mb-4 md:text-7xl lg:mb-6">
                            Coming Soon
                        </h3>
                        <p className="mb-8 mt-6 max-w-2xl text-lg text-foreground md:text-2xl">
                            Coming Soon to the App Store and Google Play.
                            We are working hard to bring you the best experience. Stay tuned for updates!
                        </p>
                        <Button
                            size="lg"
                            className="bg-secondary text-primary-foreground border-1 border-black rounded-2xl hover:bg-primary/90 font-bold px-10 py-6 shadow-card hover:shadow-hover transition ease-in-out">
                            Get Early Access
                        </Button>
                    </div>
                    <div className="absolute right-1/2 bottom-0 mr-6 h-min w-[110%] max-w-md translate-x-1/2 md:-right-36 md:mr-0 md:w-3/4 md:max-w-xl md:translate-x-0 lg:mt-auto xl:relative xl:right-0 xl:h-full xl:w-full xl:max-w-full">
                        <div className="relative aspect-8/5 h-full min-h-[16rem] w-full">
                            <div className="pt-4 absolute top-0 right-0 z-40 flex aspect-3/5 w-3/5 -translate-x-[24%] translate-y-[24%] -rotate-[30deg] justify-center overflow-clip rounded-3xl bg-background shadow-lg shadow-foreground/20 md:max-xl:-translate-x-[8%] md:max-xl:translate-y-[16%]">
                                <Image
                                    src="/assets/images/mock1.png"
                                    alt="Phone"
                                    width={320}
                                    height={600}
                                    className="rounded-3xl"
                                />
                            </div>
                            <div className="pt-4 absolute top-0 right-0 z-40 flex aspect-3/5 w-3/5 -translate-x-[16%] translate-y-[8%] -rotate-[15deg] justify-center overflow-clip rounded-3xl bg-background shadow-xl shadow-foreground/20 md:max-xl:-translate-x-[6%] md:max-xl:translate-y-[6%]">
                                <Image
                                    src="/assets/images/mock1.png"
                                    alt="Phone"
                                    width={320}
                                    height={600}
                                    className="rounded-3xl"
                                />
                            </div>
                            <div className="absolute top-0 right-0 z-40 flex aspect-3/5 w-3/5 items-center justify-center overflow-clip rounded-3xl bg-transparent shadow-lg shadow-foreground/40" />

                            <div className="pt-4 absolute top-0 right-0 z-40 flex aspect-3/5 w-3/5 items-center justify-center overflow-clip rounded-3xl bg-background shadow-pblueHover shadow-foreground/40">
                                <Image
                                    src="/assets/images/mock1.png"
                                    alt="Phone"
                                    width={320}
                                    height={600}
                                    className="rounded-3xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
