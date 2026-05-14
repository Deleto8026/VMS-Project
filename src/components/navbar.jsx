<<<<<<< HEAD
import {useLocation} from "react-router-dom";

function Navbar() {
    let location = useLocation();
    const loggedIn = true;
    if (location.pathname == "/dashboard" || location.pathname == "/partnerships" || location.pathname == "/about" || location.pathname == "/events" || location.pathname == "/details/:id") {
        {/*Return full header with nav links*/}
        if (loggedIn) {
            return (
                <nav>
                    <div class="navbar">
                        <div class="leftalign">
                            <div class="navlogo">✿</div>
                            <div class="navlinks"><a href="/dashboard">Volunteer Management System</a></div>
                            <div class="navlinks"><a href="/about">About</a></div>
                            <div class="navlinks"><a href="/events">Events</a></div>
                            <div class="navlinks"><a href="/partnerships">Partnerships</a></div>
                        </div>
                        <div class="rightalign">
                            <div class="navlinksusername"><a href="/profile">USERNAME</a></div>
                            <a href="/logout"><div class="navbutton">Log Out</div></a>
                        </div>
                    </div>
                </nav>
            );}
        else{
            return (
                <nav>
                    <div class="navbar">
                        <div class="leftalign">
                            <div class="navlogo">✿</div>
                            <div class="navlinks"><a href="/dashboard">Volunteer Management System</a></div>
                            <div class="navlinks"><a href="/about">About</a></div>
                            <div class="navlinks"><a href="/events">Events</a></div>
                            <div class="navlinks"><a href="/partnerships">Partnerships</a></div>
                        </div>
                        <div class="rightalign">
                            <div class="navlinksusername"><a href="/login">Log In</a></div>
                            <a href="/"><div class="navbutton">Sign Up</div></a>
                        </div>
                    </div>
                </nav>
            );}
    }
    else if (location.pathname == "/profile" || location.pathname == "/profile-modify"){
        {/*Return nothing here: these pages don't have a header*/}
    }
    else {
        {/*Return the simplified header without the nav links*/}
=======
import { useLocation } from "react-router-dom";

function Navbar() {
    let location = useLocation();
    
    // Read user from localStorage
    const storedUser = localStorage.getItem("user")
    const user = storedUser ? JSON.parse(storedUser) : null
    const loggedIn = user !== null

    if (location.pathname == "/dashboard" || location.pathname == "/partnerships" || location.pathname == "/about" || location.pathname == "/events" || location.pathname == "/details/:id") {
        if (loggedIn) {
            return (
                <nav>
                    <div className="navbar">
                        <div className="leftalign">
                            <div className="navlogo">✿</div>
                            <div className="navlinks"><a href="/dashboard">Volunteer Management System</a></div>
                            <div className="navlinks"><a href="/about">About</a></div>
                            <div className="navlinks"><a href="/events">Events</a></div>
                            <div className="navlinks"><a href="/partnerships">Partnerships</a></div>
                        </div>
                        <div className="rightalign">
                            <div className="navlinksusername"><a href="/profile">{user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1).toLowerCase()}</a></div>
                            <a href="/logout"><div className="navbutton">Log Out</div></a>
                        </div>
                    </div>
                </nav>
            );
        } else {
            return (
                <nav>
                    <div className="navbar">
                        <div className="leftalign">
                            <div className="navlogo">✿</div>
                            <div className="navlinks"><a href="/dashboard">Volunteer Management System</a></div>
                            <div className="navlinks"><a href="/about">About</a></div>
                            <div className="navlinks"><a href="/events">Events</a></div>
                            <div className="navlinks"><a href="/partnerships">Partnerships</a></div>
                        </div>
                        <div className="rightalign">
                            <div className="navlinksusername"><a href="/login">Log In</a></div>
                            <a href="/"><div className="navbutton">Sign Up</div></a>
                        </div>
                    </div>
                </nav>
            );
        }
    } else if (location.pathname == "/profile" || location.pathname == "/profile-modify") {
        return null;
    } else {
>>>>>>> 5302da6 (merged Mason's navbar changes with localStorage and first name)
        return (
            <div className="header">
                <div className="header-center">
                    <div className="header-icon">✿</div>
                    <div className="header-title">Volunteer Management System</div>
                </div>
            </div>
        );
<<<<<<< HEAD
        
=======
>>>>>>> 5302da6 (merged Mason's navbar changes with localStorage and first name)
    }
}
export default Navbar