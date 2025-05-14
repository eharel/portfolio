import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2025 Eli Harel</p>
        <div className="footer-links">
          <a
            href="https://github.com/eharel"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            title="GitHub" /* Tooltip text for GitHub */
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://github.com/eharel"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            title="LinkedIn" /* Tooltip text for LinkedIn */
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
