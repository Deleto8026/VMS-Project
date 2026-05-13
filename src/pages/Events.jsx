import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";

function Events() {
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/events")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error(error));
  }, []);

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
  );
}

export default Events;