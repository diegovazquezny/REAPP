import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brian's Real Estate Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home Page</h1>

      <a href="/about">About Me</a>
      <a href="/contact">Contact Me</a>
    </div>
  );
}
