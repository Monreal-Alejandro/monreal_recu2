import React, { useEffect, useState, useRef } from "react";

const AnimatedNumber = ({ value, duration = 2000, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const startTimestamp = useRef(null);

  useEffect(() => {
    const step = (timestamp) => {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const progress = timestamp - startTimestamp.current;
      const progressRatio = Math.min(progress / duration, 5000);
      setCount(Math.floor(progressRatio * value));

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setCount(value); // asegurar valor final exacto
      }
    };
    requestAnimationFrame(step);

    return () => {
      startTimestamp.current = null;
    };
  }, [value, duration]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default AnimatedNumber;
