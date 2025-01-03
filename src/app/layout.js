import { Mona_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
// import components
import NavigationBar from "@/components/navigationBar/NavigationBar";
import Footer from "@/components/footer/Footer";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aditya Dev Barmon | Web developer",
  description: "Aditya Dev Barmon is a web developer based in Bangladesh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${monaSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
