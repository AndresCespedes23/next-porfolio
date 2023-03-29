import Footer from "@/Components/Footer";
import Form from "@/Components/Form";
import Header from "@/Components/Header";
import Mobile from "@/Components/Mobile";
import SocialMedia from "@/Components/SocialMedia";
import styles from "../../styles/contact.module.css";

export default function Contact() {
  return (
    <>
      <Header />
      <section className={styles.main}>
        <Form />
        <SocialMedia />
        <Footer />
        <Mobile />
      </section>
    </>
  );
}
