import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Events from "./pages/Events"
import Details from "./pages/Details"
import Profile from "./pages/Profile"
import Confirmation from "./pages/Confirmation"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Logout from "./pages/Logout"
import { Routes, Route, useNavigate } from "react-router-dom"
import { useState } from "react"
import { signupUser } from "./services/authService"

// Signup Page
function SignupPage() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!formData.firstName || !formData.lastName || !formData.username || !formData.email || !formData.password) {
      alert("Please fill in all fields.")
      return
    }

    const data = await signupUser(formData)

    if (data.success) {
      navigate("/confirmation")
    } else {
      alert(data.message || "Signup failed.")
    }
  }

  return (
    <>
      <div className="introduction">
        <p className="welcome">
          Welcome to the Volunteer management system portal! Please create an
          account so you can see all of our amazing events!
        </p>
      </div>

      <div className="center">
        <div className="signup-login-rectangle">
          <h1 className="call-to-action">Create an Account</h1>

          <div>
            <input className="signup-page-input" placeholder="First Name" name="firstName" onChange={handleChange} />
            <input className="signup-page-input" placeholder="Last Name" name="lastName" onChange={handleChange} />
            <input className="signup-page-input" placeholder="Username" name="username" onChange={handleChange} />
            <input className="signup-page-input" placeholder="E-mail" name="email" onChange={handleChange} />
            <input className="signup-page-input" placeholder="Password" type="password" name="password" onChange={handleChange} />
          </div>

          <button
            type="button"
            className="sign-up"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <div className="app-container">
      <Navbar></Navbar>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App 