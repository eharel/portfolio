import { NavLink } from "react-router-dom";
import "../style.css";

export default function NavBar() {
  return (
    // <nav style={styles.nav} className="navBar">
    <nav className="navbar">
      <div style={styles.logo}>Eli Harel</div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <NavLink to="/" style={styles.link}>
            Home
          </NavLink>
        </li>
        <li style={styles.navItem}>
          <NavLink to="/about" style={styles.link}>
            About
          </NavLink>
        </li>
        <li style={styles.navItem}>
          <NavLink to="/projects" style={styles.link}>
            Projects
          </NavLink>
        </li>
        <li style={styles.navItem}>
          <NavLink to="/contact" style={styles.link}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#333",
    color: "#fff",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: "1.5rem",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "1rem",
    transition: "color 0.3s",
  },
};
