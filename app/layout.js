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
  title: 'Create Beyond Limits | vaidik.co',
  description: 'The greatest web development and AI solutions for your business.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${libre.variable}`}>
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}