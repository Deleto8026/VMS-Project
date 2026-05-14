import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import "../App.css"

const defaultEvents = [
  {
    id: "food",
    title: "Food Bank Volunteer Drive",
    date: "May 10, 2026",
    time: "8:00 AM – 2:00 PM",
    location: "Sacramento, CA",
    description:
      "Help us fight hunger in our community by lending a few hours of your time at the local food bank. Volunteers will sort and pack food donations, assist with distribution, and help ensure families in need receive essential supplies. This is a meaningful opportunity to make a direct and lasting impact on the lives of others.",
    image: "https://images.unsplash.com/photo-1542831371-d531d36971e6",
  },
  {
    id: "park",
    title: "Community Park Cleanup Day",
    date: "May 15, 2026",
    time: "9:00 AM – 1:00 PM",
    location: "Elk Grove Park",
    description:
      "Join us for a hands-on effort to restore and beautify our local parks. Volunteers will help collect litter, clear overgrown trails, and plant greenery across the grounds. Together, we can create cleaner, safer, and more enjoyable spaces for our community.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: "tutor",
    title: "After School Tutoring Program",
    date: "May 20, 2026",
    time: "3:00 PM – 6:00 PM",
    location: "Local School",
    description:
      "Make a lasting difference in a child's life by volunteering as a tutor in our after school program. Volunteers will work one-on-one or in small groups with students, helping them improve in subjects like math, reading, and science. No teaching experience is required, just patience, encouragement, and a willingness to help.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
  },
]

function Events() {
  const navigate = useNavigate()
  const [events, setEvents] = useState(defaultEvents)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      setLoading(true)
      const response = await fetch("http://localhost:8080/api/events", {
        credentials: "include"
      })

      if (!response.ok) {
        throw new Error("Failed to fetch events")
      }

      const data = await response.json()
      if (Array.isArray(data) && data.length > 0) {
        setEvents(data.map(mapBackendEvent))
      }
      setError(null)
    } catch (err) {
      console.error("Error fetching events:", err)
      setError("Failed to load events from the server. Showing default events.")
    } finally {
      setLoading(false)
    }
  }

  const mapBackendEvent = (event) => ({
    id: event.eventId?.toString() || event.id,
    eventId: event.eventId,
    title: event.eventName || event.title,
    date: event.eventDate || event.date,
    time: event.time || "Time TBD",
    location: event.location || event.location,
    description: event.description || event.description,
    image: event.image || "https://images.unsplash.com/photo-1552664730-d307ca884978",
  })

  if (loading) {
    return <div className="events-container"><p>Loading events...</p></div>
  }

  return (
    <div className="events-container">
      {error && <p style={{ color: "orange" }}>{error}</p>}

      {events.map((event) => (
        <div key={event.eventId || event.id} className="event-row">

          {/* LEFT TEXT */}
          <div className="event-left">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
          </div>

          {/* RIGHT SIDE */}
          <div className="event-right">
            <img src={event.image} alt={event.title} />

            <button
              className="event-btn"
              onClick={() => navigate(`/details/${event.eventId || event.id}`)}
            >
              Register
            </button>
          </div>

        </div>
      ))}
    </div>
  )
}

export default Events