import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/home/navBar";
import Hero from "../components/home/hero";
import Articles from "../components/home/articles";
import Footer from "../components/home/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brian Han Real Estate</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.hero}>
        <NavBar />
        <Hero />
      </div>
      <Articles />
      <Footer />
    </div>
  );
}

// https://andrewcpark.com/
