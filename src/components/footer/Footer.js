import logo from "./logo.svg";
import iconFacebook from "./square-facebook.svg";
import iconTwitter from "./twitter.svg";
import iconPinterest from "./pinterest.svg";
import iconInstagram from "./instagram.svg";

export default function Footer({}) {
  return (
    <div>
      <section className="footer-section">
        <div>
          <h2>Boost your links today</h2>
          <button>Get Started</button>
        </div>
      </section>
      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer-links">
            <div>
              <h3>Features</h3>
              <ul>
                <li>
                  <a href="#/">Link Shortening</a>
                </li>
                <li>
                  <a href="#/">Branded Links</a>
                </li>
                <li>
                  <a href="#/">Analytics</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="#/">Blog</a>
                </li>
                <li>
                  <a href="#/">Developers</a>
                </li>
                <li>
                  <a href="#/">Support</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#/">About</a>
                </li>
                <li>
                  <a href="#/">Our Team</a>
                </li>
                <li>
                  <a href="#/">Careers</a>
                </li>
                <li>
                  <a href="#/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-social">
            <img src={iconFacebook} alt="" />
            <img src={iconTwitter} alt="" />
            <img src={iconPinterest} alt="" />
            <img src={iconInstagram} alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
}
