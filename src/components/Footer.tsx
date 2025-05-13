import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © 2025 Eli Harel. Built with <span className="footer-heart">♥</span>{" "}
        using React, Vite, and the lovely GitHub Copilot.
      </p>
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
    </footer>
  );
}
