import React from 'react';

function Quote({ quote }) {
  return (
    <div className="quote">
      <blockquote className='tag'>Tag: {quote.type} </blockquote>
      <blockquote className="blockquote">{quote.quote}</blockquote>
      <footer className="blockquote-footer">Author: {quote.author}
        <div> Year: {quote.year}</div>
      </footer>        
    </div>
  );
}

export default Quote;
