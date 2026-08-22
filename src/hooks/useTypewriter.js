import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export function useTypewriter(text, { speed = 60, startDelay = 500 } = {}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [output, setOutput] = useState(prefersReducedMotion ? text : '');

  useEffect(() => {
    if (prefersReducedMotion) {
      setOutput(text);
      return undefined;
    }

    setOutput('');
    let charIndex = 0;
    let intervalId;

    const startId = setTimeout(() => {
      intervalId = setInterval(() => {
        charIndex += 1;
        setOutput(text.slice(0, charIndex));
        if (charIndex >= text.length) {
          clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startId);
      clearInterval(intervalId);
    };
  }, [text, prefersReducedMotion, speed, startDelay]);

  return output;
}
