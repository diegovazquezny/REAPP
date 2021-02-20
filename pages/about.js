import styles from "../styles/about.module.css";

export default function AboutMe() {
  function callMe() {
    console.log("clicked on call");
  }

  function emailMe() {
    console.log("clicked on email");
  }

  return (
    <div>
      <div className={styles.nav}>
        <a href="/">Home</a>
      </div>
      <div className={styles.main}>
        <img
          src="pics/image.jpg"
          style={{ width: "30vh", height: "30vh", borderRadius: "20vh" }}
        ></img>
        <h1>Brian J Han</h1>
        <h2>Realtor in the PNW</h2>
      </div>
      <br />
      <div className={styles.body}>
        <h1>About Me</h1>
        <p>Some info about me asdfasdfasdfsadfasfdas</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={callMe}>
          253-306-0396
        </button>
        <button className={styles.button} onClick={emailMe}>
          brianhan@skylineproperties.com
        </button>
      </div>
    </div>
  );
}
