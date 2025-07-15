import { IMenuItem } from "@/types/menuItems";

export const menuItems: IMenuItem[] = [
    {
        text: "Features",
        url: "#features"
    },
    {
        text: "Pricing",
        url: "#pricing"
    },
    {
        text: "Testimonials",
        url: "#testimonials"
    }
];

export const siteDetails = {
    siteName: 'The Closet Clique',
    siteUrl: 'https://theclosetclique.com/',
    metadata: {
        title: 'The Closet Clique - Your Clique, Your Closet',
        description: 'The Closet Clique is a platform for you to share your style with your friends.',
    },
    language: 'en-us',
    locale: 'en-US',
    siteLogo: `${process.env.BASE_PATH || ''}/images/logo.png`,
    googleAnalyticsId: '', // e.g. G-XXXXXXX,
}