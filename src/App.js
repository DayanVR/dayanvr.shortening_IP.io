import "./styles.scss";
import React, { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  const [active, setActive] = useState("nav-menu");

  const navToggle = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");
  };

  return (
    <div className="App">
      <Header active={active} navToggle={navToggle} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
