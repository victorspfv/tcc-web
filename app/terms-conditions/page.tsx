"use client";

import React from 'react';
import HeaderPage from "@/components/landing/header-page";
import CTA from "@/components/landing/cta";
import {Card, CardContent, CardHeader} from "@/components/ui/card";

export default function TermsPage() {
    return (
        <main className="pt-[88px] lg:pt-[104px]">
            {/* Hero Section */}
            <HeaderPage title="Terms and Conditions" color="bg-pblue" />

            {/* Policy Content Section */}
            <section className="bg-background py-16 md:py-20 lg:py-32 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center gap-8">
                        {/* Content */}
                        <div className="space-y-8 text-left w-full">
                            <Card className="rounded-2xl p-8 ">
                                <CardHeader>
                                    <h1 className="text-2xl font-bold mb-4">Terms and Conditions – The Closet Clique</h1>
                                    {/*download file button*/}
                                     <a href="/files/The_Closet_Clique_Terms_and_Conditions.pdf" download>
                                        <button className="bg-pmint hover:bg-pmintHover text-white font-bold py-2 px-4 rounded cursor-pointer">
                                            Download PDF
                                        </button>
                                    </a>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm mb-6">Effective Date: August 2025</p>

                                    <div className="space-y-6 text-foreground">
                                        <p>
                                            These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of The Closet Clique
                                            mobile application and related services (&quot;App&quot; or &quot;Platform&quot;), owned and operated by The
                                            Clique Collective LLC dba The Closet Clique (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By creating an account or
                                            using the App, you agree to be bound by these Terms. If you do not agree, do not use the App.
                                        </p>

                                        <div>
                                            <h2 className="text-xl font-semibold">1. Overview & Platform Role</h2>
                                            <p className="mt-2">
                                                The Closet Clique is a neutral technology platform that facilitates clothing rentals and resale
                                                within verified school communities.
                                            </p>
                                            <ul className="list-disc pl-6 mt-2">
                                                <li>We do not own, inspect, store, or guarantee any item listed by users. All exchanges are peer-
                                                to-peer, and we are not responsible for the behavior, communication, or fulfillment actions
                                                of any user.</li>
                                                <li>We do not verify claims, arbitrate disputes, or guarantee outcomes between users.</li>
                                                <li>We do not mediate or issue refunds. Users assume all risk.</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">2. Eligibility & Registration</h2>
                                            <p className="mt-2">
                                                To access the App, users must be at least 13 years old. The Closet Clique is intended for
                                                students in grades 9–12 and undergraduate college students. Users under 18 must confirm
                                                that they have parental or guardian approval during onboarding. You agree to provide
                                                accurate and complete account information and to maintain the confidentiality of your login
                                                credentials.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">3. Rental & Sale Use</h2>
                                            <p className="mt-2">
                                                Closet Owners may list fashion and lifestyle items for rent or resale, including clothing,
                                                accessories, shoes, and items for dorms, apartments, or home living (&quot;Living&quot; category).
                                            </p>
                                            <p className="mt-4">
                                                Renters and Buyers agree to:
                                            </p>
                                            <ul className="list-disc pl-6 mt-2">
                                                <li>Follow the 6-day rental period for rentals and calendar-based booking system</li>
                                                <li>With respect to rentals, return items by the agreed date, in the condition received, with
                                                normal wear and tear allowed</li>
                                                <li>With respect to rentals, follow the owner&apos;s cleaning instructions</li>
                                                <li>Coordinate pickup/drop-off via in-app messaging only</li>
                                            </ul>
                                            <p className="mt-4">
                                                The Closet Clique is not liable for unattended pickups, damaged goods, or failure to return
                                                items and does not guarantee the condition of any items rented or sold.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">4. Fees & Payment</h2>
                                            <p className="mt-2">
                                                All payments are processed through Stripe or Apple Pay. Closet Owners absorb processing
                                                fees (2.9% + $0.30 per transaction). A 15% platform fee is deducted from each transaction
                                                prior to payout. Both fees are subject to change at any time and updates will be communicated
                                                via the App.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">5. Payment Terms for Rentals</h2>
                                            <ul className="list-disc pl-6 mt-2">
                                                <li>100% of the rental payment is charged at the time of booking, regardless of how far in
                                                advance it is scheduled</li>
                                                <li>All sales are final. No refunds or cancellations are permitted unless agreed between users.</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">6. Damage, Loss & Replacement</h2>
                                            <p className="mt-2">
                                                The Closet Clique does not collect or enforce replacement costs. Users are encouraged to
                                                document the condition of items with photos before and after exchanges. If an item is not
                                                returned or is returned damaged, users are responsible for resolving the issue independently.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">7. Late Returns & Grace Periods</h2>
                                            <p className="mt-2">
                                                Rented items must be returned by the end of the 6-day rental window. If a renter needs more
                                                time, they must contact the Closet Owner before the return date. A grace period may be
                                                granted at the Closet Owner&apos;s discretion and must be clearly agreed upon via in-app
                                                messaging. If an item is not returned and no grace period was granted, a formal complaint
                                                may be submitted by the Closet Owner. Failure to return items in a timely manner may result
                                                in a suspension, removal or termination of your account, at our sole discretion.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">8. Cleaning Responsibility</h2>
                                            <p className="mt-2">
                                                Closet Owners must include clear cleaning instructions when listing an item (e.g., &quot;dry clean
                                                only&quot; or &quot;no cleaning required&quot;). Renters are responsible for following these instructions. If
                                                an item is returned in violation of the cleaning expectations, the Closet Owner may file a
                                                complaint via email. After three validated complaints, a renter&apos;s account may be suspended,
                                                at our sole discretion.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">9. User Disputes & Accountability</h2>
                                            <p className="mt-2">
                                                The Closet Clique does not mediate disputes. Users must handle all disagreements
                                                independently. Formal complaints may be submitted via email for review and record-
                                                keeping.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">10. Code of Conduct</h2>
                                            <p className="mt-2">
                                                Users or accounts may be suspended, terminated or removed for failure to comply with these
                                                Terms and Conditions, including among other things:
                                            </p>
                                            <ul className="list-disc pl-6 mt-2">
                                                <li>Listing fake or stolen goods</li>
                                                <li>Failing to follow pickup, return, or cleaning rules</li>
                                                <li>Repeated missed exchanges or lateness</li>
                                                <li>Using inappropriate language, photos or engaging in harassment</li>
                                            </ul>
                                            <p className="mt-4">
                                                The decision to suspend, terminate or remove an account or user shall be at our sole
                                                discretion.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">11. SMS Messaging Terms</h2>
                                            <p className="mt-2">
                                                By providing your phone number, you consent to receive SMS notifications related to rentals,
                                                transactions, and platform activity. Message frequency varies. Message/data rates may apply.
                                            </p>
                                            <p className="mt-4">
                                                To stop receiving texts, reply &quot;STOP.&quot; For help, reply &quot;HELP&quot; or contact
                                                support@theclosetclique.com.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">12. Intellectual Property</h2>
                                            <p className="mt-2">
                                                All logos, brand elements, content, and media associated with The Closet Clique are the
                                                property of The Clique Collective LLC. Unauthorized use or distribution is strictly prohibited.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">13. Disclaimers</h2>
                                            <p className="mt-2">
                                                The App and all services are provided &quot;as is&quot; without warranties of any kind. We do not
                                                guarantee uninterrupted access, platform availability, or protection from unauthorized use
                                                by others.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">14. Limitation of Liability</h2>
                                            <p className="mt-2">
                                                THE CLOSET CLIQUE SHALL NOT BE LIABLE FOR ANY DAMAGES RESULTING FROM THE
                                                USE OF THE APP, INCLUDING BUT NOT LIMITED TO: LOST PROFITS, MISSED
                                                TRANSACTIONS, DISPUTES BETWEEN USERS, OR CONTENT POSTED BY OTHERS. IF A
                                                DISPUTE ARISES BETWEEN YOU AND ONE OR MORE THIRD PARTIES, INCLUDING BUT NOT
                                                LIMITED TO OTHER USERS, YOU RELEASE US (AND OUR AFFILIATES, AGENTS AND
                                                EMPLOYEES) FROM CLAIMS, DEMANDS, AND DAMAGES (ACTUAL AND CONSEQUENTIAL)
                                                OF EVERY KIND AND NATURE, KNOWN AND UNKNOWN, SUSPECTED AND UNSUSPECTED,
                                                DISCLOSED AND UNDISCLOSED, ARISING OUT OF OR IN ANY WAY CONNECTED WITH USE
                                                OF THE APP OR SUCH DISPUTES.
                                            </p>
                                            <p className="mt-4">
                                                FUTHER, WE WILL NOT BE LIABLE, WHETHER IN CONTRACT, WARRANTY, OR OTHER
                                                THEORY, TO YOU OR ANY OTHER PERSON FOR COST OF COVER, RECOVERY, OR
                                                RECOUPMENT OF ANY INVESTMENT OR PAYMENT MADE BY YOU IN CONNECTION WITH
                                                THIS AGREEMENT, OR ANY TRANSACTION BETWEEN FOR ANY LOSS ARISING OUT OF OR
                                                RELATING TO THIS AGREEMENT, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY
                                                OF THOSE COSTS OR DAMAGES. FURTHEROUR AGGREGATE LIABILITY ARISING OUT OF OR
                                                IN CONNECTION WITH THIS AGREEMENT, THE USE OF THE APP OR THE TRANSACTIONS
                                                CONTEMPLATED WILL NOT EXCEED AT ANY TIME THE TOTAL AMOUNTS DURING THE
                                                PRIOR -MONTH PERIOD PAID BY YOU TO US IN CONNECTION WITH THE PARTICULAR
                                                SERVICE GIVING RISE TO THE CLAIM.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">15. Termination</h2>
                                            <p className="mt-2">
                                                We reserve the right to suspend or terminate your account at any time if you violate these
                                                Terms or community standards. Access may be reinstated at our sole discretion.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">16. Modifications</h2>
                                            <p className="mt-2">
                                                We may revise these Terms at any time. Continued use of the App after an update constitutes
                                                acceptance of the revised terms.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">17. Governing Law</h2>
                                            <p className="mt-2">
                                                These Terms shall be governed by the laws of the State of Texas, without regard to its conflict
                                                of law principles.
                                            </p>
                                        </div>

                                        <div>
                                            <p className="mt-6">
                                                By using The Closet Clique, you acknowledge that you have read, understand, and agree to
                                                these Terms and our Fulfillment Policy. For questions, contact hello@theclosetclique.com.
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