import "../App.css"
import { useParams, useNavigate } from "react-router-dom"

function Details() {
  const { id } = useParams()
  const navigate = useNavigate()

  const events = {
    1: {
      title: "Food Bank Volunteer Drive",
      image: "https://images.unsplash.com/photo-1542831371-d531d36971e6",
      description: "Help distribute food to families in need.",
      date: "May 10, 2026",
      time: "8:00 AM – 2:00 PM",
      location: "Sacramento, CA",
      opportunities: ["Food Distribution", "Event Support"],
    },
    2: {
      title: "Community Park Cleanup Day",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      description: "Clean and restore local parks.",
      date: "May 15, 2026",
      time: "9:00 AM – 1:00 PM",
      location: "Elk Grove Park",
      opportunities: ["Trash Collection", "Planting"],
    },
    3: {
      title: "After School Tutoring Program",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
      description: "Help students with homework.",
      date: "May 20, 2026",
      time: "3:00 PM – 6:00 PM",
      location: "Local School",
      opportunities: ["Math Tutoring", "Reading Help"],
    },
  }

  const event = events[id]

  function registerEvent() {
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
    eventId: Number(id),
    userName: user.username || user.email || user.id,
  }),
})
  .then((res) => res.text())
  .then(() => navigate("/registration-success"))
  .catch((err) => {
    console.log(err)
    alert("Registration failed")
  })
  }

  if (!event) return <h2>Event not found</h2>

  return (
    <div className="details-page">
      <div className="details-content">
        <img src={event.image} alt={event.title} className="details-image" />

        <h1>{event.title}</h1>

        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Location:</strong> {event.location}</p>

        <p className="details-description">{event.description}</p>

        <div className="details-list">
          <strong>Available Opportunities:</strong>
          <ul>
            {event.opportunities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <button className="details-btn" onClick={registerEvent}>
          Register
        </button>

      
      </div>
    </div>
  )
}

export default Details