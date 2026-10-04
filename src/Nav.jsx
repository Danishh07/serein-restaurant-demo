import { useState } from 'react'
import { Btn } from './ui'

const links = [['#menu', 'Menu'], ['#story', 'Our story'], ['#private', 'Private dining'], ['#contact', 'Contact']]

export default function Nav({ onReserve }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-cream">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 md:px-12 lg:px-16">
        <a href="#top" className="font-serif text-[34px]">serein.</a>
        <nav aria-label="Main" className={open ? 'fixed inset-0 z-30 flex flex-col items-center justify-center gap-7 bg-cream font-serif text-4xl font-light' : 'hidden gap-9 text-[15px] md:flex'}>
          {links.map(([h, l]) => <a key={h} href={h} onClick={() => setOpen(false)} className="hover:text-terra">{l}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <Btn p className="!py-2.5" onClick={onReserve}>Reserve</Btn>
          <button className="relative z-[31] py-2.5 text-[15px] font-medium md:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
        </div>
      </div>
    </header>
  )
}
