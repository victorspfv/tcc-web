
export default function Footer() {
    return (
        <footer className="bg-background text-background-foreground py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="space-y-4 mb-8">
                        <p className="text-lg">© 2025 The Closet Clique</p>
                        <p className="text-sm">The Closet Clique is a registered DBA of The Clique Collective LLC</p>
                        <p className="text-sm">
                            All transactions are processed securely through our app using Stripe and Apple Pay
                        </p>
                    </div>

                    <div className="border-t border-white/20 pt-8">
                        <p className="text-sm">
                            Contact us at <a href="mailto:hello@theclosetclique.com" className="text-primary hover:text-white transition-colors">hello@theclosetclique.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
