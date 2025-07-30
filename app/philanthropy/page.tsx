import HeaderPage from "@/components/landing/header-page";
import { HeartIcon } from "lucide-react";
import React from "react";

export default function PhilanthropyPage() {
    return (
        <main className="pt-[56px] lg:pt-[104px]">
            {/* Hero Section */}
            <HeaderPage title="Philanthropy" color="bg-pmint" />

            {/* Philanthropy Section */}
            <section className="bg-background py-16 md:py-20 lg:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
                    <div className="flex flex-col items-center gap-12">
                        {/* Icon */}
                        <div className="w-20 h-20 bg-[#5CA1CB] rounded-full flex items-center justify-center">
                            <HeartIcon className="w-10 h-10 text-white" />
                        </div>

                        {/* Content */}
                        <div className="space-y-8 text-center max-w-3xl">
                            <p className="text-2xl font-pacifico text-[#5CA1CB]">
                                At The Closet Clique, we believe that every closet has the power to give.
                            </p>
                            
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <p className="text-lg leading-relaxed text-[#00486D]">
                                    Each year during the holiday season, we host a community-wide Closet Cleanout, inviting girls to
                                    donate gently loved clothing and accessories to support local charities serving women, teens and
                                    families.
                                </p>
                            </div>
                            
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <p className="text-lg leading-relaxed text-[#00486D]">
                                    It&apos;s our way of turning personal style into shared impact, clearing space in your closet while
                                    making room for someone else to feel seen, confident and care for.
                                </p>
                            </div>

                            <p className="text-2xl font-pacifico text-[#E796BA]">
                                Because at The Closet Clique, we believe giving back is always in style.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </main>
    );
}
