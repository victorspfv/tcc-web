const images = [
    "/assets/images/hero/himg1.webp",
    "/assets/images/hero/himg2.webp",
    "/assets/images/hero/himg3.webp",
    "/assets/images/hero/himg4.webp",
    "/assets/images/hero/himg5.webp",
    "/assets/images/hero/himg6.webp",
    "/assets/images/hero/himg7.webp",
    "/assets/images/hero/himg8.webp",
    "/assets/images/hero/himg9.webp",
    "/assets/images/hero/himg10.webp",
    "/assets/images/hero/himg11.webp",
    "/assets/images/hero/himg12.webp",
    "/assets/images/hero/himg13.webp",
    "/assets/images/hero/himg25.webp",
    "/assets/images/hero/himg15.webp",
    "/assets/images/hero/himg16.webp",
    "/assets/images/hero/himg17.webp",
    "/assets/images/hero/himg18.webp",
    "/assets/images/hero/himg19.webp",
    "/assets/images/hero/himg20.webp",
    "/assets/images/hero/himg21.webp",
    "/assets/images/hero/himg22.webp",
    "/assets/images/hero/himg23.webp",
    "/assets/images/hero/himg24.webp",
];

export default function Hero2() {
    return (
        <section className="relative h-fit pb-8 overflow-hidden bg-secondary shadow-2xl">
            <div className="grid grid-cols-3 gap-0 lg:grid-cols-8">
                {/* Creating a photo grid effect with placeholder images */}
                {Array.from({ length: 24 }, (_, i) => (
                    <div
                        className={`aspect-square bg-cover bg-center ${i >= 9 ? "hidden lg:block" : ""}`}
                        key={i}
                        style={{
                            backgroundImage: `url(${images[i % images.length]})`,
                        }}
                    />
                ))}
            </div>

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5CA1CB]/10 to-[#5CA1CB]/1" /> */}

            {/* Content */}
            <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="text-7xl md:text-9xl font-pacifico text-white text-shadow">
                        your clique, your closet
                    </h1>
                </div>
            </div>
        </section>
    );
}
