import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SOCIAL_LINKS } from "../types/constants";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2025 Eli Harel</p>
        <div className="footer-links">
          <a
            href={SOCIAL_LINKS.GITHUB.url}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            title={SOCIAL_LINKS.GITHUB.label}
          >
            <FaGithub size={24} />
          </a>
          <a
            href={SOCIAL_LINKS.LINKEDIN.url}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            title={SOCIAL_LINKS.LINKEDIN.label}
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
