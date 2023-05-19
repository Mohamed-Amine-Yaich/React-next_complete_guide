import React, { Fragment } from "react";
import Link from "next/link";
import Logo from "./log";
import classes from "./main-navigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href={"/"}>
        <Logo />
      </Link>

      <nav>
        <ul>
          <li>
            <Link href={"/posts"}>Posts</Link>
          </li>
          <li>
            <Link href={"/comments"}>comments</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
