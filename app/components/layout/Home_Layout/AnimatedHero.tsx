'use client';
import React, { useState } from 'react';
import TypeWriter from './TypeWriter';
import RotatingSubtitles from './RotatingSubtitles';

const AnimatedHero: React.FC = () => {
  const [nameTypingComplete, setNameTypingComplete] = useState(false);

  const subtitles = [
    "Full-Stack Developer & Creative Problem Solver",
    "Frontend Developer",
    "Backend Developer",
    "React & Next.js Specialist",
    "UI/UX Enthusiast",
    "Continuous Learner",
    "Tech Innovator"
  ];

  const handleNameTypingComplete = () => {
    setNameTypingComplete(true);
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-foreground">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent font-bold">
          <TypeWriter
            text="Lahiru Illangasinghe"
            speed={80}
            delay={500}
            cursor={true}
            onComplete={handleNameTypingComplete}
          />
        </span>
      </h1>
      
      <div className="min-h-[2rem] sm:min-h-[2.5rem] lg:min-h-[3rem]">
        {nameTypingComplete && (
          <RotatingSubtitles
            subtitles={subtitles}
            interval={2500}
            transitionDuration={500}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground font-medium tracking-wide"
          />
        )}
      </div>
    </div>
  );
};

export default AnimatedHero;