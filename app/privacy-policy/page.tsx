"use client";

import React from 'react';
import HeaderPage from "@/components/landing/header-page";
import CTA from "@/components/landing/cta";
import {Card, CardContent, CardHeader} from "@/components/ui/card";

export default function PrivacyPolicyPage() {
    return (
        <main className="pt-[56px] lg:pt-[104px]">
            {/* Hero Section */}
            <HeaderPage title="Privacy Policy" color="bg-pblue" />

            {/* Policy Content Section */}
            <section className="bg-background py-16 md:py-20 lg:py-32 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center gap-8">
                        {/* Content */}
                        <div className="space-y-8 text-left w-full">
                            <Card className="rounded-2xl p-8 ">
                                <CardHeader>
                                    <h1 className="text-2xl font-bold mb-4">Privacy Policy – The Closet Clique</h1>
                                    {/*download file button*/}
                                     <a href="/files/The_Closet_Clique_Privacy_Policy.pdf" download>
                                        <button className="bg-pmint hover:bg-pmintHover text-white font-bold py-2 px-4 rounded cursor-pointer">
                                            Download PDF
                                        </button>
                                    </a>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm mb-6">Effective Date: August 2025</p>

                                    <div className="space-y-6 text-foreground">
                                        <p>
                                            This Privacy Policy describes what personal information The Clique Collective LLC dba The
                                            Closet Clique (&#34;The Closet Clique,&#34; &#34;we,&#34; &#34;our,&#34; or &#34;us&#34;) collects and how we use and share
                                            information about you when you access or use our mobile application (&#34;App&#34;) and related
                                            services (collectively, the &#34;Services&#34;) as well as how long we retain it. Unless indicated
                                            otherwise, this Policy applies only to personal information collected through the App.
                                        </p>
                                        <p>
                                            By accessing or using The Closet Clique App, you agree to this Privacy Policy and consent to
                                            the practices described herein.
                                        </p>

                                        <div>
                                            <h2 className="text-xl font-semibold">1. Information We Collect</h2>
                                            <h3 className="text-lg font-medium mt-4">a. Information You Provide</h3>
                                            <p className="mt-2">
                                                We may collect personal information you submit through the App, including:
                                            </p>
                                            <ul className="list-disc pl-6 mt-2">
                                                <li>Full name</li>
                                                <li>Email address</li>
                                                <li>Phone number (for verification)</li>
                                                <li>School email (for verification)</li>
                                                <li>School affiliation and graduation year</li>
                                                <li>Instagram handle (for profile verification)</li>
                                                <li>Home address</li>
                                                <li>Item listings, rental or sale history</li>
                                                <li>Login and authentication information</li>
                                                <li>Payment or payout information (processed via third-party providers)</li>
                                            </ul>
                                            <p className="mt-4">
                                                When you visit our Services, you may also provide us login and other authentication
                                                information, questions to surveys, questions and inquiries. In addition, our Services give you
                                                the option to upload or share pictures of yourself and others.
                                            </p>
                                            <p className="mt-4 italic">
                                                *If you are under the age of 18, we also collect parental consent documentation as part of
                                                onboarding.
                                            </p>

                                            <h3 className="text-lg font-medium mt-4">b. Information We Automatically Collect</h3>
                                            <p className="mt-2">
                                                When you use our App, we may automatically collect:
                                            </p>
                                            <ul className="list-disc pl-6 mt-2">
                                                <li>Device and usage data (IP address, browser type, device ID, operating system)</li>
                                                <li>App activity (pages viewed, actions taken, timestamps)</li>
                                                <li>General location information (city/state level)</li>
                                            </ul>
                                            <p className="mt-4">
                                                We do not collect precise geolocation data (e.g., GPS coordinates).
                                            </p>

                                            <h3 className="text-lg font-medium mt-4">c. Information from Third Parties</h3>
                                            <p className="mt-2">
                                                We may receive data from third-party services such as:
                                            </p>
                                            <ul className="list-disc pl-6 mt-2">
                                                <li>Stripe (for payment processing)</li>
                                                <li>Apple/Google (for login or in-app purchases)</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
                                            <p className="mt-2">
                                                We use the information we collect to:
                                            </p>
                                            <ul className="list-disc pl-6 mt-2">
                                                <li>Provide, maintain, and improve the App and its features</li>
                                                <li>Create and manage your online account</li>
                                                <li>Verify user eligibility and school affiliation</li>
                                                <li>Enable you to post your content, such as comments and pictures</li>
                                                <li>Facilitate rentals, purchases, payments, and communication between users</li>
                                                <li>Ensure community safety and enforce platform rules</li>
                                                <li>Respond to user inquiries or support requests</li>
                                                <li>Notify users of updates, reminders, or promotional offers</li>
                                            </ul>
                                            <p className="mt-4">
                                                We may also use anonymized data for internal analytics and reporting.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">3. Sharing of Information</h2>
                                            <p className="mt-2">
                                                We do not sell or rent your personal information to third parties. We may share data as
                                                follows:
                                            </p>
                                            <ul className="list-disc pl-6 mt-2">
                                                <li>With trusted service providers (e.g., Stripe, Apple) who help operate our App under strict
                                                    confidentiality agreements</li>
                                                <li>As required by law (e.g., subpoena or legal process)</li>
                                                <li>To protect the rights, safety, or property of our users or The Closet Clique</li>
                                                <li>In connection with a business transfer or merger (with notice to affected users)</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">4. SMS and Messaging Privacy</h2>
                                            <p className="mt-2">
                                                By providing your phone number, you consent to receive SMS notifications related to your
                                                account and activity on the platform. Message frequency will vary. Message and data rates
                                                may apply.
                                            </p>
                                            <p className="mt-4">
                                                We do not share your opt-in to text alerts or campaign participation with unrelated third
                                                parties. We may share your phone number only with services necessary to deliver messages
                                                (e.g., SMS platforms or phone carriers).
                                            </p>
                                            <p className="mt-4">
                                                You can opt out of SMS at any time by replying &#34;STOP.&#34; For help, reply &#34;HELP&#34; or email
                                                support@theclosetclique.com.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">5. Your Choices & Opt-Out Rights</h2>
                                            <p className="mt-2">
                                                You may:
                                            </p>
                                            <ul className="list-disc pl-6 mt-2">
                                                <li>Uninstall the App to stop data collection</li>
                                                <li>Contact us to review or delete your personal data</li>
                                                <li>Adjust app permissions via your device settings</li>
                                            </ul>
                                            <p className="mt-4">
                                                Please note: removing your account does not cancel any scheduled rentals or purchases.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">6. Data Retention</h2>
                                            <p className="mt-2">
                                                We retain user data for as long as your account remains active and for a reasonable period
                                                thereafter to comply with legal obligations or resolve disputes. You may request deletion at
                                                any time by contacting us at hello@theclosetclique.com.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">7. Children&apos;s Privacy</h2>
                                            <p className="mt-2">
                                                The Closet Clique is not intended for children under 13. Users under 18 must obtain
                                                verifiable parental consent to use the platform. We do not knowingly collect personal
                                                information from users under 13, and any such data will be deleted promptly upon
                                                discovery.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">8. Data Security</h2>
                                            <p className="mt-2">
                                                We take the security of your data seriously and implement technical and organizational
                                                safeguards, including:
                                            </p>
                                            <ul className="list-disc pl-6 mt-2">
                                                <li>Encrypted transmissions</li>
                                                <li>Secure servers and firewalls</li>
                                                <li>Access limitations to authorized personnel only</li>
                                            </ul>
                                            <p className="mt-4">
                                                Despite these measures, no method of transmission or storage is 100% secure. You use the
                                                App at your own risk.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">9. Updates to This Privacy Policy</h2>
                                            <p className="mt-2">
                                                We may revise this policy from time to time. Updates will be posted in-app or on our
                                                website, and continued use constitutes acceptance of any changes.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">10. Contact Us</h2>
                                            <p className="mt-2">
                                                For questions about this Privacy Policy or your data:
                                                Email: hello@theclosetclique.com
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