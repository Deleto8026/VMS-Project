function Navbar() {
    const loggedIn = false;
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
export default Navbar