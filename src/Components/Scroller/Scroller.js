import React from 'react'
import css from './Scroller.css'

const Scroller = ({ scrollerText }) => {
  return (
    <div className="scroller">
      <p className="scroller-txt">{scrollerText}</p>
    </div>
  )
}

export default Scroller;
