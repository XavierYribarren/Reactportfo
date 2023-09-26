import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    const characters = text.split('');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textElement,
        start: 'top 80%', // Adjust this value as needed to control when the animation starts.
        end: 'top 20%',   // Adjust this value as needed to control when the animation ends.
        scrub: 0.15,
      },
    });

    characters.forEach((char, index) => {
      tl.fromTo(
        textElement.children[index].scale,
        { x: 0 },
        { x: 1, duration: 0.15, ease: 'power1.in', delay: index * 0.1 }
      );
    });
  }, [text]);

  return (
    <Text
      ref={textRef}
      fontSize={0.2}
      color={'white'}
      // position={opacityRef.current.position}
      rotation={[0, -Math.PI * 0.4, 0]}
      // fillOpacity={0}
      maxWidth={2.3}
    >
      {text.split('').map((char, index) => (
        <Text
          key={index}
          fontSize={0.2}
          color={'white'}
        >
          {char}
        </Text>
      ))}
    </Text>
  );
};

export default AnimatedText