import logo from "./logo.svg";
import bars from "./bars-solid.svg";

export default function Header({ active, navToggle }) {
  return (
    <header>
      <div className="main-head">
        <img src={logo} className="logo" alt="" />
        <img src={bars} alt="" className="bars" onClick={navToggle} />
      </div>
      <nav className="navBar">
        <div  className={active}>
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <button href="#" className="sign-Up">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
