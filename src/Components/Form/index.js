import styles from "../../styles/contact-form.module.css";

export default function Form() {
  return (
    <section>
      <div className={styles.contactMe}>
        <h2 className={styles.title}>💬 Stay in touch!</h2>
        <form
          className={styles.form}
          action="https://formsubmit.co/andres.pablo.cespedes@gmail.com"
          method="POST"
        >
          <div className={styles.info}>
            <label className={styles.inputTitle} htmlFor="name">
              Name
            </label>
            <input
              className={styles.input}
              id="name"
              type="text"
              name="name"
              required
            />
          </div>
          <div>
            <input type="hidden" name="_subject" value="New Mail !!!" />
          </div>
          <div className={styles.info}>
            <label className={styles.inputTitle} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              id="email"
              type="email"
              name="email"
              required
            />
          </div>
          <div className={styles.info}>
            <label className={styles.inputTitle}>Message</label>
            <textarea
              className={styles.textarea}
              name="message"
              maxLength="500"
              rows="7"
              cols="24"
              required
            />
          </div>
          <button className={styles.sendBtn} type="submit">
            📨 Send 📨
          </button>
        </form>
      </div>
    </section>
  );
}
