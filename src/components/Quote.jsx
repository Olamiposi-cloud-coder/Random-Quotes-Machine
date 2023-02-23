import React from 'react';

function Quote({ quote }) {
  return (
    <div className="quote">
      <blockquote className="blockquote">{quote.text}</blockquote>
      <footer className="blockquote-footer">{quote.author} <cite title="Year">{quote.year}</cite></footer>
    </div>
  );
}

export default Quote;
