import React, { useState, useEffect } from "react";
import "./Quotes.css";
import QuoteData from "./QuoteData";

function Quotes() {
          const [quote, setQuote] = useState("");
          const [author, setAuthor] = useState("");
          const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

          const fetchQuote = () => {
                    const currentQuote = QuoteData[currentQuoteIndex];
                    setQuote(currentQuote.content);
                    setAuthor(currentQuote.writer);

                    // Increment the index to get the next quote
                    setCurrentQuoteIndex((currentQuoteIndex + 1) % QuoteData.length);

                    localStorage.setItem("quote", currentQuote.content);
                    localStorage.setItem("author", currentQuote.writer);
                    localStorage.setItem("lastFetchedDate", new Date().toLocaleDateString());
          };

          useEffect(() => {
                    const lastFetchedDate = localStorage.getItem("lastFetchedDate");
                    const currentDate = new Date().toLocaleDateString();

                    if (lastFetchedDate === currentDate) {
                              setQuote(localStorage.getItem("quote"));
                              setAuthor(localStorage.getItem("author"));
                              setCurrentQuoteIndex((currentQuoteIndex + 1) % QuoteData.length); // Move to the next quote
                    } else {
                              fetchQuote();
                    }

                    // Use setInterval to fetch a new quote every hour (3600000 milliseconds)
                    const fetchNewQuoteInterval = setInterval(() => {
                              fetchQuote();
                    }, 3600000);

                    return () => {
                              clearInterval(fetchNewQuoteInterval); // Clear the interval on component unmount
                    };
          }, [currentQuoteIndex]); // Add currentQuoteIndex as a dependency to the useEffect

          return (
                    <div className="quote-container">
                              <div className="quote">
                                        <h2>{quote}</h2>
                                        <small>-- {author} --</small>
                              </div>
                              <br />
                              <button className="btn" onClick={fetchQuote}>
                                        Generate New Quote
                              </button>
                    </div>
          );
}

export default Quotes;
