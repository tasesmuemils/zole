import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "./Navigation";
import NewNavigation from "./NewNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zoles punkti",
  description: "Saskaiti zoles punktus",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="bg-white transition-all duration-500 dark:bg-slate-800"
    >
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="title" content="Zoles punkti" />
        <meta name="Zoles punkti" content="Zoles punkti" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Zoles punkti" />
        <meta
          name="description"
          content="Neskrien pēc lapas un pildspalvas, skaiti 'Zoles' punktus šeit"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className={inter.className}
      >
        <Navigation />
        {/* <NewNavigation /> */}
        {children}
      </body>
    </html>
  );
}
