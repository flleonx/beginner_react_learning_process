import React from 'react';

// It only trigger re-render when its properties has changed
export const Small = React.memo(({ value }) => {

    console.log(' I was called again :( ')

    return (
      <small>{ value }</small>
    )

  }
);
