"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface CounterProps {
  value: number;
  duration?: number;
  delay?: number;
  className?: string;
  suffix?: string;
  formatter?: (val: number) => string;
}

export function Counter({
  value,
  duration = 2,
  className = "",
  suffix = "",
  formatter = (val: number) => Math.floor(val).toLocaleString(),
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const lastRenderedValue = useRef<number>(-1);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;
    if (!isInView) {
      ref.current.textContent = "0" + suffix;
      return;
    }
    if (shouldReduceMotion) {
      ref.current.textContent = formatter(value) + suffix;
      return;
    }
    lastRenderedValue.current = -1;
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        const roundedValue = Math.floor(latest);
        if (roundedValue === lastRenderedValue.current) return;
        lastRenderedValue.current = roundedValue;
        if (ref.current) {
          ref.current.textContent = formatter(roundedValue) + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [duration, formatter, isInView, shouldReduceMotion, value, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
