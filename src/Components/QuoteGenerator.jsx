import React, { useState, useEffect } from "react";
import quotesData from "../quotes.json"; 

function QuoteGenerator() {
  const [quote, setQuote] = useState({ quote: "Loading quote...", author: "" });

  useEffect(() => {
    setQuote(quotesData[Math.floor(Math.random() * quotesData.length)]); 
  }, []);

  const getNewQuote = () => {
    setQuote(quotesData[Math.floor(Math.random() * quotesData.length)]);
  };

  return (
    <div className="quote-generator">
      <p>"{quote.quote}" - {quote.author}</p>
      <button onClick={getNewQuote}>Get New Quote</button>
    </div>
  );
}

export default QuoteGenerator;
