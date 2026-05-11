import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { verifyUser } from "../services/authService"

function Confirmation() {
  const navigate = useNavigate()
  const location = useLocation()
  const email = location.state?.email

  const [code, setCode] = useState("")

  const handleConfirm = async () => {
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
        <h1 className="margin-10">Sign-up Confirmation</h1>
        <p className="margin-10">
          You should have received a six-digit code via email. If you have not
          received the code yet, please wait up to five minutes before requesting
          a new code.
        </p>
        <p className="margin-10">Enter the code below:</p>
      </div>

      <input
        type="text"
        className="verification-code"
        id="verification-code"
        name="verificationCode"
        placeholder="000000"
        inputMode="numeric"
        pattern="[0-9]*"
        autoComplete="one-time-code"
        maxLength={6}
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button
        className="confirm-code"
        onClick={handleConfirm}
      >
        Confirm
      </button>
    </div>
  )
}

export default Confirmation