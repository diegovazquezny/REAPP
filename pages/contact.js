import React from "react";
import emailjs from "emailjs-com";
import NavBar from "../components/home/navBar";
import styles from "../styles/contact.module.css";
import Footer from "../components/home/footer";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5ah8upa",
        "contact_form",
        e.target,
        "user_DVFmSoZFqi5GhSjpJVkqe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  function submitted() {
    console.log("hello");
  }
  
  return (
    <>
      <NavBar />
      <div style={{ overflowX: "hidden" }}>
        <div className={styles.boxes}>
          <div className={styles.innerBoxes}>
            <h1>Text or call me! I'm usually available from 9am-7pm.</h1>
            <a
              href="tel:+1-253-306-0396"
              style={{
                padding: "10px",
                borderRadius: "5px",
                outline: "none",
                border: "none",
                color: 'black',
              }}
            >
              253-306-0396
            </a>
          </div>
          {/* <div className={styles.innerBoxes}>
            <a href="" target="_blank">
              Start Chatting With Me Now
            </a>
          </div> */}
          <div className={styles.innerBoxes}>
            <h1>
              No time right now? That's okay, let's schedule a time to meet!
            </h1>
            <button
              style={{
                padding: "10px",
                borderRadius: "5px",
                outline: "none",
                border: "none",
              }}
            >
              <a href="https://calendly.com/brokerbrianhan" target="_blank">
                Schedule a Meeting
              </a>
            </button>
          </div>
        </div>
        <div className={styles.container}>
          <form className={styles.contactForm} onSubmit={sendEmail}>
            <label>Name</label>
            <br />
            <br />
            <input
              className={styles.inputs}
              style={{ marginRight: "20px" }}
              placeholder="First Name"
              type="text"
              name="first_name"
            />
            <input
              className={styles.inputs}
              placeholder="Last Name"
              type="text"
              name="last_name"
            />
            <br />
            <br />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <label>Phone</label>
                <br />
                <br />
                <input
                  className={styles.inputs}
                  type="contact-number"
                  name="phone_number"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                }}
              >
                <label>Email</label>
                <br />
                <input
                  className={styles.inputs}
                  type="email"
                  name="user_email"
                  required
                />
              </div>
            </div>
            <br />
            <br />
            <label>Message</label>
            <br />
            <br />
            <textarea
              className={styles.inputs}
              style={{ width: "55vh", height: "20vh" }}
              name="message"
              required
            />
            <br />
            <br />
            <input
              className={styles.button}
              type="submit"
              value="Send"
              onClick={submitted}
            />
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}
