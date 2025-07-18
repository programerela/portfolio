import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current?.reset();
        },
        (error) => {
          console.error("Email send error:", error);
          setSuccess(false);
        }
      );
  };

  return (
    <section className="contact-section" ref={sectionRef} id="contact">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p className="contact-subtext">
          Have a project in mind or just want to say hi? Drop me a message!
        </p>
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows={6}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
          {success && <p className="success-msg">Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
