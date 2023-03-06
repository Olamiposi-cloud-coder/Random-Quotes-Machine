import React, { useState } from 'react';
import Quote from './Quote';
import './QuoteMachine.css';

const quotes = [
  {
    author: 'Nelson Mandela',
    year: '1994',
    text: 'It always seems impossible until it is done.'
  },
  {
    author: 'Maya Angelou',
    year: '1969',
    text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
  },
  {
    author: 'Steve Jobs',
    year: '2005',
    text: 'Innovation distinguishes between a leader and a follower.'
  },
  // add more quotes here
];

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
    const textColor = `hsl(${hue}, ${saturation}%, ${lightness < 30 ? lightness + 20 : lightness - 30}%)`;
    return { backgroundColor, textColor };
  }

  const quote = quotes[quoteIndex];

  return ( 
    <div className="container-fluid" style={{backgroundColor: backgroundColor.backgroundColor, color: backgroundColor.textColor }}>
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-6">
          <div className="card text-center mt-5 mb-5">
            <div className="card-header bg-transparent">
              <h1 className="display-3">Random Quote Machine</h1>
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
