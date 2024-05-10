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
            to="/about"
            className="nav-link"
            >
              Team
            </NavLink>
            <NavLink 
            to="/login"
            className="nav-link"
            >
              Player Info
            </NavLink>
            <NavLink 
            to="/login"
            className="nav-link"
            >
              Add A Player
            </NavLink>
        </nav>
    );
};

export default NavBar