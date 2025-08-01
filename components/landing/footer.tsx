import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background text-muted-foreground border-t">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="py-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
                    {/* Left Section: Logo and legal text */}
                    <div className="flex flex-col gap-4 items-center md:items-start">
                        <Link href="/" aria-label="Go to homepage">
                            <Image src="/logo-tcc.svg" alt="The Closet Clique Logo" width={120} height={32} className="h-auto" />
                        </Link>
                        <div className="text-sm max-w-xs space-y-2">
                            <p>The Closet Clique is a registered DBA of The Clique Collective LLC.</p>
                            <p className="text-xs text-muted-foreground/80">
                                All transactions are processed securely through our app using Stripe and Apple Pay.
                            </p>
                        </div>
                    </div>
                    
                    {/* Right Section: Links and Contact */}
                    <div className="flex flex-col gap-6 items-center md:items-end">
                        <nav className="flex gap-4 sm:gap-6" aria-label="Footer navigation">
                            <Link href="/fulfillment-policy" className="text-sm hover:text-primary transition-colors">
                                Fulfillment
                            </Link>
                            <Link href="/privacy-policy" className="text-sm hover:text-primary transition-colors">
                                Privacy
                            </Link>
                            <Link href="/terms-conditions" className="text-sm hover:text-primary transition-colors">
                                Terms
                            </Link>
                        </nav>
                        <a href="mailto:hello@theclosetclique.com" className="text-sm flex items-center gap-2 hover:text-primary transition-colors">
                            <Mail className="w-4 h-4" />
                            <span>hello@theclosetclique.com</span>
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="py-6 border-t">
                    <p className="text-center text-sm">
                        © {new Date().getFullYear()} The Closet Clique. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
