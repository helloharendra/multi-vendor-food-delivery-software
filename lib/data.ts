import { img } from './utils'

// Sample marketplace data for the UI demo. The complete project includes customer, restaurant, rider apps and the admin panel.
export type Restaurant = { id: string; name: string; cuisines: string; rating: number; time: number; costForTwo: number; distance: number; offer?: string; veg: boolean; image: string; promoted?: boolean }

export const cuisines = [
  { name: 'Pizza', emoji: '🍕' }, { name: 'Biryani', emoji: '🍛' }, { name: 'Burgers', emoji: '🍔' }, { name: 'Healthy', emoji: '🥗' },
  { name: 'Chinese', emoji: '🥡' }, { name: 'South Indian', emoji: '🥞' }, { name: 'Desserts', emoji: '🍰' }, { name: 'Rolls', emoji: '🌯' },
]

export const restaurants: Restaurant[] = [
  { id: 'r1', name: 'Slice of Napoli', cuisines: 'Pizza · Italian · Pasta', rating: 4.6, time: 28, costForTwo: 600, distance: 2.1, offer: '50% OFF up to ₹100', veg: false, image: img('1565299624946-b28f40a0ae38', 700), promoted: true },
  { id: 'r2', name: 'Biryani Blues', cuisines: 'Biryani · Mughlai · Kebabs', rating: 4.4, time: 35, costForTwo: 500, distance: 3.4, offer: '₹125 OFF above ₹399', veg: false, image: img('1563379091339-03b21ab4a4f8', 700) },
  { id: 'r3', name: 'The Burger Lab', cuisines: 'Burgers · American · Shakes', rating: 4.5, time: 24, costForTwo: 450, distance: 1.6, offer: 'Free fries on ₹299+', veg: false, image: img('1568901346375-23c9450c58cd', 700) },
  { id: 'r4', name: 'Green Bowl Co.', cuisines: 'Healthy · Salads · Bowls', rating: 4.7, time: 22, costForTwo: 550, distance: 1.2, veg: true, image: img('1546069901-ba9599a7e63c', 700), promoted: true },
  { id: 'r5', name: 'Bombay Pav Bhaji Co.', cuisines: 'Street Food · Pav Bhaji · Chaat', rating: 4.5, time: 26, costForTwo: 300, distance: 2.8, offer: '20% OFF', veg: true, image: img('1606491956689-2ea866880c84', 700) },
  { id: 'r6', name: 'Smash & Co.', cuisines: 'Burgers · Fries · Wings', rating: 4.3, time: 31, costForTwo: 500, distance: 4.0, veg: false, image: img('1551782450-a2132b4ba21d', 700) },
  { id: 'r7', name: 'Wood-fired Pizzeria', cuisines: 'Pizza · Garlic bread', rating: 4.6, time: 33, costForTwo: 700, distance: 3.9, offer: 'Buy 1 Get 1', veg: false, image: img('1513104890138-7c749659a591', 700) },
  { id: 'r8', name: 'Nourish Kitchen', cuisines: 'Healthy · Keto · Juices', rating: 4.8, time: 20, costForTwo: 650, distance: 0.9, veg: true, image: img('1512621776951-a57141f2eefd', 700) },
]

export const admin = {
  kpis: [
    { label: 'GMV today', value: '₹18.6L', delta: '+14%' },
    { label: 'Orders today', value: '4,912', delta: '+9%' },
    { label: 'Commission earned', value: '₹3.1L', delta: '+11%' },
    { label: 'Avg. delivery time', value: '27 min', delta: '−2 min' },
  ],
  liveOrders: [
    { id: '#FR-58213', restaurant: 'Slice of Napoli', customer: 'Ananya, Indiranagar', rider: 'Rahul K.', status: 'Out for delivery', eta: '6 min', amount: 642 },
    { id: '#FR-58212', restaurant: 'Biryani Blues', customer: 'Vikram, HSR Layout', rider: 'Imran S.', status: 'Picked up', eta: '14 min', amount: 518 },
    { id: '#FR-58211', restaurant: 'Green Bowl Co.', customer: 'Sneha, Koramangala', rider: 'Assigning…', status: 'Preparing', eta: '22 min', amount: 437 },
    { id: '#FR-58210', restaurant: 'The Burger Lab', customer: 'Arjun, BTM', rider: '—', status: 'New', eta: '—', amount: 389 },
    { id: '#FR-58209', restaurant: 'Bombay Pav Bhaji Co.', customer: 'Meera, Jayanagar', rider: 'Suresh M.', status: 'Delivered', eta: '—', amount: 276 },
  ],
  topRestaurants: [
    { name: 'Slice of Napoli', orders: 612, revenue: 384000, commission: 18 },
    { name: 'Biryani Blues', orders: 548, revenue: 296000, commission: 20 },
    { name: 'Nourish Kitchen', orders: 401, revenue: 262000, commission: 15 },
    { name: 'The Burger Lab', orders: 389, revenue: 174000, commission: 18 },
  ],
  riders: { online: 386, busy: 241, idle: 145 },
  hourly: [12, 18, 46, 88, 72, 34, 22, 30, 64, 118, 132, 96],
}
