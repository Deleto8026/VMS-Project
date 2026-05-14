import { useNavigate } from "react-router-dom"
import "../App.css"

function ForgotPasswordSent(){
    //const navigate = useNavigate()

    return(
        <div className="signup-confirmation-container">
            <div className="text-align-left">
                <h1 className="margin-10">Forgot Password</h1>
                <p className="margin-10">
                    If you previously used the email address you entered to sign up for an account, an email has been sent to that address with instructions on how to reset your password.
                </p>
            </div>
        </div>
    )
}

export default ForgotPasswordSent