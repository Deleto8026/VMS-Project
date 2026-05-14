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
        return (
            <div className="header">
                <div className="header-center">
                    <div className="header-icon">✿</div>
                    <div className="header-title">Volunteer Management System</div>
                </div>
            </div>
        );
        
    }
}
export default Navbar