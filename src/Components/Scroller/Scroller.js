import React from 'react';
import css from './Scroller.css';

const Scroller = ({ scrollerText, scrollerTitle, releaseDate }) => {
  return (
    <div className="scroller">
      <p className="scroller-title">{scrollerTitle}</p>
      <p className="release-date">{releaseDate}</p>
      <p className="scroller-txt">{scrollerText}</p>
    </div>
  );
}

export default Scroller;
