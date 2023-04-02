/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Mobile from "@/Components/Mobile";
import SocialMedia from "@/Components/SocialMedia";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/pro1.jpeg";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrés Céspedes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/planeta.png" />
      </Head>

      <div>
        <Header />
        <section className={styles.main}>
          <div className={styles.presentation}>
            <div className={styles.homeTitles}>
              <h1 className={styles.homeTitle}>
                👋 Hi, I'm Andrés Pablo Céspedes.
              </h1>
              <h2 className={styles.homeSubtitle}>
                👨‍💻 A software developer from Argentina.
              </h2>
            </div>
            <Image
              className={styles.profile}
              src={profile}
              alt="andres-cespedes"
            />
            <p>
              🔨🎨 I enjoy solving complex problems and craft astonishing apps.
            </p>
          </div>
          <SocialMedia />
        </section>
        <Mobile />
        <Footer />
      </div>
    </>
  );
}
