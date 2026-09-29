import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Forum, Lora } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import './globals.css'

const logo = localFont({
  src: '../fonts/RuslanDisplay-Regular.ttf',
  variable: '--font-logo',
  display: 'swap',
  weight: '400',
})

const display = Forum({
  variable: '--font-display',
  subsets: ['latin', 'latin-ext'],
  weight: '400',
})

const body = Lora({
  variable: '--font-body',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'От сказки к профессии',
  description:
    'Сказочное путешествие для второклассников: качества героев сказок и профессии, где они могут пригодиться.',
}

export default function RootLayout ({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="ru"
      className={`${logo.variable} ${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
