import styles from "./ContactStyles.module.css";
// import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  //   const [state, handleSubmit] = useForm("xdknolqb");
  //   if (state.succeeded) {
  //     return (
  //         <p className={styles.success}>Thank you for getting in touch!</p>
  //     )
  //   }

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="https://formspree.io/f/xdknolqb" method="POST">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          {/* <ValidationError prefix="Email" field="email" errors={state.errors} /> */}
        </div>

        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Message"
            required
          />
          {/* <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          /> */}
        </div>

        <input
          className="hover btn"
          type="submit"
          value="Submit"
        //   disabled={state.submitting}
        />
      </form>
    </section>
  );
}

export default Contact;
