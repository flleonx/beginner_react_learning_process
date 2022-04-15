import { useState, useEffect, useRef } from "react";
import { gsap } from 'gsap';

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {

  const [counter, setCounter] = useState(5);
  const counterHTMLElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    // setCounter( prev => (prev >= MAXIMUN_COUNT) ? MAXIMUN_COUNT : prev + 1);
    setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  /*
    It's possible use useLayoutEffect when we strictly need that the effect
    to be executed after the HTML is rendered.
  */
  useEffect(() => {
    if(counter < 10) return;

    console.log("%cMax value", "color: red; background-color: black;");

    const timeLine = gsap.timeline();

    timeLine.to(counterHTMLElement.current, { y: -10, duration: 0.2, ease: "ease.out" })
      .to(counterHTMLElement.current, { y: 0, duration: 1, ease: "bounce.out" });

  }, [counter])

  return (
    <>
      <h1>CounterEffect: </h1>
      <h2 ref={counterHTMLElement}>{counter}</h2>
      <button onClick={handleClick}>
        +1
      </button>
    </>
  )
};
