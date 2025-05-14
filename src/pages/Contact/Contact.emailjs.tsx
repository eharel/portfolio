import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Initialize EmailJS with environment variables
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

// Validate that all required environment variables are set
if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
  console.error(
    "Missing required EmailJS environment variables. Make sure you have set up your .env file correctly."
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Initialize EmailJS when component mounts
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "eliharel3@gmail.com", // Your email address
      });
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: unknown) {
      console.error("Email sending failed:", error);
      setStatus("error");
    }
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

        <button
          type="submit"
          className={styles["submit-button"]}
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className={styles["success-message"]}>
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className={styles["error-message"]}>
            Failed to send message. Please try again.
          </p>
        )}
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
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
