import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export function useGSAPCounter({
  target,
  duration = 2,
  ease = 'power2.out',
  repeatDelay = 5, 
  decimals = 0,
} = {}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let tween;
    let interval;

    const runAnimation = () => {
      const obj = { val: 0 };

      tween = gsap.to(obj, {
        val: target,
        duration,
        ease,
        onUpdate: () => {
          setValue(
            decimals > 0
              ? Number(obj.val.toFixed(decimals))
              : Math.round(obj.val),
          );
        },
      });
    };

    // first run immediately
    runAnimation();

    // repeat every 3 seconds
    interval = setInterval(() => {
      runAnimation();
    }, repeatDelay * 1000);

    return () => {
      if (tween) tween.kill();
      clearInterval(interval);
    };
  }, [target, duration, ease, repeatDelay, decimals]);

  return value;
}
