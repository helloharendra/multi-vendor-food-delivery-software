'use client'

import Link from 'next/link'
import { ChevronDown, LayoutDashboard, MapPin, ShoppingBag, Store, User } from 'lucide-react'
import { useContact } from './ContactModal'

export default function Header() {
  const { openContact } = useContact()
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center gap-6">
        <Link href="/" className="font-display text-2xl font-extrabold tracking-tight text-slate-900">Food<span className="text-brand-600">Rush</span></Link>
        <button onClick={() => openContact('Location Detection & Address Book')} className="hidden items-center gap-1 text-sm md:flex">
          <MapPin className="h-4 w-4 text-brand-600" /><b className="text-slate-900">Koramangala</b><span className="text-slate-500">Bengaluru</span><ChevronDown className="h-4 w-4 text-slate-400" />
        </button>
        <nav className="ml-auto flex items-center gap-1 text-sm font-medium text-slate-600">
          <button onClick={() => openContact('Restaurant Partner Onboarding')} className="hidden items-center gap-1.5 rounded-full px-3 py-2 hover:bg-slate-100 lg:flex"><Store className="h-4 w-4" /> Add restaurant</button>
          <Link href="/admin" className="flex items-center gap-1.5 rounded-full px-3 py-2 hover:bg-slate-100"><LayoutDashboard className="h-4 w-4" /> <span className="hidden sm:inline">Admin panel</span></Link>
          <button onClick={() => openContact('Customer Login (OTP)')} className="rounded-full p-2.5 hover:bg-slate-100" aria-label="Login"><User className="h-5 w-5" /></button>
          <button onClick={() => openContact('Cart & Checkout')} className="rounded-full p-2.5 hover:bg-slate-100" aria-label="Cart"><ShoppingBag className="h-5 w-5" /></button>
        </nav>
      </div>
    </header>
  )
}
