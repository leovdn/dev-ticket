import { Title } from './components/Title'
import EventCard from './components/EventCard'
import { EventModel } from '@/models'

export async function getEvents(): Promise<EventModel[]> {
  const response = await fetch('http://localhost:8080/events', {
    cache: 'no-store',
  })

  return (await response.json()).events
}

export default async function HomePage() {
  const events = await getEvents()

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
