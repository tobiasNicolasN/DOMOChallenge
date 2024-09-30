"use client";
import Link from "next/link";
import style from "../styles/NavBar.module.css";
import { useState } from "react";

function NavBar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <nav className={style.container}>
      <div className={style.navContainer}>
        <Link href={"/"} className={style.logo}>
          B
        </Link>
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
              Cart <span className={style.dif}>[</span> 0{" "}
              <span className={style.dif}>]</span>
            </Link>
          </li>
        </ul>
      </div>
      <button className={style.button}>Free Consultation →</button>

      {/* Mobile Menu Toggle */}
      <button aria-label="open-menu" className={style.menu} onClick={() => setOpenMenu(!openMenu)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="12" rx="8"></rect>
          <rect y="30" width="100" height="12" rx="8"></rect>
          <rect y="60" width="100" height="12" rx="8"></rect>
        </svg>
      </button>

      {/* Mobile Menu */}
      {openMenu && (
        <div className={style.mobileMenu}>
          <ul className={style.mobileNavBar}>
            <li>
              <Link
                className={style.item}
                href={"#"}
                onClick={() => setOpenMenu(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={style.item}
                href={"#"}
                onClick={() => setOpenMenu(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={style.item}
                href={"#"}
                onClick={() => setOpenMenu(false)}
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                className={style.item}
                href={"#"}
                onClick={() => setOpenMenu(false)}
              >
                Packages
              </Link>
            </li>
            <li>
              <Link
                className={style.item}
                href={"#"}
                onClick={() => setOpenMenu(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className={style.item}
                href={"#"}
                onClick={() => setOpenMenu(false)}
              >
                Cart [0]
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
