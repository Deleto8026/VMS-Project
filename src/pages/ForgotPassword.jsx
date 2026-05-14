import { useNavigate } from "react-router-dom"
import "../App.css"

function ForgotPassword(){
    const navigate = useNavigate()

    //const [email, setEmail] = useState("")
    const sendReset = async () => {
        // send reset email to the email provided, if it exists in the database
        navigate("/forgot-password-sent")
    }

    return(
        <div className="signup-confirmation-container">
            <div className="text-align-left">
                <h1 className="margin-10">Forgot Password</h1>
                <p className="margin-10">
                    To recover your password, enter the email you signed up with.
                </p>
                <p className="margin-10">Enter the code below:</p>
            </div>

                <input
                    type="text"
                    className="verification-code"
                    placeholder="myemail@email.com"
                />

            <button className="confirm-code" onClick={sendReset}>
            Confirm
            </button>
        </div>
    )
}

export default ForgotPassword