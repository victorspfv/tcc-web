import { Badge } from "@/components/ui/badge";
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
        loading="lazy"
        width={1000}
        height={1000}
        src={image}
        alt={name}
        className="max-h-96 w-full rounded-md object-cover shadow-pblue"
    />
    <div className="flex flex-col items-start gap-4">
        <Badge>{title}</Badge>
        <h2 className="text-2xl font-semibold font-pacifico text-balance md:max-w-lg lg:text-3xl">
            {name}
        </h2>
        <p className="text-muted-foreground md:max-w-lg">
            {description}
        </p>
    </div>
</div>
    );
}
