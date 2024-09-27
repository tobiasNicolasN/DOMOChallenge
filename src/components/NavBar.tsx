import Link from "next/link";
import style from "../styles/NavBar.module.css";

function NavBar() {
  return (
    <>
      <nav className={style.container}>
        <div className={style.navContainer}>
          <Link href={"/"} className={style.logo}>B</Link>
          <hr className={style.divisor} />
          <ul className={style.navBar}>
            <li>
              <Link className={style.item} href={"#"}>
                Home
              </Link>
            </li>
            <li>
              <Link className={style.item} href={"#"}>
                About
              </Link>
            </li>
            <li>
              <Link className={style.item} href={"#"}>
                Pages{" "}
                {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                }
              </Link>
            </li>
            <li>
              <Link className={style.item} href={"#"}>
                Packages
              </Link>
            </li>
            <li>
              <Link className={style.item} href={"#"}>
                Contact
              </Link>
            </li>
            <li>
              <Link className={style.item} href={"#"}>
                Cart [0]
              </Link>
            </li>
          </ul>
        </div>
        <button className={style.button}>Free Consultation →</button>
      </nav>
    </>
  );
}

export default NavBar;
