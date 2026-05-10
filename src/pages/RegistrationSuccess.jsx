import "../App.css"
import { useNavigate } from "react-router-dom"

function RegistrationSuccess() {
  const navigate = useNavigate()

  return (
    <div className="confirmation-page">
      <div className="confirmation-card">
        <h1>Registration Successful!</h1>

        <p>You have successfully signed up for the event.</p>

        <hr />

        <h2>Event Details</h2>

        <div className="confirmation-details">
          <h3>Food Bank Volunteer Drive</h3>

          <p>
            <strong>Location:</strong> Sacramento, CA
          </p>

          <p>
            <strong>Hours:</strong> 8am - 2pm (6 hours)
          </p>
        </div>

        <div className="confirmation-message">
          Registration has been saved successfully.
        </div>

        <button
          className="continue-btn"
          onClick={() => navigate("/events")}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default RegistrationSuccess