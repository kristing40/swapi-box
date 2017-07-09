import React from 'react';
import './Scroller.css';

const Scroller = ({ scrollerText, scrollerTitle, releaseDate }) => {
  return (
    <div className="scroller">
      <div className="crawl">
        <p className="scroller-title">{scrollerTitle}</p>
        <p className="release-date">{releaseDate}</p>
        <p className="scroller-txt">{scrollerText}</p>
      </div>
    </div>
  );
}

export default Scroller;
