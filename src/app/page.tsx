import NavBar from "@/components/NavBar";
import styles from "./page.module.css";
import HomeSection from "@/components/HomeSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>
        <HomeSection/>
        <Footer/>
      </main>
    </div>
  );
}
