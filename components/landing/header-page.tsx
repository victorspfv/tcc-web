import React from "react";

export default function HeaderPage({ title, color }: { title: string, color: string }) {
    return (
        <header className={`py-6 ${color}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-xl md:text-4xl font-pacifico text-white">{title}</h1>
            </div>
        </header>
    );
}
