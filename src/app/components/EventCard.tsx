import { EventModel } from '@/models'
import Link from 'next/link'

export type EventCardProps = {
  event: EventModel
}

export default function EventCard({ event }: EventCardProps) {
  const { id, name, organization, date, image_url, location, price, rating } =
    event

  const formattedDate = new Date(date).toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  return (
    <div className="flex w-[277px] flex-col rounded-2xl bg-secondary">
      <Link href={`/event/${id}/spots-layout`}>
        <img src={image_url} alt={name} />
        <div className="flex flex-col gap-y-2 px-4 py-6">
          <p className="text-sm uppercase text-subtitle">{formattedDate}</p>
          <p className="font-semibold">{name}</p>
          <p className="text-sm font-normal">{location}</p>
        </div>
      </Link>
    </div>
  )
}
