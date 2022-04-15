import React from 'react';

// It's important to use React.memo to track the changes
// in the props
export const ShowIncrement = React.memo(({ increment }) => {

  console.log('I was rendered again :(')

  return (
    <button
      className="btn btn-primary"
      onClick={ () => {
        increment();
      }}
    >
      Increment
    </button>
  )
});
