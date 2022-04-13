import React, { useState, useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { heavyProcess } from '../../helpers/heavyProcess';

import '../02-useEffect/effects.css';

export const MemoHook = () => {

  const { counter, increment } = useCounter( 5000 );
  const [ show, setShow ] = useState(true);

  // It memorized the function value based on the input parameter
  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [ counter ]);

  return (
    <>
      <h1>MemoHook</h1>
      <h3>Counter: <small>{ counter }</small> </h3>
      <hr/>

      {/* Here I get the return of the function, but
        passed through useMemo */}
      <p>{ memoHeavyProcess }</p>

      <button
        className="btn btn-primary"
        onClick={ () => increment() }
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={ () => {
          setShow( !show );
        }}
      >
        Show/Hide { JSON.stringify(show) }
      </button>
    </>
  )
};
