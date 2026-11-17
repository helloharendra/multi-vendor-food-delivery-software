'use client'

import { BadgePercent, Map, Store } from 'lucide-react'
import { useContact } from './ContactModal'

export default function AdminToolbar() {
  const { openContact } = useContact()
  return (
    <div className="flex flex-wrap gap-2">
      <button onClick={() => openContact('Delivery Zones & Surge Pricing')} className="btn-ghost"><Map className="h-4 w-4" /> Zones</button>
      <button onClick={() => openContact('Coupons & Promotions')} className="btn-ghost"><BadgePercent className="h-4 w-4" /> Promotions</button>
      <button onClick={() => openContact('Restaurant Onboarding & Commission Setup')} className="btn-primary"><Store className="h-4 w-4" /> Approve restaurants (6)</button>
    </div>
  )
}
