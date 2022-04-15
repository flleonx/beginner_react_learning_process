import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from 'gsap';

export const useCounter = ({ maxCount = 1 }) => {

  const [counter, setCounter] = useState(5);
  const counterHTMLElement = useRef<HTMLHeadingElement>(null);
  const timeLine = useRef(gsap.timeline());

  const handleClick = () => {
    // setCounter( prev => (prev >= MAXIMUN_COUNT) ? MAXIMUN_COUNT : prev + 1);
    setCounter(prev => Math.min(prev + 1, maxCount));
  };

  /*
    It's possible use useLayoutEffect when we strictly need that the effect
    to be executed after the HTML is rendered.
  */

  useLayoutEffect(() => {

    if(!counterHTMLElement.current) return;

    timeLine.current.to(counterHTMLElement.current, { y: -10, duration: 0.2, ease: "ease.out" })
      .to(counterHTMLElement.current, { y: 0, duration: 1, ease: "bounce.out" })
      .pause()

  }, []);

  /*
    React team suggest that each useEffect should
    have a single responsability
  */

  useEffect(() => {
    // if(counter < 10) return;

    console.log("%cMax value", "color: red; background-color: black;");

    // Reproduce the animation from the beginning when counter changes
    timeLine.current.play(0);

  }, [counter]);

  return {
    counter,
    elementToAnimate: counterHTMLElement,
    handleClick
  };
};
