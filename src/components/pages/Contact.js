import { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className={styles.page}>

      <div className={styles.hero}>
        <div className={styles.badge}>Get in Touch</div>
        <h1>We'd love to <span>hear from you</span></h1>
        <p>Have a question, feedback or just want to say hello? Fill in the form and we'll get back to you shortly.</p>
      </div>

      <div className={styles.layout}>
        <div className={styles.info}>
          <div className={styles.info_card}>
            <div className={styles.info_icon}>📧</div>
            <div>
              <h4>Email</h4>
              <p>hello@flo.app</p>
            </div>
          </div>
          <div className={styles.info_card}>
            <div className={styles.info_icon}>📍</div>
            <div>
              <h4>Location</h4>
              <p>Lisbon, Portugal</p>
            </div>
          </div>
          <div className={styles.info_card}>
            <div className={styles.info_icon}>⏰</div>
            <div>
              <h4>Response time</h4>
              <p>Within 24 hours</p>
            </div>
          </div>
        </div>

        <div className={styles.form_card}>
          {sent ? (
            <div className={styles.success_msg}>
              <span>✅</span>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Name</label>
                  <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                </div>
                <div className={styles.field}>
                  <label>Email</label>
                  <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className={styles.field}>
                <label>Subject</label>
                <input name="subject" placeholder="What's this about?" value={form.subject} onChange={handleChange} required />
              </div>
              <div className={styles.field}>
                <label>Message</label>
                <textarea name="message" rows="5" placeholder="Write your message here..." value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className={styles.submit_btn}>Send Message →</button>
            </form>
          )}
        </div>
      </div>

    </div>
  );
}

export default Contact;
