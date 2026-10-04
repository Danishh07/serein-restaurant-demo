import room from './assets/intro-room.jpg'
import pumpkin from './assets/dish-pumpkin.jpg'
import hake from './assets/dish-hake.jpg'
import cake from './assets/dish-pear-cake.jpg'
import chef from './assets/chef.jpg'
import pd from './assets/private-dining.jpg'
import g1 from './assets/gallery-1.jpg'
import g2 from './assets/gallery-2.jpg'
import g3 from './assets/gallery-3.jpg'
import g4 from './assets/gallery-4.jpg'
import g5 from './assets/gallery-5.jpg'
import g6 from './assets/gallery-6.jpg'

export const img = {room, chef, pd }
export const hours = ['Tuesday–Saturday · Dinner from 17:30', 'Friday & Saturday · Lunch 12:00–14:30']
export const dishes = [
  { img: pumpkin, alt: 'Roast Delica pumpkin with whipped ricotta, pumpkin seeds and sage on a green platter', course: 'To start', name: 'Roast Delica pumpkin', price: '£19', desc: 'Brown butter, whipped ricotta, toasted pumpkin seeds and sage.', tags: ['V', 'GF'] },
  { img: hake, alt: 'Pan-roasted hake with mussels in a blue-rimmed bowl', course: 'Main', name: 'Day-boat hake', price: '£28', desc: 'Pan-roasted, with mussels, cider broth and charred leeks.', tags: ['GF'] },
  { img: cake, alt: 'Pear and ginger cake with cream on a scalloped plate', course: 'To finish', name: 'Pear & ginger cake', price: '£9', desc: 'Warm ginger sponge, poached pear and cultured cream.', tags: ['V'] },
]
export const suppliers = [
  ['The farm', 'Hollin Farm, Herefordshire', 'Delica squash, greens and herbs.'],
  ['The fishery', 'Penhale Day Boats, St Ives', 'Day-boat hake from Cornish waters.'],
  ['The bakery', 'Crumb & Ember, Dalston', 'Slow-fermented sourdough, every morning.'],
]
export const reviews = [
  ['A small room with a generous spirit.', 'Marylebone Gazette'],
  ['The sort of local you wish was yours.', 'The Weekend Table'],
  ['Seasonal cooking, without the ceremony.', 'Guest review'],
]
export const gallery = [
  [g1, 'Hands shaping dough on a floured table'], [g3, 'Two friends laughing as one pours red wine'],
  [g5, "Serein's green shopfront glowing on a rainy street", true], [g2, 'Mushrooms with thyme sizzling in a cast-iron pan'],
  [g4, 'Tearing warm sourdough, with butter on a blue plate'], [g6, 'Two glasses of red wine on the window table'],
]
