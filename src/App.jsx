import { useEffect, useRef, useState } from 'react'
import Nav from './Nav'
import Booking from './Booking'
import { Btn } from './ui'
import { Hero, Intro, Menu, Chef, Reviews, Private, Gallery, Contact, Footer } from './sections'

export default function App() {
  const dlg = useRef(null)
  const [dock, setDock] = useState(false)
  const open = () => dlg.current.showModal()
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setDock(!e.isIntersecting))
    io.observe(document.getElementById('hero'))
    return () => io.disconnect()
  }, [])
  return (
    <div id="top">
      <Nav onReserve={open} />
      <main><Hero onReserve={open} /><Intro /><Menu /><Chef /><Reviews /><Private /><Gallery /><Contact /></main>
      <Footer />
      <div className={`fixed inset-x-0 bottom-0 z-[15] border-t border-line bg-cream px-5 pt-3 pb-[calc(12px+env(safe-area-inset-bottom,0px))] transition-transform duration-300 md:hidden ${dock ? '' : 'translate-y-[110%]'}`}>
        <Btn p className="w-full" onClick={open}>Reserve a table</Btn>
      </div>
      <dialog ref={dlg} aria-labelledby="dt" onClick={(e) => e.target === dlg.current && dlg.current.close()} className="m-auto max-h-[90vh] w-[min(440px,92vw)] bg-cream p-7 text-ink backdrop:bg-[#0e1410]/60">
        <h2 id="dt" className="mb-4 text-[34px]">Reserve a table</h2>
        <Booking modal onClose={() => dlg.current.close()} />
      </dialog>
    </div>
  )
}
