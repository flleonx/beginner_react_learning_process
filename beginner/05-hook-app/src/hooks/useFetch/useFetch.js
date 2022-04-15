import { useState, useEffect, useRef } from "react";

export const useFetch = ( url ) => {

  // Track if the component is mounted
  const isMounted = useRef(true);
  const [state, setState] = useState({ data:null, loading: true, error: null });

  useEffect(() => {

    return () => {
      // Update componen state
      isMounted.current = false;
    }

  }, [ ]);

  useEffect( () => {

    setState({ data:null, loading: true, error: null });

    fetch( url )
      .then( resp => resp.json() )
      .then( data => {

        if ( isMounted.current ) {
          setState({
            loading: false,
            error: null,
            data
          });
        } else {
          // console.log('setState was not called');
        }

      })
      .catch( () => {
        setState({
          data: null,
          loading: false,
          error: 'It was not possible to load the info'
        })
      });

  }, [ url ]);

  return state;

};
