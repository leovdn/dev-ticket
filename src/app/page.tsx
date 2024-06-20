import Image from 'next/image'
import { Title } from './components/Title'
import EventCard from './components/EventCard'
import { EventModel } from '@/models'

export default function HomePage() {
  const events: EventModel[] = [
    {
      id: '1',
      name: 'Event 1',
      organization: 'Organization 1',
      date: '2022-01-01',
      price: 100,
      rating: '4.5',
      image_url: 'https://via.placeholder.com/150',
      location: 'Location 1',
    },
    {
      id: '2',
      name: 'Event 2',
      organization: 'Organization 2',
      date: '2022-01-02',
      price: 200,
      rating: '4.0',
      image_url: 'https://via.placeholder.com/150',
      location: 'Location 2',
    },
  ]

  return (
    <main>
      <Title>Available Events</Title>
      <div className="mt8 sm:grid sm:grid-cols-auto-fit-cards flex flex-wrap justify-center gap-x-2 gap-y-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  )
}
