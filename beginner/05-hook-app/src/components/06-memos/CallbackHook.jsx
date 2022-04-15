import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effects.css';

export const CallbackHook = () => {

  const [counter, setCounter] = useState( 10 );

  // const increment = () => {
  //   setCounter( counter + 1 );
  // };

  // It returns a memorized version of the callback and it only
  // changes if one of the dependecies have changed.
  const increment = useCallback( () => {
    setCounter( c => c + 1 );
  }, [ setCounter ]);


  // If increment were an argument of useEffect, it is also
  // recommended to use useCallback to avoid fake triggers
  // because the function take another space in memory

  // useEffect(() => {

  // }, [increment]);

  return (
    <>
      <h1>useCallback Hook: { counter }</h1>
      <hr/>

      <ShowIncrement increment={ increment }/>

    </>
  )
};
