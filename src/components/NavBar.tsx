import { NavLink } from "react-router-dom";
import "../style.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className="navbar-link">
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/about" className="navbar-link">
            About
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/skills" className="navbar-link">
            Skills
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/projects" className="navbar-link">
            Projects
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/contact" className="navbar-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

// const styles = {
//   nav: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "end",
//     padding: "1rem 2rem",
//     backgroundColor: "#333",
//     color: "#fff",
//   },
//   logo: {
//     fontSize: "1.5rem",
//     fontWeight: "bold",
//   },
//   navLinks: {
//     listStyle: "none",
//     display: "flex",
//     margin: 0,
//     padding: 0,
//   },
//   navItem: {
//     marginLeft: "1.5rem",
//   },
//   link: {
//     textDecoration: "none",
//     color: "#fff",
//     fontSize: "1rem",
//     transition: "color 0.3s",
//   },
// };
