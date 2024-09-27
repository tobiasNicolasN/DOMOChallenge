import Link from "next/link";
import style from "../styles/NavBar.module.css";
function NavBar() {
  return (
    <>
      <nav className={style.container}>
        <ul className={style.navBar}>
          <li className={style.logo}>B</li>
          <hr className={style.divisor} />
          <li>
            <Link href={"#"}>Home</Link>
          </li>
          <li>
            <Link href={"#"}>About</Link>
          </li>
          <li>
            <Link href={"#"}>Pages</Link>
          </li>
          <li>
            <Link href={"#"}>Packages</Link>
          </li>
          <li>
            <Link href={"#"}>Contact</Link>
          </li>
          <li>
            <Link href={"#"}>Cart [0]</Link>
          </li>
          <li>
            <button>Free Consultation →</button>
          </li>
        </ul>
      </nav>
      <nav className={style.container}></nav>
    </>
  );
}

export default NavBar;
