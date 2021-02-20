import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/home/navBar";
import Hero from "../components/home/hero";
import Articles from "../components/home/articles";

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
      <div className={styles.hero}>
        <NavBar />
        <Hero />
      </div>
      <Articles />
    </div>
  );
}

// https://andrewcpark.com/
