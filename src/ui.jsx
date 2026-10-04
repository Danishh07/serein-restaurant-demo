export const Btn = ({ p, className = '', ...x }) => (
  <button className={`inline-flex items-center justify-center gap-2.5 border px-[22px] py-3.5 text-[15px] font-medium transition ${p ? 'border-terra bg-terra text-white hover:brightness-110' : 'border-ink hover:bg-ink hover:text-cream'} ${className}`} {...x} />
)
export const BtnLink = ({ className = '', ...x }) => (
  <a className={`inline-flex items-center gap-2.5 border border-ink px-[22px] py-3.5 text-[15px] font-medium transition hover:bg-ink hover:text-cream ${className}`} {...x} />
)
export const S = ({ id, className = '', children }) => (
  <section id={id} className={`py-16 md:py-28 ${className}`}>
    <div className="mx-auto max-w-[1240px] px-5 md:px-12 lg:px-16">{children}</div>
  </section>
)
export const Eyebrow = ({ children, className = '' }) => <p className={`mb-3.5 text-sm text-mute ${className}`}>{children}</p>
export const H2 = ({ children, className = '' }) => <h2 className={`text-[clamp(34px,5vw,60px)] ${className}`}>{children}</h2>
export const Cap = ({ children }) => <p className="mt-5 text-sm text-mute">{children}</p>
