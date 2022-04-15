import { useState } from "react";

interface IProps {
  initialValue?: number
};

export const Counter = ({ initialValue = 0 }: IProps) => {

  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    setCounter( oldValue => oldValue + 1 );
  };

  return (
    <>
      <h1>Counter: { counter }</h1>
      <button onClick={handleClick}>
        +1
      </button>
    </>
  )
};
