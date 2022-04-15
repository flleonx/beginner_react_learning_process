import { useState } from "react";

interface IProps {
  initialValue?: number;
};

interface ICounterState {
  counter: number;
  clicks: number;
};

export const CounterBy = ({ initialValue = 0 }: IProps) => {

  const [{ counter, clicks }, setCounter] = useState<ICounterState>({
    counter: initialValue,
    clicks: 0
  });

  const handleClick = (value: number) => {
    setCounter( ({ counter, clicks }) => ({
      counter: counter + value,
      clicks: clicks + 1
    }));
  };

  return (
    <>
      <h1>CounterBy: { counter }</h1>
      <h1>CounterBy: { clicks }</h1>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  )
};
