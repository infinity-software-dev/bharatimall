import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bhartimall.com"),

  // title: "Bharti Mall | Premium B2C Share Market Portal",
  // description: "Explore Bharti Mall - Reimagining customer-first retail, financial literacy and market analysis products.",
  title: {
    default: "Bharti Mall | Financial Literacy & Share Market Education",
    template: "%s | Bharti Mall",
  },

  description:
    "Bharti Mall is a financial literacy and share market education platform offering learning resources, courses and educational insights for aspiring investors.",

  keywords: [
    "Bharti Mall",
    "Bharti Share Market",
    "share market education",
    "stock market education",
    "financial literacy",
    "share market learning",
    "stock market courses",
    "investment education India",
  ],

  authors: [
    {
      name: "Bharti Mall",
    },
  ],

  creator: "Bharti Mall",
  publisher: "Bharti Mall",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Bharti Mall",
    title: "Bharti Mall | Financial Literacy & Share Market Education",
    description:
      "Explore financial literacy, share market education and learning resources from Bharti Mall.",
  },

  icons: {
    icon: "/favicon.ico",
  },

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#FFFDF5',
              color: '#171717',
              border: '1px solid #E5E5E0',
              fontWeight: 600,
              fontSize: '13px',
              borderRadius: '12px',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
            },
            success: {
              iconTheme: {
                primary: '#198754',
                secondary: '#FFFFFF',
              },
            },
            error: {
              iconTheme: {
                primary: '#D64545',
                secondary: '#FFFFFF',
              },
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
