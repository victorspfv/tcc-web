"use client";

import React from 'react';
import HeaderPage from "@/components/landing/header-page";
import CTA from "@/components/landing/cta";
import {Card, CardContent, CardHeader} from "@/components/ui/card";

export default function FulfillmentPolicyPage() {
    return (
        <main className="pt-[56px] lg:pt-[104px]">
            {/* Hero Section */}
            <HeaderPage title="Fulfillment Policy" color="bg-pblue" />

            {/* Policy Content Section */}
            <section className="bg-background py-16 md:py-20 lg:py-32 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center gap-8">
                        {/* Content */}
                        <div className="space-y-8 text-left w-full">
                            <Card className="rounded-2xl p-8 ">
                                <CardHeader>
                                    <h1 className="text-2xl font-bold mb-4">FULFILLMENT POLICY</h1>
                                    {/*download file button*/}
                                     <a href="/files/The_Closet_Clique_Fulfillment_Policy.pdf" download>
                                        <button className="bg-pmint hover:bg-pmintHover text-white font-bold py-2 px-4 rounded cursor-pointer">
                                            Download PDF
                                        </button>
                                    </a>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm mb-6">Effective Date: August 2025</p>
                                    <p className="mb-6">The Closet Clique – A brand of The Clique Collective LLC</p>
                                    <div className="space-y-6 text-foreground">
                                        <div>
                                            <h2 className="text-xl font-semibold">1. General Disclaimer & Platform Role</h2>
                                            <p className="mt-2">
                                                The Closet Clique is a peer-to-peer platform that facilitates clothing rentals and resale
                                                within verified school communities. This Fulfillment Policy outlines expectations for Closet
                                                Owners, Renters, and Buyers. The Closet Clique serves strictly as a facilitator and is not a
                                                party to any transaction.
                                            </p>
                                            <p className="mt-4">
                                                The Closet Clique is a neutral technology platform. It does not own, inspect, validate, or
                                                control items listed on the platform. By using the service, all users agree that The Closet
                                                Clique holds no responsibility or liability for:
                                            </p>
                                            <ul className="list-disc pl-6 mt-2">
                                                <li>Lost, stolen, or damaged items</li>
                                                <li>Incomplete or failed transactions</li>
                                                <li>User behavior or miscommunication</li>
                                                <li>Disputes or disagreements between users</li>
                                            </ul>
                                            <p className="mt-4">
                                                All responsibility and liability rest with the Closet Owner and the Renter or Buyer. The
                                                Closet Clique does not intervene in disputes, offer refunds, or issue compensation of any
                                                kind. WE WILL NOT BE LIABLE, WHETHER IN CONTRACT, WARRANTY, OR OTHER THEORY,
                                                TO YOU OR ANY OTHER PERSON FOR COST OF COVER, RECOVERY, OR RECOUPMENT OF
                                                ANY INVESTMENT OR PAYMENT MADE BY YOU IN CONNECTION WITH THIS AGREEMENT,
                                                OR ANY TRANSACTION BETWEEN FOR ANY LOSS ARISING OUT OF OR RELATING TO THIS
                                                AGREEMENT, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF THOSE COSTS OR
                                                DAMAGES. FURTHER OUR AGGREGATE LIABILITY ARISING OUT OF OR IN CONNECTION
                                                WITH THIS AGREEMENT OR THE TRANSACTIONS CONTEMPLATED WILL NOT EXCEED AT
                                                ANY TIME THE TOTAL AMOUNTS DURING THE PRIOR ONE-MONTH PERIOD PAID BY YOU
                                                TO US IN CONNECTION WITH THE PARTICULAR SERVICE GIVING RISE TO THE CLAIM.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">2. Item Listings & Availability</h2>
                                            <p className="mt-2">
                                                Closet Owners must upload clear photos and fill in required item details:
                                            </p>
                                            <ul className="list-disc pl-6 mt-2">
                                                <li>Photos</li>
                                                <li>Brand</li>
                                                <li>Size and category</li>
                                                <li>Original retail price</li>
                                                <li>Rental fee (if applicable)</li>
                                                <li>Sale price (if applicable)</li>
                                                <li>Listing type: For Sale or For Rent</li>
                                                <li>Optional notes: alterations, stains, wear and tear, and anything worth mentioning</li>
                                            </ul>
                                            <p className="mt-4">
                                                All rentals are scheduled for a fixed 6-day rental window.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">3. Rental & Sale Coordination</h2>
                                            <p className="mt-2">
                                                All coordination (porch pickups, meetups, etc.) must occur via the in-app messaging system.
                                                Users must arrange a mutually agreed safe location for item handoff.
                                                The Closet Clique is not liable for unattended pickups or returns.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">4. Returns & Late Items</h2>
                                            <p className="mt-2">
                                                Items must be returned by the end of the 6-day window. Users are encouraged to document
                                                the condition of items with photos before and after exchanges.
                                                Late returns may result in user complaints.
                                            </p>
                                            <p className="mt-4">
                                                Closet Owners may grant a grace period at their discretion.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">5. Damage, Loss & Replacement</h2>
                                            <p className="mt-2">
                                                If an item is lost or returned damaged:
                                            </p>
                                            <ul className="list-disc pl-6 mt-2">
                                                <li>The Closet Owner and Renter are responsible for resolving the issue directly.</li>
                                                <li>The Closet Clique will not verify claims or process reimbursements.</li>
                                                <li>Users are encouraged to take photos for accountability.</li>
                                            </ul>
                                            <p className="mt-4">
                                                Notwithstanding the foregoing, The Closet Clique reserves all rights to suspend, remove or
                                                terminate an account or user access to the App to the extent that such dispute is related to a
                                                violation of and pursuant to the terms set forth in The Closet Clique Terms and Conditions.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">6. Cleaning Expectations</h2>
                                            <p className="mt-2">
                                                Closet Owners must specify cleaning expectations (e.g., &#34;dry clean only,&#34; &#34;no cleaning
                                                required&#34;). Renters must follow those instructions.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">7. Sales Policy</h2>
                                            <p className="mt-2">
                                                All sales are final. Buyers agree to pay the listed sale price in full.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">8. Payments & Cancellations</h2>
                                            <p className="mt-2">
                                                All payments are processed via Stripe.
                                            </p>
                                            <ul className="list-disc pl-6 mt-2">
                                                <li>100% of the payment is charged at checkout.</li>
                                                <li>No cancellations or refunds are permitted through the App after booking.</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">9. Dispute Handling</h2>
                                            <p className="mt-2">
                                                All disputes must be handled directly between users. The Closet Clique does not intervene in
                                                disputes between users. Notwithstanding the foregoing, The Closet Clique reserves all rights
                                                to suspend, remove or terminate an account or user access to the App to the extent that such
                                                dispute is related to a violation of and pursuant to the terms set forth in The Closet Clique
                                                Terms and Conditions.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">10. Platform Fees</h2>
                                            <ul className="list-disc pl-6 mt-2">
                                                <li>The Closet Clique currently charges a 15% platform fee per transaction.</li>
                                                <li>Stripe processing fees (2.9% + $0.30) also apply.</li>
                                                <li>Both fees are subject to change at any time and updates will be communicated via the App.</li>
                                            </ul>
                                            <p className="mt-4">
                                                -All fees are deducted before Closet Owner payouts.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">11. Code of Conduct</h2>
                                            <p className="mt-2">
                                                To maintain a safe and respectful community, users must agree to the following:
                                            </p>
                                            <ul className="list-disc pl-6 mt-2">
                                                <li>Do not falsify your identity, age, or school affiliation</li>
                                                <li>Do not post or upload nudity, offensive content, hate speech, or obscene language</li>
                                                <li>Do not list counterfeit, stolen, or misrepresented items</li>
                                                <li>Do not solicit or complete transactions outside of the platform</li>
                                                <li>Do not violate any platform policies or community guidelines</li>
                                            </ul>
                                            <p className="mt-4">
                                                Violations may result in account suspension, termination or removal of a user or user&#39;s
                                                account at The Closet Clique&#39;s sole discretion.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">12. Minors & Parental Consent</h2>
                                            <p className="mt-2">
                                                The Closet Clique is intended for students in high school and college. Users under the age of
                                                18 must confirm they have parental or guardian approval during onboarding.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">✅ Onboarding Disclaimers</h2>
                                            <p className="mt-2">
                                                Users must agree to the following at the time they sign-up for an account:
                                            </p>
                                            <ul className="mt-2">
                                                <li>✅ I understand The Closet Clique is a facilitator only. All exchanges are at my own risk.</li>
                                                <li>✅ I agree that The Closet Clique is not liable for lost, stolen, or damaged items.</li>
                                                <li>✅ I agree to the Fulfillment Policy, payment terms, and community guidelines.</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <p className="mt-6">
                                                📩 For questions or complaints, contact: hello@theclosetclique.com
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* CTA Section */}
            <CTA bgColor="bg-pblue" shadowColor="shadow-pblueHover" />
        </main>
    );
}