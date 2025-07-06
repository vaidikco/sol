import './globals.css'
import { Inter, Libre_Baskerville } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const libre = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre',
  display: 'swap',
})

export const metadata = {
  title: 'Nitlix | Building the tomorrow, before you won’t be able to.',
  description:
    "Inspiration for efficiency and innovation is the engine of mankind. Let's say I'm an engine designer; so let's lead the future together.",
  openGraph: {
    title: 'Nitlix | Building the tomorrow, before you won’t be able to.',
    description:
      "Inspiration for efficiency and innovation is the engine of mankind. Let's say I'm an engine designer; so let's lead the future together.",
    url: 'https://vaidik.co/',
    siteName: 'Nitlix',
    images: [
      {
        url: 'https://vaidik.co/image.png', // Full URL to the preview image
        width: 1200,
        height: 630,
        alt: 'Nitlix Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nitlix | Building the tomorrow, before you won’t be able to.',
    description:
      "Inspiration for efficiency and innovation is the engine of mankind. Let's say I'm an engine designer; so let's lead the future together.",
    images: ['https://vaidik.co/image.png'],
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${libre.variable}`}>
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}