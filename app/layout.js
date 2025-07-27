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
  title: "Next.js App",
  description: "Using Inter (Sans) and Host Grotesk (Serif)",
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
