import workingIcon from "./illustration-working.svg";
import iconBrand from "./icon-brand-recognition.svg";
import iconRecords from "./icon-detailed-records.svg";
import iconFullCustom from "./icon-fully-customizable.svg";

export default function Main({}) {
  return (
    <div className="main-App">
      <section className="section-1">
        <img src={workingIcon} className="workIcon" alt="" />
        <div className="info-1">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>Get Started</button>
        </div>
      </section>
      <div className="back">
        <div className="main-content">
          <section className="section-2">
            <div className="info-2">
              <input type="text" placeholder="Shorten a link here..." />
              <button>Shorten It!</button>
            </div>
            <div className="shortLinks">
              <p>ANSWER!!!</p>
              <p>ANSWER!!!</p>
              <p>ANSWER!!!</p>
            </div>
          </section>
          <section className="section-3">
            <div className="info-3">
              <h2>Advanced Statistics</h2>
              <p>
                Track how your links are performing across the web with our
                advanced statistics dashboard.
              </p>
            </div>
            <div className="infoIcons">
              <div className="iconsBack">
                <img src={iconBrand} alt="" />
              </div>
              <h3>Brand Recognition</h3>
              <p>
                Boost your bran recognition with each click. Generic lins don't
                mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
            <div className="infoIcons">
              <div className="iconsBack">
                <img src={iconRecords} alt="" />
              </div>
              <h3>Detailed Records</h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content help inform better
                decisions.
              </p>
            </div>
            <div className="infoIcons">
              <div className="iconsBack">
                <img src={iconFullCustom} alt="" />
              </div>
              <h3>Fully Customizable</h3>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
