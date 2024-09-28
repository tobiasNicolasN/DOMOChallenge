import Link from "next/link";
import style from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <Link
          href={"https://www.tobiasnicolasn.com"}
          target="_blank"
          className={style.link}
        >
          Tobias Nuñez
        </Link>
        <Link href={"/info"} className={style.link}>
          Informacion de la web
        </Link>
      </div>
    </div>
  );
}

export default Footer;
