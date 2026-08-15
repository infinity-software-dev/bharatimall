import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bharati Mall | Premium B2C Share Market Portal",
  description: "Explore Bharati Mall - Reimagining customer-first retail, financial literacy and market analysis products.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased font-sans"
    >
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
