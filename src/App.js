import "./styles.scss";
import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

//  https://www.facebook.com  https://www.google.com  https://www.youtube.com

function App() {
  const [active, setActive] = useState("nav-menu");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorText, setErrorText] = useState("");
  const [originalURL, setOriginalURL] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState([]);

  useEffect(() => {
    const savedLinks = JSON.parse(localStorage.getItem("shortenedUrl"));
    if (savedLinks) {
      setShortenedUrl(savedLinks);
    }
  }, []);

  const handleClearLocalStorage = (e) => {
    window.location.reload();
    localStorage.clear();
    console.log("Local storage cleared successfully.");
  };

  const handleShortenUrl = async (e) => {
    if (shortenedUrl.includes(originalURL.trim())) {
      alert("URL already submitted.");
      return;
    }

    if (originalURL.trim() === "") {
      setErrorMessage("Please add a link");
    } else {
      setErrorMessage("");
      const newShortenedUrlLinks = [...shortenedUrl, originalURL];
      setShortenedUrl(newShortenedUrlLinks);
      setOriginalURL("");
      localStorage.setItem(
        "shortenedUrl",
        JSON.stringify(newShortenedUrlLinks)
      );
    }

    /*try {
      const response = await axios.post('https://ulvis.net/api.php?', { url: originalURL });
      const responseData = response.data;

      if (response.success) {
        /* setShortenedUrl(responseData.data.url); 
        setErrorText('');
      } else {
        setErrorText('Error shortening URL.');
      }
    } catch (error) {
      console.error('Error shortening URL:', error);
        setErrorText("Error shortening URL");
      };
      */
  };

  const navToggle = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");
  };

  return (
    <div className="App">
      <Header active={active} navToggle={navToggle} />
      <Main
        errorMessage={errorMessage}
        handleShortenUrl={handleShortenUrl}
        setOriginalURL={setOriginalURL}
        originalURL={originalURL}
        errorText={errorText}
        shortenedUrl={shortenedUrl}
        handleClearLocalStorage={handleClearLocalStorage}
      />
      <Footer />
    </div>
  );
}

export default App;
