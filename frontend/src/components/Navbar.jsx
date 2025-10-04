import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar(){
    return (
        <header>
            <nav className = "navbar">
                <img src= "/USM_logo.png" alt="USM Logo" className="logo" />

                <div className="navbar-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/options" className="nav-link">Options</Link>
                </div>

            </nav>
        </header>
    );
}

export default Navbar;

