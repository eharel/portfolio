import styles from "./Home.module.css";
import { FaRegFileAlt } from "react-icons/fa";

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

      <div className={styles.buttonContainer}>
        <a
          href="/Resume - Eli Harel.pdf"
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
