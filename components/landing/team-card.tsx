import Image from "next/image";
import React from "react";

export default function TeamCard({
    name,
    title,
    description,
    image,
}: {
    name: string;
    title: string;
    description: string;
    image: string;
}) {
    return (
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-16">
    <Image
        quality={100}
        loading="lazy"
        src={image}
        alt={name}
        className="max-h-96 w-full rounded-md shadow-pblue object-cover"
        width={512}
        height={384}
    />
    <div className="flex flex-col items-start gap-4">
        <h2 className="text-2xl font-semibold font-pacifico text-balance md:max-w-lg lg:text-3xl">
            {name}, {title}
        </h2>
        <p className="text-muted-foreground md:max-w-lg text-xl">
            {description}
        </p>
    </div>
</div>
    );
}
