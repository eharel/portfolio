import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { FaGithub, FaLinkedin, FaGoodreads } from "react-icons/fa";

// Initialize EmailJS with environment variables
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "", // Honeypot field
  });
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Initialize EmailJS when component mounts
  useEffect(() => {
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      console.log("EmailJS initialized successfully");
    } catch (error) {
      console.error("EmailJS initialization failed:", error);
      setErrorMessage("Failed to initialize email service");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // If honeypot field is filled, silently reject the submission
    if (formData.phone) {
      setStatus("success"); // Fake success to avoid alerting bots
      setFormData({ name: "", email: "", message: "", phone: "" });
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    // Validate environment variables
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      console.error("Missing required EmailJS configuration");
      setStatus("error");
      setErrorMessage("Email service configuration error");
      return;
    }

    try {
      console.log("Attempting to send email with:", {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        data: {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message.substring(0, 20) + "...", // Log first 20 chars for privacy
        },
      });

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "eliharel3@gmail.com",
        }
      );

      console.log("EmailJS response:", response);

      if (response.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", phone: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error: unknown) {
      console.error("Email sending failed:", error);
      let errorMsg = "Failed to send message. Please try again.";

      if (error instanceof Error) {
        console.error("Error details:", error.message);
        // Provide more specific error messages based on common issues
        if (error.message.includes("Invalid public key")) {
          errorMsg = "Email service configuration error";
        } else if (error.message.includes("Network")) {
          errorMsg = "Network error. Please check your connection.";
        }
      }

      setStatus("error");
      setErrorMessage(errorMsg);
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

        {/* Honeypot field - hidden from real users */}
        <div className={styles["honeypot"]}>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
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
            {errorMessage || "Failed to send message. Please try again."}
          </p>
        )}
      </form>

      <div className={styles["social-links"]}>
        <div>
          You can also find me on:
          <div className={styles["social-icons"]}>
            <a
              href="https://github.com/eharel"
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
