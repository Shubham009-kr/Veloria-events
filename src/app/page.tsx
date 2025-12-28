import EventCard from '@/components/EventCard'
import ExploreBtn from '@/components/ExploreBtn'
import { events } from '@/lib/constants'
import React from 'react'

// const events = [
//   { image: '/images/event1.png', 
//     title: 'Event 1',
//     slug: 'event-1',
//     location: 'location-1',
//     date: 'Date-1',
//     time: 'Time-1'
//   },
//   { image: '/images/event2.png', title: 'Event 2' },
//   { image: '/images/event3.png', title: 'Event 3' },
// ]

const page = () => {
  return (
    <section>
      <h1 className='text-center'>The Hub for every Dev <br/> Event you cant Miss.</h1>
      <p className='text-center mt-5'>Hackathons, Meetups, and Conferences, All in one place.</p>
      <ExploreBtn />
      <div className='mt-20 space-y-7'>
        <h3>Featured Events</h3>
        <ul className='events'>
          {events.map((event) => (
            <li key={event.title}>
              <EventCard { ...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default page