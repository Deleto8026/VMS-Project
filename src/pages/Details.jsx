import "../App.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/events/${id}`)
      .then((response) => response.json())
      .then((data) => setEvent(data))
      .catch((error) => console.error(error));
  }, [id]);

  function registerEvent() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please log in first.");
      return;
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
        console.log(err);
        alert("Registration failed");
      });
  }

  if (!event) return <h2>Loading...</h2>;

  return (
    <div className="details-page">
      <div className="details-content">
        <img
          src={event.image}
          alt={event.title}
          className="details-image"
        />

        <h1>{event.title}</h1>

        <p>
          <strong>Date:</strong> {event.eventDate}
        </p>

        <p>
          <strong>Time:</strong> {event.eventTime}
        </p>

        <p>
          <strong>Location:</strong> {event.location}
        </p>

        <p className="details-description">
          {event.description}
        </p>

        <button className="details-btn" onClick={registerEvent}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Details;