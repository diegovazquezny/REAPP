import styles from "../styles/about.module.css";
import MobileNav from "../components/home/navBar";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
// import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function AboutMe() {
  function callMe() {
    console.log("clicked on call");
  }

  function emailMe() {
    console.log("clicked on email");
  }

  return (
    <div className={styles.container}>
      <a href="/">Home</a>
      <MobileNav />
      <div className={styles.logoBox}>
        <a
          className={styles.logos}
          href="https://www.zillow.com/profile/brokerbrianhan/"
          target="_blank"
        >
          <img
            src="pics/zillowicon.webp"
            style={{ width: "40px", height: "40px" }}
          ></img>
        </a>
        <a
          className={styles.logos}
          href="https://www.instagram.com/brokerbrianhan/"
          target="_blank"
        >
          <InstagramIcon style={{ fontSize: "40px" }} />
        </a>
        <a
          className={styles.logos}
          href="https://www.facebook.com/brokerbrianhan"
          target="_blank"
        >
          <FacebookIcon style={{ fontSize: "40px" }} />
        </a>
      </div>

      <div className={styles.main}>
        <img
          src="pics/image.jpg"
          style={{ width: "30vh", height: "30vh", borderRadius: "20vh" }}
        ></img>
        <h1>Brian J Han</h1>
        <h2>PNW Realtor</h2>
      </div>
      <br />
      <div className={styles.body}>
        <h1>About Me</h1>
        <p>* Some info about me *</p>
      </div>
      <div className={styles.body}>
        <h1>Past Sales</h1>
        <p>* Get some past sales in here *</p>
      </div>
      <div className={styles.buttons}>
        <CallIcon style={{ marginTop: "1vh" }} />
        <button className={styles.button} onClick={callMe}>
          253-306-0396
        </button>
        <EmailIcon style={{ marginTop: "1vh" }} />
        <button className={styles.button} onClick={emailMe}>
          brianhan@skylineproperties.com
        </button>
      </div>
    </div>
  );
}
