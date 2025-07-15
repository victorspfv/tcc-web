import React from "react";

export default function ComingSoon() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="border-4 border-primary bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-12 shadow-pblue hover:shadow-pblueHover transition-all duration-300 ease-in-out">
                    <h3
                        className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-pacifico">
                        Coming Soon
                    </h3>
                    <p
                        className="text-3xl md:text-4xl font-bold font-pacifico text-secondary">
                        to the App Store
                    </p>
                </div>
            </div>
        </section>
    );
}
