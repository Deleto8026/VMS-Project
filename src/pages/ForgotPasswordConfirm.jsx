import { useNavigate } from "react-router-dom"
import "../App.css"

function ForgotPasswordConfirm(){
    const navigate = useNavigate()

    const goToLogin = async () => {
        navigate("/login")
    }

    return(
        <div className="signup-confirmation-container">
            <div className="text-align-left">
                <h1 className="margin-10">Password Reset</h1>
                <p className="margin-10">
                    Your password has been successfully reset!
                    To continue, log in with your new password.
                </p>
            </div>
        <button className="confirm-code" onClick={goToLogin}>
            Got it!
        </button>
        </div>
    )
}

export default ForgotPasswordConfirm