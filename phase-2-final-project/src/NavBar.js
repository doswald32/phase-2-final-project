import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <NavLink
            to="/"
            className="nav-link"
            >
              Home
            </NavLink>
            <NavLink
            to="/team"
            className="nav-link"
            >
              Team
            </NavLink>
            <NavLink 
            to="/player"
            className="nav-link"
            >
              Player Info
            </NavLink>
            <NavLink 
            to="/add-player"
            className="nav-link"
            >
              Add A Player
            </NavLink>
        </nav>
    );
};

export default NavBar