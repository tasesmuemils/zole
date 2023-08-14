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
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
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
