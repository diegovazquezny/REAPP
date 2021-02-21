import styles from '../../styles/about.module.css';

export default function RealtorInfo() {
  return (
    <div className={styles.main}>
      <img
        src="pics/image.jpg"
        style={{ width: "30vh", height: "30vh", borderRadius: "20vh" }}
      />
      <h1>Brian J Han</h1>
      <h2>Realtor in the PNW</h2>
    </div>
  )
}