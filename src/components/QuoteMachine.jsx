import React, { useState } from 'react';
import Quote from './Quote';
import quotes from './quotes.json';
import './QuoteMachine.css';
   
function QuoteMachine() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());
  


  function handleNewQuoteClick() {
    setQuoteIndex(Math.floor(Math.random() * quotes.length));
    setBackgroundColor(getRandomColor());
  
  }

  function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 30) + 70;
    const lightness = Math.floor(Math.random() * 20) + 50;
    const backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    const textColor = `hsl(${hue}, ${saturation}%, ${lightness < 20 ? lightness + 30 : lightness - 10}%)`;
    return { backgroundColor, textColor};
  }


  const quote = quotes[quoteIndex];

  return ( 
    <div className="container-fluid" style={{backgroundColor: backgroundColor.backgroundColor, color: backgroundColor.textColor }}>
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-6">
          <div className="card text-center mt-5 mb-5">
            <div className="card-header bg-transparent">
              <h1 className="display-4">Random Quote Machine</h1>
            </div>
            <div className="card-body">
              <Quote quote={quote} />
              <button className="btn btn-primary btn-lg mt-3" onClick={handleNewQuoteClick}>New Quote</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteMachine;
