import type { Metadata } from 'next'
import { Bike } from 'lucide-react'
import AdminToolbar from '@/components/AdminToolbar'
import { admin } from '@/lib/data'
import { inr } from '@/lib/utils'

export const metadata: Metadata = { title: 'Super admin · FoodRush demo' }

const tone: Record<string, string> = {
  New: 'bg-sky-50 text-sky-700', Preparing: 'bg-amber-50 text-amber-700', 'Picked up': 'bg-violet-50 text-violet-700',
  'Out for delivery': 'bg-brand-50 text-brand-700', Delivered: 'bg-emerald-50 text-emerald-700',
}
const hours = ['8a', '10a', '12p', '1p', '2p', '4p', '5p', '6p', '7p', '8p', '9p', '10p']

export default function Admin() {
  const max = Math.max(...admin.hourly)
  const { online, busy, idle } = admin.riders
  return (
    <div className="bg-slate-50 pb-10">
      <div className="container-x py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="eyebrow">Super admin</p><h1 className="mt-2 font-display text-3xl font-extrabold text-slate-900">Bengaluru · Live operations</h1></div>
          <AdminToolbar />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {admin.kpis.map((k) => (
            <div key={k.label} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70">
              <p className="text-sm text-slate-500">{k.label}</p>
              <p className="mt-2 font-display text-3xl font-bold text-slate-900">{k.value}</p>
              <p className="mt-1 text-xs font-semibold text-emerald-600">{k.delta} vs last week</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70 lg:col-span-2">
            <p className="font-semibold text-slate-900">Orders by hour</p>
            <div className="mt-6 flex h-52 items-end gap-2">
              {admin.hourly.map((v, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-lg bg-gradient-to-t from-brand-600 to-orange-400 opacity-90" style={{ height: `${(v / max) * 100}%` }} />
                  <span className="text-[10px] text-slate-400">{hours[i]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-slate-900 p-6 text-white">
            <p className="flex items-center gap-2 font-semibold"><Bike className="h-5 w-5 text-brand-400" /> Delivery fleet</p>
            <p className="mt-4 font-display text-5xl font-extrabold">{online}</p>
            <p className="text-sm text-slate-400">riders online</p>
            <div className="mt-6 flex h-3 overflow-hidden rounded-full bg-white/10">
              <div className="bg-brand-500" style={{ width: `${(busy / online) * 100}%` }} />
              <div className="bg-emerald-400" style={{ width: `${(idle / online) * 100}%` }} />
            </div>
            <div className="mt-3 flex justify-between text-sm"><span className="text-brand-300">● {busy} on delivery</span><span className="text-emerald-300">● {idle} available</span></div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/70 lg:col-span-2">
            <p className="flex items-center gap-2 border-b border-slate-100 px-6 py-4 font-semibold text-slate-900"><span className="h-2 w-2 animate-pulse rounded-full bg-brand-500" /> Live orders</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-sm">
                <thead><tr className="text-left text-xs uppercase tracking-wide text-slate-400">{['Order', 'Restaurant', 'Customer', 'Rider', 'Status', 'ETA', 'Amount'].map((h) => <th key={h} className="px-6 py-3 font-semibold">{h}</th>)}</tr></thead>
                <tbody className="divide-y divide-slate-100">
                  {admin.liveOrders.map((o) => (
                    <tr key={o.id} className="hover:bg-slate-50">
                      <td className="px-6 py-3.5 font-semibold text-slate-900">{o.id}</td>
                      <td className="px-6 py-3.5 text-slate-600">{o.restaurant}</td>
                      <td className="px-6 py-3.5 text-slate-600">{o.customer}</td>
                      <td className="px-6 py-3.5 text-slate-600">{o.rider}</td>
                      <td className="px-6 py-3.5"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${tone[o.status]}`}>{o.status}</span></td>
                      <td className="px-6 py-3.5 text-slate-600">{o.eta}</td>
                      <td className="px-6 py-3.5 font-semibold text-slate-900">{inr(o.amount)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70">
            <p className="font-semibold text-slate-900">Top restaurants (week)</p>
            <ul className="mt-4 space-y-4">
              {admin.topRestaurants.map((r, i) => (
                <li key={r.name} className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-50 text-sm font-bold text-brand-700">{i + 1}</span>
                  <div className="flex-1"><p className="text-sm font-semibold text-slate-900">{r.name}</p><p className="text-xs text-slate-500">{r.orders} orders · {r.commission}% commission</p></div>
                  <span className="text-sm font-bold text-slate-900">{inr(r.revenue)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
