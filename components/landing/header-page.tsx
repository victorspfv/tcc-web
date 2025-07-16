import React from "react";

export default function HeaderPage({ title }: { title: string }) {
    return (
        <header className="py-6 bg-primary">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-xl md:text-4xl font-pacifico text-white">{title}</h1>
            </div>
        </header>
    );
}
