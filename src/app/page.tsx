import NavBar from "@/components/NavBar";
import styles from "./page.module.css";
import JoinUs from "@/components/JoinUs";
import HomeSection from "@/components/HomeSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>
        <HomeSection/>
      </main>
    </div>
  );
}
