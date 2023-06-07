import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Wrapper from '../components/Wrapper';
import { StaticImage } from 'gatsby-plugin-image';

const About = () => {
  const animateH1 = useRef(null);

  const animateH1OnLoad = () => {
    gsap.fromTo(
      animateH1.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
  };

  useEffect(() => {
    animateH1OnLoad();
  }, []);

  return (
    <Wrapper>
      <h1 ref={animateH1}>About page</h1>
      <StaticImage src="../assets/images/test.png" placeholder="blurred" />
    </Wrapper>
  );
};

export default About;