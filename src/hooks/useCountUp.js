import { useState, useEffect } from 'react';

/**
 * Custom hook to animate numeric counter from 0 to target value
 * @param {number} target - The final numeric value
 * @param {number} duration - Animation duration in milliseconds
 * @param {boolean} start - Trigger condition (e.g. isInView)
 * @param {number} decimals - Number of decimal places
 * @returns {string} The formatted animated number
 */
export function useCountUp(target = 0, duration = 2000, start = false, decimals = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let animationFrame = null;

    const easeOutExpo = (t) => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const current = easedProgress * target;

      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [target, duration, start]);

  return count.toFixed(decimals);
}

