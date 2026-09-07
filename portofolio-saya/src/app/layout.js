import { Analytics } from '@vercel/analytics/next'
import { Inter, Poppins, Caveat } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata = {
  title: 'Raka Pratama — Web Developer',
  description:
    'Portofolio Raka Pratama, seorang Web Developer asal Indonesia yang membangun antarmuka web modern, cepat, dan ramah pengguna.',
  generator: 'v0.app',
}

export const viewport = {
  colorScheme: 'dark',
  themeColor: '#1a1030',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${poppins.variable} ${caveat.variable} bg-background`}
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
