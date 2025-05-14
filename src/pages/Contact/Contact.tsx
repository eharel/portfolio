import { useState } from "react";
import styles from "./Contact.module.css";
import { FaGithub, FaLinkedin, FaGoodreads } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the mailto URL with the form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:eliharel3@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client
    window.location.href = mailtoUrl;

    // Clear the form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="section" id="contact">
      <h2 className="section-title">Contact Me</h2>

      <p>
        I'm currently open to junior developer roles, internships, or
        collaboration on meaningful projects.
      </p>

      <form onSubmit={handleSubmit} className={styles["contact-form"]}>
        <div className={styles["form-group"]}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles["form-input"]}
          />
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles["form-input"]}
          />
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles["form-input"]}
            rows={5}
          />
        </div>

        <button type="submit" className={styles["submit-button"]}>
          Send Message
        </button>

        <p className={styles["email-note"]}>
          This will open your default email client with a pre-filled message.
        </p>
      </form>

      <div className={styles["social-links"]}>
        <div>
          You can also find me on:
          <div className={styles["social-icons"]}>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="Visit my GitHub Profile"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="Connect with me on LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.goodreads.com/user/show/104343357-eli-harel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Goodreads Profile"
              title="Check out my reading list on Goodreads"
            >
              <FaGoodreads size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
