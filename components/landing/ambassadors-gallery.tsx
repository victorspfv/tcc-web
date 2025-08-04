import Image from "next/image";

const ambassadorsImages = [
    {
        name: "Emelie",
        image: "/assets/images/ambassadors/eimg3.webp",
    },
    {
        name: "Maya",
        image: "/assets/images/ambassadors/eimg10.webp",
    },
    {
        name: "Evelyn",
        image: "/assets/images/ambassadors/eimg12.webp",
    },
    {
        name: "Hannah",
        image: "/assets/images/ambassadors/eimg15.webp",
    },
    {
        name: "Gracelyn",
        image: "/assets/images/ambassadors/eimg4.webp",
    },
    {
        name: "Charlotte",
        image: "/assets/images/ambassadors/eimg7.webp",
    },
    {
        name: "Valentina",
        image: "/assets/images/ambassadors/eimg8.webp",
    },
    {
        name: "Lyla",
        image: "/assets/images/ambassadors/eimg5.webp",
    },
    {
        name: "Gigi",
        image: "/assets/images/ambassadors/eimg13.webp",
    },
    {
        name: "Isabel",
        image: "/assets/images/ambassadors/eimg2.webp",
    },
    {
        name: "Finley",
            image: "/assets/images/ambassadors/eimg11.webp",
    },
    {
        name: "Sadie",
        image: "/assets/images/ambassadors/eimg14.webp",
    },
    {
        name: "Morgan",
        image: "/assets/images/ambassadors/eimg9.webp",
    },
    {
        name: "Blakely",
        image: "/assets/images/ambassadors/eimg1.webp",
    },
    {
        name: "Molly",
        image: "/assets/images/ambassadors/eimg6.webp",
    },
];

export default function AmbassadorsGallery() {
    
    return (
        <section className="bg-white py-16 md:py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h3 className="text-4xl md:text-5xl font-bold mb-4 font-pacifico">
                        Founding Brand Ambassadors
                    </h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {ambassadorsImages.map((image, index) => (
                        <div className="flex flex-col items-center justify-center" key={index}>
                            <Image width="400" height="400"  src={image.image} alt={image.name} className="w-full h-full object-cover aspect-square" />
                            <p className="text-center text-sm text-gray-500 mt-2 font-bold">{image.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
