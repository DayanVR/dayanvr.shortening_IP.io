import workingIcon from "./illustration-working.svg";
import iconBrand from "./icon-brand-recognition.svg";
import iconRecords from "./icon-detailed-records.svg";
import iconFullCustom from "./icon-fully-customizable.svg";
import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Main({
  errorMessage,
  handleShortenUrl,
  setOriginalURL,
  originalURL,
  errorText,
  shortenedUrl,
  handleClearLocalStorage,
}) {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [validInput, setValidInput] = useState(true);
  const [buttonText, setButtonText] = useState(
    Array(shortenedUrl.length).fill("Copy")
  ); 

  const handleClick = (index) => {
    const newButtonTexts = Array(shortenedUrl.length).fill("Copy");
    newButtonTexts[index] = "Copied!";
    setButtonText(newButtonTexts);
    localStorage.setItem("buttonText", JSON.stringify(newButtonTexts));
    setClickedIndex(index);
  };

  const handleChange = (e) => {
    setOriginalURL(e.target.value);
    const inputValue = e.target.value.trim();
    if (inputValue.startsWith("https://www.")) {
      setValidInput(true);
      setOriginalURL(inputValue);
    } else {
      setValidInput(false);
      return;
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validInput) {
      handleShortenUrl();
      setOriginalURL('');
    } else {
      alert("Invalid Input");
      return;
    }
  };

  useEffect(() => {
    const initialButtonTexts = localStorage.getItem("buttonText");
    if (initialButtonTexts) {
      setButtonText(JSON.parse(initialButtonTexts));
    } else {
      setButtonText(Array(shortenedUrl.length).fill("Copy"));
    }
  }, [shortenedUrl.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const resetButtonTexts = Array(shortenedUrl.length).fill("Copy");
      setButtonText(resetButtonTexts);
      localStorage.setItem("buttonText", JSON.stringify(resetButtonTexts));
    });

    return () => clearTimeout(timer);
  }, []);

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
          <button onClick={handleClearLocalStorage}>Get Started</button>
        </div>
      </section>
      <div className="back">
        <div className="main-content">
          <section className="section-2">
            <div className="info-2">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={originalURL}
                  onChange={handleChange}
                  className={`${
                    errorMessage && originalURL.trim() === ""
                      ? "!border-4"
                      : "!border-0"
                  }`}
                  placeholder="Shorten a link here..."
                  name="inputURL"
                />
                {errorMessage && <span>{errorMessage}</span>}
                <button type="submit">Shorten It!</button>
              </form>
            </div>
            <div className="shortLinks">
              {errorText && <span>{errorText}</span>}
              <ul>
                {shortenedUrl.map((url, index) => (
                  <li
                    key={index}
                    className="bg-white lg:flex lg:justify-between lg:items-center rounded-lg py-2 xl:py-4 px-4 my-5 text-left"
                  >
                    <a
                      href={url}
                      className="text-xl "
                      target="_blank"
                      rel="noreferrer nooponer"
                    >
                      {url}
                    </a>
                    <br />
                    <span className=" border-slate-100 border-y-2 mt-4 -mx-10 w-screen block lg:hidden"></span>
                    <br />
                    <CopyToClipboard text={url}>
                      <button
                        onClick={() => handleClick(index)}
                        className={`w-full py-1 text-[1.1rem] 
                      mt-0 max-lg:my-3 rounded-lg lg:w-1/4 
                      2xl:w-2/12 ${
                        clickedIndex === index ? "buttonClicked" : ""
                      }`}
                      >
                        {buttonText[index] || "Copy"}
                      </button>
                    </CopyToClipboard>
                  </li>
                ))}
              </ul>
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
            <span></span>
            <div className="desktop-view">
              <div className="infoIcons">
                <div className="iconsBack">
                  <img src={iconBrand} alt="" />
                </div>
                <h3>Brand Recognition</h3>
                <p>
                  Boost your bran recognition with each click. Generic lins
                  don't mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
              <div className="infoIcons">
                <div className="iconsBack">
                  <img src={iconRecords} alt="" />
                </div>
                <h3>Detailed Records</h3>
                <p>
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
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
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
