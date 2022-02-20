import React from "react";
import githubLogo from "../assets/GitHub_Logo.png";

export default function Footer() {
  return (
    <footer>
      <a href="https://github.com/forestheims/use-reducer-action">
        <img src={githubLogo} alt="github logo" style={{ width: 70 }} />
      </a>
    </footer>
  );
}
