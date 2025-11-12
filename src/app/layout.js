import { Geist_Mono, Mona_Sans } from "next/font/google";
import "./globals.css";
// import components
import Footer from "@/components/footer/Footer";
import NavigationBar from "@/components/navigationBar/NavigationBar";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Koushik Barmon | Frontend Web Developer & Designer",
  description:
    "Koushik Barmon is a passionate Frontend Web Developer skilled in React, Next.js, and modern UI design. Crafting fast, responsive, and visually engaging web experiences with clean code and creative precision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${monaSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationBar />
        <main className="pt-24 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
