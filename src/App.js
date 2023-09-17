import "./App.css";
import React, { useState } from "react";
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  return (
    <div>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>

          <div style={{ display: "flex" }}>
            <FacebookShareButton
              title={`"${quote.content}" - ${quote.author}`}
              hashtag={["code", "coding"]}
              url={"http://facebook.com"}
            >
              <FacebookIcon round={true} size={40} />
            </FacebookShareButton>
            <WhatsappShareButton
              title={`"${quote.content}" - ${quote.author}`}
              hashtag={["code", "coding"]}
              url={"http://whatsapp.com"}
            >
              <WhatsappIcon round={true} size={40} />
            </WhatsappShareButton>
            <TwitterShareButton
              title={`"${quote.content}" - ${quote.author}`}
              hashtag={["code", "coding"]}
              url={"http://twiter.com"}
            >
              <TwitterIcon round={true} size={40} />
            </TwitterShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
