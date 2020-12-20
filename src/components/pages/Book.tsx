import React, { useState, useEffect } from 'react';
// import { CSSTransition } from 'react-transition-group';

const Book = () => {
  const [heading, setHeading] = useState('')

  const updateUi = () => {
    setHeading('Book Now');
  }

  useEffect(() => {
    updateUi();
  }, [])

  return (
    <h2>{heading}</h2>
  )
}

export default Book;