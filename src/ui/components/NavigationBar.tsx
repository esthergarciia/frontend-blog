import React from "react";
import { Link } from "react-router-dom";
import "../assets/navbar/main.css";

export function NavigationBar(): JSX.Element {
  return <ul className={"menu"}>
    <Link to={"/"} style={{ textDecoration: 'none' }}>
      <li className={"menu-element"}>Blog</li>
    </Link>
    <Link to={"/"} style={{ textDecoration: 'none' }}>
      <li className={"menu-element"}>Projects</li>
    </Link>
    <Link to={"/"} style={{ textDecoration: 'none' }}>
      <li className={"menu-element"}>Contact</li>
    </Link>
    <Link to={"/"} style={{ textDecoration: 'none' }}>
      <li className={"menu-element"}>Contact</li>
    </Link>
  </ul>;
}

