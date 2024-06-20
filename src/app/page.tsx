import { Title } from './components/Title'
import EventCard from './components/EventCard'
import { EventModel } from '@/models'

export default function HomePage() {
  const events: EventModel[] = [
    {
      id: '1',
      name: 'Bring Me The Horizon',
      organization: 'Organization 1',
      date: '2024-12-01T00:00:00',
      price: 200,
      rating: '4.9',
      image_url: 'https://unsplash.com/photos/9b9c5b9b0d1',
      location: 'São Paulo, SP',
    },
    {
      id: '2',
      name: 'Falling In Reverse',
      organization: 'Organization 2',
      date: '2024-11-24T00:00:00',
      price: 200,
      rating: '4.8',
      image_url: 'https://unsplash.com/photos/9b9c5b9b0d1',
      location: 'São Paulo, SP',
    },
    {
      id: '3',
      name: 'Our Last Night',
      organization: 'Organization 2',
      date: '2024-11-21T00:00:00',
      price: 200,
      rating: '4.4',
      image_url: 'https://unsplash.com/photos/9b9c5b9b0d1',
      location: 'São Paulo, SP',
    },
  ]

  return (
    <main className="mt-10 flex flex-col">
      <Title>Available Events</Title>

      <div className="mt-8 sm:grid sm:grid-cols-auto-fit-cards flex flex-wrap justify-center gap-x-2 gap-y-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  )
}
