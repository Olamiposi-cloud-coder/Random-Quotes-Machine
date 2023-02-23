import React, { useState, useEffect } from 'react';
import Quote from './Quote';
import './QuoteMachine.css';

function QuoteMachine() {
  const [quote, setQuote] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());
  const [category, setCategory] = useState('inspirational');

  useEffect(() => {
    fetchQuote();
  }, [category]);

  function fetchQuote() {
    fetch(`https://api.quotable.io/quotes?tags=${category}`)
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const quoteData = data.results[randomIndex];
        setQuote({
          text: quoteData.content,
          author: quoteData.author,
          year: quoteData.year
        });
      })
      .catch(error => console.error(error));
  }

  function handleNewQuoteClick() {
    setQuote(null);
    setBackgroundColor(getRandomColor());
    fetchQuote();
  }

  function handleCategoryClick(category) {
    setCategory(category);
  }

  function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 30) + 70;
    const lightness = Math.floor(Math.random() * 20) + 50;
    const backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    const textColor = `hsl(${hue}, ${saturation}%, ${lightness < 30 ? lightness + 20 : lightness - 30}%)`;
    return { backgroundColor, textColor };
  }

  return (
    <div className="container-fluid" style={{ backgroundColor: backgroundColor.backgroundColor, color: backgroundColor.textColor }}>
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-8">
          <div className="card text-center mt-5">
            <div className="card-header bg-transparent">
              <h1 className="display-4">Random Quote Machine</h1>
            </div>
            <div className="card-body">
              {quote ? <Quote quote={quote} /> : <p>Loading...</p>}
              <button className="btn btn-primary btn-lg mt-3" onClick={handleNewQuoteClick}>New Quote</button>
              <div className="mt-3">
                <button className="btn btn-outline-secondary mr-3" onClick={() => handleCategoryClick('inspirational')}>Inspirational</button>
                <button className="btn btn-outline-secondary mr-3" onClick={() => handleCategoryClick('life')}>Life</button>
                <button className="btn btn-outline-secondary mr-3" onClick={() => handleCategoryClick('love')}>Love</button>
                <button className="btn btn-outline-secondary" onClick={() => handleCategoryClick('funny')}>Funny</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteMachine;
