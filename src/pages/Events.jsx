import { useNavigate } from "react-router-dom"
import "../App.css"

function Events() {
  const navigate = useNavigate()

  const events = [
    {
      id: 1,
      title: "Food Bank Volunteer Drive",
      description:
        "Help us fight hunger in our community by lending a few hours of your time at the local food bank.",
      image: "https://images.unsplash.com/photo-1542831371-d531d36971e6",
    },
    {
      id: 2,
      title: "Community Park Cleanup Day",
      description:
        "Join us for a hands-on effort to restore and beautify our local parks.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      id: 3,
      title: "After School Tutoring Program",
      description:
        "Make a lasting difference in a child's life by volunteering as a tutor.",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    },
  ]

  return (
    <div className="events-container">
      {events.map((event) => (
        <div key={event.id} className="event-row">
          <div className="event-left">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>

          <div className="event-right">
            <img src={event.image} alt={event.title} />

            <button
              className="event-btn"
              onClick={() => navigate(`/details/${event.id}`)}
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