import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import {auth} from '@/auth';

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Villa website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

      const session = await auth();

  return (
    <html lang="en">
      <body
        className={`${raleway.variable}  antialiased`}>
          <SessionProvider session={ session }>
          <Navbar/>
            <main className="bg-gray-50 min-h-screen">{children}</main>
            <Footer/>
            {/*SpeedInsights/>*/}
          </SessionProvider>
        
      </body>
    
    </html>
  );
}
