import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Btn } from './ui'

const times = []
for (let m = 1050; m <= 1290; m += 30) times.push(`${String((m / 60) | 0).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`)
const today = new Date().toISOString().slice(0, 10)
const day = (v) => new Date(v + 'T12:00')

export default function Booking({ modal, onClose }) {
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { time: '19:00', guests: '2' } })
  const [msg, setMsg] = useState('')
  const submit = (d) => setMsg(`Thanks. A table for ${d.guests} on ${day(d.date).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })} at ${d.time}. This is a demo, so no booking was made.`)
  const lab = 'flex min-w-0 flex-col gap-0.5 px-[18px] py-3 text-[13px] text-mute'
  const inp = 'w-full bg-transparent py-0.5 text-base text-ink'
  const grid = modal ? 'grid-cols-1 border border-line mb-3.5 [&>label]:border-b [&>label]:border-line last:[&>label]:border-b-0' : 'grid-cols-3 [&>label]:border-r [&>label]:border-line'
  return (
    <form onSubmit={handleSubmit(submit)} noValidate className={modal ? '' : 'flex max-w-[760px] flex-1 basis-[560px] flex-wrap items-center border border-line bg-cream text-ink'}>
      <div className={`grid flex-1 ${grid}`}>
        <label className={lab}>Date
          <input type="date" min={today} className={inp} {...register('date', { required: 'Pick a date.', validate: (v) => ![0, 1].includes(day(v).getDay()) || 'We are closed on Sundays and Mondays.' })} />
        </label>
        <label className={lab}>Time
          <select className={inp} {...register('time')}>{times.map((t) => <option key={t}>{t}</option>)}</select>
        </label>
        <label className={lab}>Guests
          <select className={inp} {...register('guests')}>{[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <option key={n} value={n}>{n} guest{n > 1 ? 's' : ''}</option>)}</select>
        </label>
      </div>
      <Btn p className={modal ? 'w-full mb-2.5' : 'm-2.5'}>Find a table</Btn>
      {modal && <Btn type="button" className="mb-2 w-full" onClick={onClose}>Close</Btn>}
      {(errors.date || msg) && <p role="status" className="basis-full border-t border-line px-[18px] py-2.5 text-sm text-ink">{errors.date?.message || msg}</p>}
    </form>
  )
}
