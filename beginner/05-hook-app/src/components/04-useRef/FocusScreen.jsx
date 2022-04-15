import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

  const inputRef = useRef();

  // It saves the input reference
  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr/>

      <input
        ref={ inputRef }
        type="text"
        className="form-control"
        placeholder="Your name"
      />

      <button
        className="btn btn-outline-primary mt-5"
        onClick={ handleClick }
      >
        Focus
      </button>
    </>
  )
};
