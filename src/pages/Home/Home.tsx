import styles from "./Home.module.css";
import { FaRegFileAlt, FaGoodreads } from "react-icons/fa";
import { SOCIAL_LINKS } from "../../types/constants";

export default function Home() {
  return (
    <section className="section" id="home">
      <h1 className="section-title">Hi, I'm Eli Harel</h1>

      <p>
        I'm a React developer with a strong computer science background and a
        love for building clean, user-friendly web applications.
      </p>

      <p>
        This site is my personal portfolio, built from scratch using{" "}
        <strong>Vite</strong> and <strong>React</strong>, as I continue
        sharpening my frontend development skills and grow professionally.
      </p>

      <p>
        Welcome — feel free to explore my projects, read more about me, or get
        in touch!
      </p>
      <br />
      <div>
        {/* <div className={styles.readingSection}> */}
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

      <div className={styles.buttonContainer}>
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
    </section>
  );
}
