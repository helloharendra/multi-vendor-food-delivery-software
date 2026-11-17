'use client'

import { useState } from 'react'
import { Clock, Leaf, Star } from 'lucide-react'
import { cuisines, restaurants } from '@/lib/data'
import { useContact } from './ContactModal'

const sorts = ['Relevance', 'Rating 4.5+', 'Fastest delivery', 'Pure veg', 'Offers'] as const

export default function Restaurants() {
  const { openContact } = useContact()
  const [cuisine, setCuisine] = useState<string | null>(null)
  const [sort, setSort] = useState<(typeof sorts)[number]>('Relevance')

  let list = restaurants.filter((r) => !cuisine || r.cuisines.toLowerCase().includes(cuisine.toLowerCase()))
  if (sort === 'Rating 4.5+') list = list.filter((r) => r.rating >= 4.5)
  if (sort === 'Pure veg') list = list.filter((r) => r.veg)
  if (sort === 'Offers') list = list.filter((r) => r.offer)
  if (sort === 'Fastest delivery') list = [...list].sort((a, b) => a.time - b.time)

  return (
    <>
      <section className="container-x mt-12">
        <h2 className="font-display text-2xl font-bold text-slate-900">What&apos;s on your mind?</h2>
        <div className="no-scrollbar mt-5 flex gap-4 overflow-x-auto pb-2">
          {cuisines.map((c) => (
            <button key={c.name} onClick={() => setCuisine(cuisine === c.name ? null : c.name)} className="flex min-w-[96px] flex-col items-center gap-2">
              <span className={`grid h-20 w-20 place-items-center rounded-full text-4xl transition ${cuisine === c.name ? 'bg-brand-100 ring-2 ring-brand-500' : 'bg-slate-100 hover:bg-slate-200'}`}>{c.emoji}</span>
              <span className={`text-sm font-medium ${cuisine === c.name ? 'text-brand-700' : 'text-slate-600'}`}>{c.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section id="restaurants" className="container-x mt-12 scroll-mt-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-2xl font-bold text-slate-900">{list.length} restaurants {cuisine ? `serving ${cuisine}` : 'delivering to you'}</h2>
          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4">
            {sorts.map((s) => <button key={s} onClick={() => setSort(s)} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium ring-1 transition ${sort === s ? 'bg-slate-900 text-white ring-slate-900' : 'bg-white text-slate-600 ring-slate-200 hover:ring-slate-300'}`}>{s}</button>)}
          </div>
        </div>
        <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((r) => (
            <button key={r.id} onClick={() => openContact(`${r.name} – menu & ordering`)} className="group text-left">
              <div className="relative overflow-hidden rounded-3xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={r.image} alt={r.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent" />
                {r.promoted && <span className="absolute left-3 top-3 rounded-md bg-slate-900/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur">Promoted</span>}
                {r.offer && <p className="absolute bottom-3 left-4 font-display text-lg font-extrabold text-white">{r.offer}</p>}
              </div>
              <div className="mt-3 px-1">
                <p className="flex items-center gap-1.5 font-display text-lg font-bold text-slate-900">{r.name}{r.veg && <Leaf className="h-4 w-4 text-emerald-600" />}</p>
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <span className="flex items-center gap-1 rounded-full bg-emerald-600 px-1.5 py-0.5 text-xs text-white"><Star className="h-3 w-3 fill-white" />{r.rating}</span>
                  <Clock className="h-3.5 w-3.5 text-slate-400" />{r.time}–{r.time + 5} min
                </p>
                <p className="mt-1 truncate text-sm text-slate-500">{r.cuisines}</p>
                <p className="text-xs text-slate-400">₹{r.costForTwo} for two · {r.distance} km</p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </>
  )
}
