import { IMenuItem } from "@/types/menuItems";

export const menuItems: IMenuItem[] = [
    {
        text: "Home",
        url: "/",
        shadow: "pblue"
    },
    {
        text: "About Us",
        url: "/about",
        shadow: "pblue700"
    },
    {
        text: "Clique Crew",
        url: "/crew",
        shadow: "pyellow"
    },
    {
        text: "Philanthropy ",
        url: "/philanthropy",
        shadow: "pmint"
    },
    {
        text: "Contact Us",
        url: "/contact",
        shadow: "ppink"
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
    siteLogo: '/logo-tcc.svg',
    googleAnalyticsId: '', // e.g. G-XXXXXXX,
}

export const instagramImages = [
      "/assets/images/gallery/img5.webp",
      "/assets/images/gallery/img10.webp",
      "/assets/images/gallery/img4.webp",
      "/assets/images/gallery/img7.webp",
      "/assets/images/gallery/img9.webp",
      "/assets/images/gallery/img3.webp",
      "/assets/images/gallery/img6.webp",
      "/assets/images/gallery/img8.webp",
  ];

  export const instagramImagesMobile = [
    "/assets/images/gallery/img5.webp",
    "/assets/images/gallery/img7.webp",
    "/assets/images/gallery/img9.webp",
    "/assets/images/gallery/img4.webp",
];