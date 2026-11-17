import { ArrowRight, Bike, LayoutDashboard, Smartphone, Store } from 'lucide-react'
import Link from 'next/link'
import Restaurants from '@/components/Restaurants'
import { img } from '@/lib/utils'

const apps = [
  { icon: Smartphone, title: 'Customer app', text: 'Discover, order, pay and track in real time.' },
  { icon: Store, title: 'Restaurant app', text: 'Accept orders, manage menu & payouts.' },
  { icon: Bike, title: 'Rider app', text: 'Smart assignment, navigation & earnings.' },
  { icon: LayoutDashboard, title: 'Admin panel', text: 'Commissions, zones, promos & analytics.' },
]

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-rose-500 to-orange-400">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="container-x relative grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">
          <div className="text-white animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80">1,200+ restaurants · 30-min delivery</p>
            <h1 className="mt-4 font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl">Hungry? Your favourite food is a tap away.</h1>
            <div className="mt-8 flex max-w-lg overflow-hidden rounded-2xl bg-white p-1.5 shadow-2xl">
              <input placeholder="Search for restaurants or dishes" className="min-w-0 flex-1 px-4 text-sm text-slate-900 outline-none" />
              <Link href="#restaurants" className="btn-primary rounded-xl px-6">Find food</Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img('1565299624946-b28f40a0ae38', 900)} alt="" className="ml-auto aspect-square w-[420px] rounded-full object-cover shadow-2xl ring-8 ring-white/20" />
            <div className="absolute bottom-10 left-10 rounded-2xl bg-white p-4 shadow-2xl">
              <p className="text-xs text-slate-500">Order #FR-58213</p>
              <p className="flex items-center gap-2 font-semibold text-slate-900"><Bike className="h-5 w-5 text-brand-600" /> Arriving in 6 min</p>
              <div className="mt-2 h-1.5 w-48 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-4/5 rounded-full bg-brand-500" /></div>
            </div>
          </div>
        </div>
      </section>

      <Restaurants />

      <section className="container-x mt-24">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white sm:p-12">
          <p className="eyebrow text-brand-400">Launch your own food delivery business</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold">One platform. Four apps. Fully white-labelled.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {apps.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <Icon className="h-7 w-7 text-brand-400" />
                <p className="mt-4 font-semibold">{title}</p>
                <p className="mt-1 text-sm text-slate-400">{text}</p>
              </div>
            ))}
          </div>
          <Link href="/admin" className="btn mt-10 bg-white text-slate-900 hover:bg-brand-50">Explore the admin panel <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  )
}
