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
            Hi, I'm <strong>Eli Harel</strong> — a full-stack developer
            specializing in React and TypeScript, with experience building
            production applications for real clients.
          </p>

          <p>
            Originally from Israel, I graduated <em>Magna Cum Laude</em> with a
            degree in Computer Science and recently moved to the United States.
            I've spent the past couple of years mastering modern development
            tools and frameworks — particularly <strong>React</strong>,{" "}
            <strong>React Native</strong>, and <strong>TypeScript</strong> —
            through both personal projects and client work.
          </p>

          <p>
            I've built production applications including a{" "}
            <strong>custom iPad app</strong> for ACE Remodeling's project
            managers and an <strong>internal CRM system</strong> that automates
            their business workflows using Google Apps Script. I love tackling
            real-world problems with clean, maintainable code and thoughtful
            architecture.
          </p>

          <p>
            When I'm not coding,{" "}
            <del>
              I'm likely gaming with my wife, at the gym, or with a kindle on
              the couch, being used as a bed by a cuddly chihuahua.
            </del>{" "}
            I'm changing diapers and feeding an angry, adorable baby.
          </p>
        </div>
      </div>
    </section>
  );
}
