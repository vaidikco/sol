import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const monteserrat = Montserrat({
  variable: "--font-host",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Sonnets Of Love",
  description: "site by vaidik.co | book by KK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${monteserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
