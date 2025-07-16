'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

import { siteDetails } from '@/utils/constants';
import { menuItems } from '@/utils/constants';
import { X, Menu} from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const colorVariants = {
        pblue: "hover:shadow-pblue hover:text-pblue",
        pgreen: "hover:shadow-pgreen hover:text-pgreen",
        ppink: "hover:shadow-ppink hover:text-ppink",
        pyellow: "hover:shadow-pyellow hover:text-pyellow",
        ppurple: "hover:shadow-ppurple hover:text-ppurple"
    };

    return (
        <header className="bg-white fixed top-0 left-0 right-0 z-50 mx-auto w-full">
            <div className="!px-0 container">
                <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        {
                            siteDetails.siteLogo && (
                                <Image 
                                src={siteDetails.siteLogo} 
                                alt={siteDetails.siteName} 
                                width={80} 
                                height={50} 
                                className="cursor-pointer w-auto h-10"
                                />
                            ) || (
                                <span className="manrope text-xl font-semibold text-foreground cursor-pointer">
                                    {siteDetails.siteName}
                                </span>
                            )
                        }
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6">
                        {menuItems.map(item => (
                            <li key={item.url}>
                                <Link href={item.url} className={`rounded-md border border-transparent shadow-none hover:border-black px-4 py-2 hover:border-1 ${colorVariants[item.shadow as keyof typeof colorVariants]} transition ease-in-out`}>
                                    {item.text.toUpperCase()}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu with Transition */}
            <div className={`${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-foreground hover:text-primary block" onClick={toggleMenu}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};
