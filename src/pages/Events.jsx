import { useNavigate } from "react-router-dom"
import "../App.css"

function Events() {
  const navigate = useNavigate()

  const events = [
    {
      id: 1,
      title: "Food Bank Volunteer Drive",
      date: "May 10, 2026",
      time: "8:00 AM – 2:00 PM",
      location: "Sacramento, CA",
      description:
        "Help us fight hunger in our community by lending a few hours of your time at the local food bank.",
      image: "https://images.unsplash.com/photo-1542831371-d531d36971e6",
    },
    {
      id: 2,
      title: "Community Park Cleanup Day",
      date: "May 15, 2026",
      time: "9:00 AM – 1:00 PM",
      location: "Elk Grove Park",
      description:
        "Join us for a hands-on effort to restore and beautify our local parks.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      id: 3,
      title: "After School Tutoring Program",
      date: "May 20, 2026",
      time: "3:00 PM – 6:00 PM",
      location: "Local School",
      description:
        "Make a lasting difference in a child's life by volunteering as a tutor.",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    },
  ]

  function registerEvent(eventId) {
    const user = JSON.parse(localStorage.getItem("user"))

    if (!user) {
      alert("Please log in first.")
      return
    }

    fetch("http://localhost:8080/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventId: eventId,
        userName: user.username || user.email || user.id,
      }),
    })
      .then((res) => res.text())
      .then((data) => alert(data))
      .catch((err) => {
        console.log(err)
        alert("Registration failed")
      })
  }

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
              onClick={() => registerEvent(event.id)}
            >
              Register
            </button>

            <button
              className="event-btn"
              onClick={() => navigate(`/details/${event.id}`)}
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Events