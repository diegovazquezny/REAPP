import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/home/navBar";
import Hero from "../components/home/hero";
import Testimonials from "../components/home/testimonials";
import Footer from "../components/home/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brian Han Real Estate</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <NavBar />
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  );
}