'use client';
import React, { useState, useEffect } from 'react';

interface RotatingSubtitlesProps {
  subtitles: string[];
  interval?: number;
  transitionDuration?: number;
  className?: string;
}

const RotatingSubtitles: React.FC<RotatingSubtitlesProps> = ({
  subtitles,
  interval = 3000,
  transitionDuration = 500,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const cycleSubtitles = setInterval(() => {
      // Start fade out
      setIsVisible(false);
      
      // After fade out, change text and fade in
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % subtitles.length);
        setIsVisible(true);
      }, transitionDuration);
      
    }, interval);

    return () => clearInterval(cycleSubtitles);
  }, [subtitles.length, interval, transitionDuration]);

  return (
    <div className={`relative h-8 ${className}`}>
      <span
        className={`absolute inset-0 transition-opacity duration-${transitionDuration} ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {subtitles[currentIndex]}
      </span>
    </div>
  );
};

export default RotatingSubtitles;