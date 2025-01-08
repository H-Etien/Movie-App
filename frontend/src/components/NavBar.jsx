import { Link } from "react-router-dom";

import "../css/NavBar.css";

const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-brand">
                    <Link to="/">Movie App</Link>
                </div>
                <div className="navbar-links">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                    <Link to="/favorites" className="nav-link">
                        Favorites
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NavBar;
