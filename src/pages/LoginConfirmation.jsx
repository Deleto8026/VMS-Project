import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { verifyUser } from "../services/authService"

function LoginConfirmation() {
  const navigate = useNavigate()
  const location = useLocation()

  // get email from login page
  const email = location.state?.email

  const [code, setCode] = useState("")

  const handleConfirm = async () => {
    if (!email) {
      alert("Missing email. Please log in again.")
      navigate("/login")
      return
    }

    if (code.length !== 6) {
      alert("Please enter the 6-digit code.")
      return
    }

    const data = await verifyUser(email, code)

    if (data.success) {
      navigate("/events")
    } else {
      alert(data.message || "Invalid code. Please try again.")
    }
  }

  return (
    <div className="signup-confirmation-container">
      <div className="text-align-left">
        <h1 className="margin-10">Login Confirmation</h1>
        <p className="margin-10">
          You should have received a six-digit code via email.
        </p>
        <p className="margin-10">Enter the code below:</p>
      </div>

      <input
        type="text"
        className="verification-code"
        placeholder="000000"
        maxLength={6}
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button className="confirm-code" onClick={handleConfirm}>
        Confirm
      </button>
    </div>
  )
}

export default LoginConfirmation