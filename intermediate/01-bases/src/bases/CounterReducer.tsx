import { useReducer } from "react";

export const CounterReducerComponent = () => {

  // init argument (third one) of useReducer is mostly use for LazyLoad
  const [state, dispatch] = useReducer(reducer, initial_value);

  const handleClick = () => {
    setCounter( oldValue => oldValue + 1 );
  };

  return (
    <>
      <h1>Counter Reducer: { counter }</h1>
      <button onClick={handleClick}>
        +1
      </button>
    </>
  )
};
