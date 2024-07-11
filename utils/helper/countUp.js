"use client"
import { useEffect, useRef, useState } from 'react';

const CountUp = ({ start, end, duration = 1000000, className, startText, endText, isDecimal = false }) => {
    const [count, setCount] = useState(start);
    const increment = (end - start) / (duration / 1000);
    const countRef = useRef(null);

    useEffect(() => {
        let animationFrameId;
        const startTime = Date.now();

        const updateCount = () => {
            const elapsedTime = Date.now() - startTime;
            const newValue = Math.min(end, start + elapsedTime * increment);
            setCount(newValue);

            if (newValue < end) {
                animationFrameId = requestAnimationFrame(updateCount);
            }
        };

        animationFrameId = requestAnimationFrame(updateCount);

        return () => cancelAnimationFrame(animationFrameId);
    }, [start, end, increment]);

    return (
        <span ref={countRef} className={className}>
            {isDecimal ? startText + count?.toFixed(1) + endText
                :
                Math.floor(count)}
        </span>
    );
};

export default CountUp;
