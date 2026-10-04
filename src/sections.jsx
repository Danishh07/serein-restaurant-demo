import { useState } from 'react'
import Booking from './Booking'
import { Btn, BtnLink, S, Eyebrow, H2, Cap } from './ui'
import { img, hours, dishes, suppliers, reviews, gallery } from './data'

export function Hero({ onReserve }) {
  return (
    <section id="hero" className="relative flex min-h-[82vh] items-end overflow-hidden bg-[#151b17] text-cream md:min-h-[88vh]">
      <img
        src="/hero-1800.webp"
        srcSet="/hero-800.webp 800w, /hero-1800.webp 1800w"
        sizes="100vw"
        width="1800"
        height="930"
        alt="Serein's dining room at dinner: a waiter pours wine for a couple, the open kitchen glowing behind"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover object-[78%_50%] md:object-[68%_50%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e1410]/90 via-[#0e1410]/45 to-[#0e1410]/30 md:bg-gradient-to-r md:from-[#0e1410]/85 md:via-[#0e1410]/50 md:to-[#0e1410]/10" />
      <div className="relative z-[2] mx-auto w-full max-w-[1240px] px-5 pb-8 pt-28 md:px-12 md:pb-14 lg:px-16">
        <p className="up mb-3.5 text-[15px]">Modern British, Marylebone</p>
        <h1 className="up mb-6 text-[clamp(52px,9vw,124px)] leading-[.95] tracking-[-.02em] [animation-delay:.1s]">An evening,<br />unhurried.</h1>
        <p className="up mb-10 max-w-[30ch] text-[clamp(17px,2vw,20px)] [animation-delay:.25s]">A small room. A changing menu.<br />A little time for the things that matter.</p>
        <div className="hidden flex-wrap items-stretch gap-4 md:flex">
          <Booking />
          <div className="flex flex-col justify-center bg-ink px-[22px] py-4 text-[15px] leading-[1.8]">{hours.map((h) => <span key={h}>{h}</span>)}</div>
        </div>
        <div className="md:hidden">
          <Btn p className="mb-4 w-full" onClick={onReserve}>Reserve a table</Btn>
          <p className="text-[15px]">{hours[0]}<br />{hours[1]}</p>
        </div>
      </div>
    </section>
  )
}

export function Intro() {
  return (
    <S id="story">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-24">
        <figure>
          <img src={img.room} alt="The window table at Serein, laid for service, rain on the glass" loading="lazy" className="aspect-[4/3.6] w-full -rotate-1 object-cover md:-rotate-2" />
          <Cap>The window table, just before the doors open.</Cap>
        </figure>
        <div>
          <Eyebrow>A place to settle in</Eyebrow>
          <H2 className="mb-7">Good food.<br />No grand occasion required.</H2>
          <p className="mb-4 max-w-[62ch]">There are 38 seats at Serein, and no bad time to take one. Our open kitchen sits at the heart of the room; you’ll hear the pans before you see your plate.</p>
          <p className="mb-4 max-w-[62ch] text-mute">The menu changes weekly with what arrives from our growers, boats and bakers. British ingredients, a short wine list and a team who’ll remember how you take your bread.</p>
          <p className="mt-3 font-serif text-[30px] font-light text-terra">Come as you are.</p>
        </div>
      </div>
    </S>
  )
}

const Tag = ({ children }) => <span className="mr-1.5 rounded-full border border-line px-[9px] py-px text-[13px]">{children}</span>

function Dish({ d, big }) {
  return (
    <article className={`group shrink-0 basis-[78%] snap-start md:basis-auto ${big ? '' : 'md:grid md:grid-cols-[.85fr_1fr] md:items-start md:gap-6'}`}>
      <div className="overflow-hidden"><img src={d.img} alt={d.alt} loading="lazy" className={`block w-full object-cover transition duration-700 group-hover:scale-105 aspect-[4/5] ${big ? 'md:aspect-[16/10]' : 'md:aspect-[1/1.1]'}`} /></div>
      <div>
        <p className={`mb-1 text-sm text-mute ${big ? 'mt-3.5' : 'mt-3.5 md:mt-0'}`}>{d.course}</p>
        <div className="flex items-baseline justify-between gap-3"><h3 className="text-[clamp(24px,2.6vw,30px)] font-normal">{d.name}</h3><span>{d.price}</span></div>
        <p className="my-2 text-mute">{d.desc}</p>
        {d.tags.map((t) => <Tag key={t}>{t}</Tag>)}
      </div>
    </article>
  )
}

export function Menu() {
  return (
    <S id="menu" className="pt-0 md:pt-0">
      <div className="mb-8 flex flex-col items-start justify-between gap-6 md:mb-12 md:flex-row md:items-end">
        <div><Eyebrow>On the menu · October</Eyebrow><H2>Autumn, on a plate.</H2></div>
        <BtnLink href="#menu">View full menu ↗</BtnLink>
      </div>
      <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-[1.4fr_1fr] md:gap-14 md:overflow-visible md:px-0">
        <Dish d={dishes[0]} big />
        <div className="contents md:flex md:flex-col md:gap-8">{dishes.slice(1).map((d) => <Dish key={d.name} d={d} />)}</div>
      </div>
      <p className="mt-10 text-sm text-mute">A snapshot of this week. V = vegetarian · GF = gluten-free.<br />Tell us about allergies when you book; we’ll take care of the rest.</p>
    </S>
  )
}

export function Chef() {
  return (
    <S className="bg-sand">
      <div className="grid items-center gap-8 md:grid-cols-[1fr_1.25fr] md:gap-24">
        <figure>
          <img src={img.chef} alt="Mara Ellis, chef and co-founder, plating herbs at the pass" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          <Cap>Mara Ellis, chef &amp; co-founder, at the pass.</Cap>
        </figure>
        <div>
          <Eyebrow>From our kitchen</Eyebrow>
          <H2 className="mb-6">“Start with what’s good. Then leave it alone.”</H2>
          <p className="mb-4 max-w-[62ch]">“I write the menu after speaking to our suppliers, not before. Some weeks that means hake and leeks; others, a pumpkin so sweet it barely needs us. I want you to taste where your dinner came from.”</p>
          <p className="font-serif text-[30px] font-light text-terra">Mara Ellis</p>
          <dl className="mt-8 grid grid-cols-[90px_1fr] gap-x-5 gap-y-4 border-t border-line pt-7 md:grid-cols-[110px_1fr]">
            {suppliers.map(([k, n, d]) => (<div key={k} className="contents"><dt className="text-sm text-mute">{k}</dt><dd>{n}<small className="block text-sm text-mute">{d}</small></dd></div>))}
          </dl>
        </div>
      </div>
    </S>
  )
}

export function Reviews() {
  return (
    <S>
      <div className="mb-7 flex flex-wrap items-baseline justify-between gap-3"><Eyebrow className="!mb-0">A few kind words</Eyebrow><p className="text-[15px]">Guest reviews · 4.8 / 5 from 640 reviews</p></div>
      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map(([q, c]) => (<blockquote key={c} className="border border-line p-7 font-serif text-[clamp(22px,2.2vw,28px)] font-light leading-tight">“{q}”<cite className="mt-5 block font-sans text-sm not-italic text-mute">{c}</cite></blockquote>))}
      </div>
      <p className="mt-6 text-sm text-mute">Concept preview · Sample press and guest-review content.</p>
    </S>
  )
}

export function Private() {
  return (
    <S id="private" className="bg-sand">
      <div className="mb-10 grid items-end gap-8 md:grid-cols-2">
        <div><Eyebrow>A table of your own</Eyebrow><H2>Bring your people.</H2></div>
        <div>
          <p className="mb-4 max-w-[62ch]">A birthday, a long-overdue catch-up, or just because. Our back room seats up to 14, with a shared seasonal menu and your own pace for the evening.</p>
          <BtnLink href="mailto:hello@serein.example?subject=Private%20dining%20enquiry">Enquire ↗</BtnLink>
        </div>
      </div>
      <img src={img.pd} alt="Friends gathered around a long table in Serein's green back room" loading="lazy" className="block aspect-[4/3] w-full object-cover object-[62%_50%] md:aspect-[21/9] md:object-center" />
    </S>
  )
}

export function Gallery() {
  return (
    <S>
      <Eyebrow>Between services</Eyebrow><H2>A little of our everyday.</H2>
      <div className="mt-10 columns-2 gap-4 md:columns-3">
        {gallery.map(([src, alt, warm]) => <img key={src} src={src} alt={alt} loading="lazy" style={warm ? { filter: 'sepia(.3) saturate(.9) hue-rotate(-10deg)' } : undefined} className="mb-4 block w-full break-inside-avoid" />)}
      </div>
      <p className="mt-2 text-sm text-mute">At the pass, around the table, out on the pavement. @serein.marylebone</p>
    </S>
  )
}

const lbl = { font: '400 13px "DM Sans",system-ui', fill: '#6a5a4f', paintOrder: 'stroke', stroke: '#F5F2EA', strokeWidth: 5 }

export function Contact() {
  return (
    <S id="contact" className="bg-sand">
      <div className="grid items-center gap-8 md:grid-cols-[1fr_1.1fr] md:gap-20">
        <div>
          <Eyebrow>Just off the high street</Eyebrow><H2 className="mb-8">See you in Marylebone.</H2>
          <address className="mb-5 not-italic">18 Moxon Street, Marylebone<br />London W1U 4EW</address>
          <p>Dinner · Tue–Sat, 17:30–22:00<br />Lunch · Fri–Sat, 12:00–14:30</p>
          <p className="mb-5 text-mute">Closed Sunday &amp; Monday</p>
          <p className="mb-5">020 7946 0838<br /><a href="mailto:hello@serein.example" className="underline">hello@serein.example</a><br />Instagram · @serein.marylebone</p>
          <p className="mb-6 text-mute">Baker Street · 7-minute walk<br />Regent’s Park · 9-minute walk</p>
          <BtnLink href="https://www.google.com/maps/search/?api=1&query=18+Moxon+Street+London+W1U+4EW" target="_blank" rel="noopener">Get directions ↗</BtnLink>
        </div>
        <svg viewBox="0 0 520 400" role="img" aria-label="Illustrative map: Serein on Moxon Street, between Baker Street and Marylebone High Street" className="block h-auto w-full border border-line bg-cream">
          <rect x="40" y="215" width="130" height="75" rx="8" fill="#b9c7b0" />
          <g stroke="#EAE4D8" strokeWidth="22" fill="none"><path d="M0 95 L520 80" /><path d="M0 195 L520 205" /><path d="M0 305 L520 290" /><path d="M110 0 L95 400" /><path d="M265 0 L275 400" /><path d="M420 0 L430 400" /></g>
          <text x="280" y="228" style={lbl}>Moxon St</text><text x="432" y="130" style={lbl}>Marylebone High St</text>
          <text x="22" y="388" style={lbl}>Baker Street · 7 min</text><text x="330" y="40" style={lbl}>Regent’s Park · 9 min</text>
          <circle cx="268" cy="200" r="13" fill="#B5573A" /><circle cx="268" cy="200" r="4.5" fill="#fff" />
          <text x="288" y="176" style={{ ...lbl, font: '500 15px "DM Sans",system-ui', fill: '#1F2A24' }}>Serein</text>
        </svg>
      </div>
    </S>
  )
}

export function Footer() {
  const [m, setM] = useState('')
  return (
    <footer className="bg-ink pb-8 pt-[72px] text-cream">
      <div className="mx-auto max-w-[1240px] px-5 md:px-12 lg:px-16">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div><a href="#top" className="font-serif text-[56px] leading-none">serein.</a><p className="mt-3.5 text-[#d3cbbd]">Modern British. A Marylebone local.</p></div>
          <form onSubmit={(e) => { e.preventDefault(); setM('Thank you. This is a demo, so nothing was sent.'); e.target.reset() }}>
            <h2 className="mb-2.5 text-[30px]">A note from the kitchen.</h2>
            <p className="mb-4 text-[#d3cbbd]">New menus, supper dates. Only when there’s something to say.</p>
            <label htmlFor="em" className="mb-1.5 block text-sm text-[#d3cbbd]">Email address</label>
            <div className="flex flex-wrap gap-3"><input id="em" type="email" required autoComplete="email" placeholder="Your email address" className="min-w-[220px] flex-1 border border-line bg-cream px-4 py-3.5 text-ink" /><Btn p>Sign up</Btn></div>
            <p role="status" className="mt-2.5 text-sm">{m}</p>
          </form>
        </div>
        <div className="mt-14 flex flex-wrap justify-between gap-3 text-sm text-[#d3cbbd]"><span>© Serein 2026 · A restaurant concept</span><span className="flex gap-4"><a href="#top">Privacy</a><a href="#top">Accessibility</a><a href="#top">Newsletter preferences</a></span></div>
      </div>
    </footer>
  )
}