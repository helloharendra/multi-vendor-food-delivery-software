import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ContactProvider, DemoBar } from '@/components/ContactModal'
import Header from '@/components/Header'

const sans = Inter({ subsets: ['latin'], variable: '--font-sans' })
const display = Poppins({ subsets: ['latin'], variable: '--font-display', weight: ['600', '700', '800'] })

export const metadata: Metadata = {
  title: 'FoodRush – Multi-Vendor Food Delivery Software Demo | Naya Prayog Technologies',
  description: 'Premium multi-restaurant food delivery marketplace UI demo with customer storefront and super-admin panel. Contact Naya Prayog Technologies for the complete project with customer, restaurant & rider apps.',
}

const APP = 'FoodRush'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans">
        <ContactProvider appName={APP}>
          <DemoBar appName={APP} />
          <Header />
          <main>{children}</main>
          <footer className="mt-24 bg-slate-950 py-10 text-center text-sm text-slate-400">
            <p className="font-display text-2xl font-extrabold text-white">Food<span className="text-brand-500">Rush</span></p>
            <p className="mt-2">Customer app · Restaurant app · Rider app · Admin panel. UI demo by Naya Prayog Technologies · nayaprayog.com</p>
          </footer>
        </ContactProvider>
      </body>
    </html>
  )
}
