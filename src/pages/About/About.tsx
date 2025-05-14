import styles from "./About.module.css";

export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">About Me</h2>

      <div className={styles.bioWithImageLeft}>
        <div className={styles.imageContainer}>
          <img
            src="/images/profile.jpg"
            alt="Eli Harel"
            className={styles.circularImage}
          />
        </div>
        <div>
          <p>
            Hi, I'm <strong>Eli Harel</strong> — a frontend-focused developer
            with a strong foundation in computer science and a deep passion for
            building thoughtful, user-friendly web applications.
          </p>

          <p>
            Originally from Israel, I graduated <em>Magna Cum Laude</em> with a
            degree in Computer Science and recently moved to the United States.
            Over the past couple of years, I've dedicated myself to learning
            modern web development tools and frameworks, especially{" "}
            <strong>React</strong>, and honing my coding skills through personal
            projects and advanced online coursework.
          </p>

          <p>
            While I don't yet have formal industry experience, I bring
            discipline, curiosity, and a love for clean, maintainable code. I'm
            currently building this site from scratch using{" "}
            <strong>Vite</strong> and <strong>React</strong>, while continuing
            to learn through projects and professional courses — including Jonas
            Schmedtmann's advanced React curriculum.
          </p>

          <p>
            When I'm not coding, I'm likely gaming with my wife, at the gym, or
            with a kindle on the couch used as a bed by a cuddly chihuahua.
          </p>
        </div>
      </div>
    </section>
  );
}
