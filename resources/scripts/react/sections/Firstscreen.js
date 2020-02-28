import React, { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';
import Screen from '../components/Screen';
import CircleAnimation from '../components/CircleAnimation';

const Firstscreen = () => {
  const firstscreenEl = useRef(null);

  const createParallax = () => {
    // eslint-disable-next-line
    const iParallax = new Parallax(firstscreenEl.current, {
      scalarX: 2.8,
      scalarY: 2.8,
      relativeInput: false,
    });
  };

  useEffect(() => {
    setTimeout(createParallax, 4000);
  }, []);

  return (
    <div ref={firstscreenEl} className="firstscreen">
      <CircleAnimation />
      <Screen depth={0.8} classes="pink" />
      <Screen />
    </div>
  );
};

export default Firstscreen;
