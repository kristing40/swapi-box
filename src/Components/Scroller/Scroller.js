import React from 'react'
import css from './Scroller.css'

const Scroller = ({ scrollerText }) => {
  return (
    <div className="scroller-txt">
      <p>{scrollerText}</p>
    </div>
  )
}

export default Scroller;
