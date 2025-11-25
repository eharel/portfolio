import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { FaRegFileAlt, FaGoodreads } from "react-icons/fa";
import { SOCIAL_LINKS } from "../../types/constants";

export default function Home() {
  return (
    <section className="section" id="home">
      <h1 className="section-title">Hi, I'm Eli Harel</h1>

      <p className={styles.intro}>
        I'm a <strong>full-stack developer</strong> who builds production
        applications with <strong>React</strong>, <strong>React Native</strong>,
        <strong>TypeScript</strong>, and <strong>Firebase</strong>.
      </p>

      <p>
        I've shipped a custom <strong>iPad app</strong> for construction project
        managers, automated business workflows with{" "}
        <strong>Google Apps Script</strong>, and built{" "}
        <strong>full-stack web applications</strong> from the ground up.
      </p>

      <p>
        Currently looking for opportunities to bring clean code, thoughtful
        architecture, and real-world problem-solving to a development team.
      </p>

      <div className={styles.ctaButtons}>
        <Link to="/projects" className={styles.primaryCta}>
          View My Work
        </Link>
        <Link to="/contact" className={styles.secondaryCta}>
          Get in Touch
        </Link>
        <a
          href="/Eli_Harel_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeButton}
        >
          <FaRegFileAlt className={styles.buttonIcon} />
          See My Resume
        </a>
      </div>

      <hr className={styles.divider} />

      <div className={styles.readingSection}>
        <h3>Beyond Coding</h3>
        <p>
          When I'm not coding, you'll often find me exploring new worlds through
          books. I'm particularly drawn to Fantasy, Science Fiction, and
          thought-provoking non-fiction.
        </p>

        <a
          href={SOCIAL_LINKS.GOODREADS.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.goodreadsLink}
          title={SOCIAL_LINKS.GOODREADS.label}
        >
          <FaGoodreads className={styles.goodreadsIcon} />
          <span>See what I'm reading</span>
        </a>
      </div>
    </section>
  );
}
