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
    default: "Bharti Financial Mall",
    template: "%s | Bharti Financial Mall",
  },

  description: "Bharti Financial Mall Pvt. Ltd. is a customer-focused company committed to delivering innovative products, services and solutions designed to create lasting value.",

  keywords: [
    "Bharti Financial Mall",
    "Bharti Financial Mall Pvt Ltd",
    "Bharti Mall",
    "Bharti Financial",
  ],

  authors: [
    {
      name: "Bharti Financial Mall Pvt. Ltd.",
    },
  ],

  creator: "Bharti Financial Mall Pvt. Ltd.",
  publisher: "Bharti Financial Mall Pvt. Ltd.",

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
    siteName: "Bharti Financial Mall",
    title: "Bharti Financial Mall Pvt. Ltd.",
    description: "Discover Bharti Financial Mall Pvt. Ltd. and learn more about our company, products, services and vision.",
    url: "https://www.bhartimall.com",
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
