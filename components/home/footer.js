import styles from "../../styles/Home.module.css";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
// import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://www.skylineproperties.com/" target="_blank">
        <img src="pics/skyline.jpg" className={styles.skylineLogo}></img>
      </a>
      <br></br>
      <div>
        <a
          href="https://www.zillow.com/profile/brokerbrianhan/"
          target="_blank"
        >
          <img
            src="pics/zillowicon.webp"
            style={{ width: "5vh", marginRight: "20px" }}
          ></img>
        </a>
        <a
          href="https://www.instagram.com/brokerbrianhan/"
          target="_blank"
        >
          <InstagramIcon style={{ fontSize: "5vh", marginRight: "18px" }} />
        </a>
        <a
          href="https://www.facebook.com/brokerbrianhan"
          target="_blank"
        >
          <FacebookIcon style={{ fontSize: "5vh" }} />
        </a>
        <div className={styles.footerWords}>
          <p>MLS# 122340</p>
        </div>
      </div>
    </div>
  );
}
