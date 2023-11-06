import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "./Navigation";
import Providers from "./Providers";
import GoogleAnalytics from "./GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "Zoles punkti";
const APP_DEFAULT_TITLE = "Zoles punkti";
const APP_TITLE_TEMPLATE = "%s - Zoles punkti";
const APP_DESCRIPTION =
  "Neskrien pēc lapas un pildspalvas, skaiti 'Zoles' punktus šeit";

export const metadata = {
  title: "Zoles punkti",
  description: "Saskaiti zoles punktus",
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  themeColor: "#FFFFFF",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    startupImage: [
      "/apple-touch-icon.png",
      {
        url: "/apple-touch-icon.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="bg-white transition-all duration-100 dark:bg-slate-800"
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <Providers>
          {/*GOOGLE ANALYTICS*/}
          <GoogleAnalytics />
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
