import React from "react";
import "../../index.css";

function Header(props) {
  return (
    <>
      <header className="header">
        <a href="#home">Logo</a>
        <a href="#fale">Contato</a>
        <a href="#fale">Fale conosco</a>
      </header>
      {props.children}
      <footer>
        <h1>meu footer</h1>
      </footer>
    </>
  );
}

export default Header;
