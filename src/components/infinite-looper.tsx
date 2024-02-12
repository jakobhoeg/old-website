'use client'

import { useCallback, useEffect, useRef, useState } from "react";

export default function InfiniteLooper({
    speed,
    direction,
    children,
  }: {
    speed: number;
    direction: "right" | "left";
    children: React.ReactNode;
  }) {
    const [looperInstances, setLooperInstances] = useState(1);
    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    const setupInstances = useCallback(() => {
        if (!innerRef?.current || !outerRef?.current) return;

        const { width } = innerRef.current.getBoundingClientRect();

        const { width: parentWidth } = outerRef.current.getBoundingClientRect();

        const instanceWidth = width / innerRef.current.children.length;

        if (width < parentWidth + instanceWidth) {
            setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
        }

        resetAnimation();
  }, [looperInstances]);

  function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute("data-animate", "false");

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "true");
        }
      }, 50);
    }
  }

    useEffect(() => {
        setupInstances();
    }, []);

    
  
    return (
      <div className="looper flex justify-end [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]" ref={outerRef}>
        <div className="looper__innerList" ref={innerRef}>
          
            <div

              className="looper__listInstance"
              style={{
                animationDuration: `${speed}s`,
                animationDirection: direction === "right" ? "reverse" : "normal",
              }}
            >
              {children}
            </div>
          
        </div>
      </div>
    );
  }