'use client';
import Image from "next/image";
import DotGrid from "../components/layout/Home_Layout/DotGrid_1";
import AnimatedHero from "../components/layout/Home_Layout/AnimatedHero";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiMongodb, SiFigma, SiGithub, SiLinkedin } from 'react-icons/si';
import { HiDocument, HiOfficeBuilding } from 'react-icons/hi';
import { FaBriefcase } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // Tech icons
  const techIcons = [
    { icon: <SiReact className="text-blue-500" />, title: "React", href: "https://react.dev" },
    { icon: <SiNextdotjs className="text-black dark:text-white" />, title: "Next.js", href: "https://nextjs.org" },
    { icon: <SiTypescript className="text-blue-600" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { icon: <SiTailwindcss className="text-cyan-500" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { icon: <SiNodedotjs className="text-green-600" />, title: "Node.js", href: "https://nodejs.org" },
    { icon: <SiPython className="text-yellow-500" />, title: "Python", href: "https://python.org" },
    { icon: <SiMongodb className="text-green-500" />, title: "MongoDB", href: "https://mongodb.com" },
    { icon: <SiFigma className="text-purple-600" />, title: "Figma", href: "https://figma.com" },
  ];

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with DotGrid - Direct Integration */}
      <div className="fixed inset-0 -z-10">
        <DotGrid
          dotSize={2}
          gap={15}
          baseColor="#5227FF"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-purple-900/5 to-background/90" />
      </div>

      {/* Content - Optimized for mobile with better positioning */}
      <div className="relative z-10 font-sans pt-20 md:pt-24 pb-8 px-4 sm:px-6 min-h-screen flex items-start md:items-center">
        <main className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto w-full mt-8 md:mt-0">

          {/* LEFT CONTENT SECTION - Now comes first on mobile */}
          <div className="flex-1 space-y-4 md:space-y-6 lg:space-y-1 text-center lg:text-left w-full order-2 lg:order-1">
            {/* Hero Section with Animations */}
            <div className="space-y-3 md:space-y-4 sm:space-y-5">
              <div className="scale-90 md:scale-100">
                <AnimatedHero />
              </div>

              {/* Enhanced Bio with Octick mention - Mobile optimized */}
              <div className="relative px-2 md:px-0">
                <p className="text-xs xs:text-sm sm:text-base text-muted-foreground/90 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                  I'm a passionate third-year undergraduate specializing in Information Technology at SLIIT University,
                  <span className="text-orange-400 font-semibold"> currently working as a Full Stack Developer at Octick</span>.
                  I specialize in building stunning and efficient web and mobile applications, creating seamless user experiences with modern technologies.
                </p>

                {/* Decorative line under bio - Hidden on mobile */}
                <div className="hidden lg:block w-32 h-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full mt-4 opacity-60"></div>
              </div>

              {/* Enhanced Stats with Octick experience - Mobile Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 pt-4 max-w-md mx-auto lg:mx-0 lg:flex lg:justify-start lg:gap-4 sm:gap-6">
                {[
                  { number: "10+", label: "Projects", color: "text-foreground group-hover:text-orange-500" },
                  { number: "3+", label: "Years Exp", color: "text-foreground group-hover:text-orange-500" },
                  { number: "8+", label: "Tech Stack", color: "text-foreground group-hover:text-orange-500" },
                  {
                    number: "@Octick",
                    label: "Current Role",
                    color: "text-foreground group-hover:text-orange-500",
                    hasDot: true
                  }
                ].map((stat, index) => (
                  <div key={index} className="text-center group cursor-default bg-white/5 backdrop-blur-sm rounded-lg p-3 md:p-0 md:bg-transparent">
                    <div className="relative flex flex-col items-center">
                      {stat.hasDot && (
                        <div className="absolute -top-1 -right-1 md:-top-1 md:-right-2 w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
                      )}
                      <div className={`text-lg sm:text-xl md:text-2xl font-bold ${stat.color} transition-colors`}>
                        {stat.number}
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced CTA Buttons - Mobile Stacked */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center pt-4 md:pt-6 justify-center lg:justify-start">
              <a
                className="group w-full sm:w-auto rounded-full border-2 border-foreground/30 bg-transparent text-foreground transition-all duration-300 flex items-center justify-center gap-3 hover:border-orange-500 hover:bg-orange-500/5 hover:scale-105 font-medium text-sm md:text-base py-3 px-6 md:h-12 md:px-8 hover:shadow-lg hover:shadow-orange-500/20 active:scale-95"
                href="/projects"
              >
                <span>View My Work</span>
                <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              {/* Optional contact button for mobile */}
              <a
                href="/contact"
                className="w-full sm:w-auto rounded-full border-2 border-white/20 bg-white/5 text-foreground transition-all duration-300 flex items-center justify-center gap-3 hover:border-white/40 hover:bg-white/10 hover:scale-105 font-medium text-sm md:text-base py-3 px-6 md:h-12 md:px-8 hover:shadow-lg active:scale-95 md:hidden"
              >
                <span>Get in Touch</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            {/* Tech Icons - Mobile Optimized */}
            <div className="pt-6 md:pt-8">
              <h3 className="text-sm md:text-base font-semibold text-foreground mb-4 md:mb-6 text-center lg:text-left">
                Tech Stack
              </h3>
              <div className="grid grid-cols-4 xs:grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 md:gap-3 max-w-2xl mx-auto lg:mx-0">
                {techIcons.map((tech, index) => (
                  <a
                    key={index}
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col items-center p-2 md:p-4 rounded-lg md:rounded-xl bg-background/40 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-400 hover:scale-110 hover:shadow-lg active:scale-105"
                    title={tech.title}
                  >
                    {/* Icon with glow effect */}
                    <div className="relative text-xl sm:text-2xl md:text-3xl mb-2 md:mb-3 group-hover:scale-125 transition-transform duration-400">
                      {tech.icon}
                      <div className="absolute inset-0 text-xl sm:text-2xl md:text-3xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-400">
                        {tech.icon}
                      </div>
                    </div>

                    {/* Title that fades in on hover - Always visible on mobile */}
                    <div className={`text-[10px] xs:text-xs font-medium text-foreground/70 text-center ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      } transform ${isMobile ? 'translate-y-0' : 'translate-y-2'} group-hover:translate-y-0 transition-all duration-300`}>
                      {tech.title}
                    </div>
                  </a>
                ))}
              </div>

              {/* Mobile hint */}
              <p className="text-center text-xs text-muted-foreground/60 mt-4 md:hidden">
                Tap icons to learn more about each technology
              </p>
            </div>
          </div>

          {/* PROFILE IMAGE SECTION - Moved down, comes second on mobile */}
          <div className="flex-0 flex flex-col items-center justify-center mb-6 md:mb-0 lg:mb-0 w-full order-1 lg:order-2 mt-0 md:mt-0 lg:mt-0">
            <div className="relative group w-full flex flex-col items-center">
              {/* Outer Glass Border Effect - Reduced on mobile */}
              <div className="absolute -inset-2 md:-inset-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/0 shadow-md pointer-events-none"></div>

              {/* Profile Image Container - Responsive sizing */}
              <div className="relative w-56 h-56 xs:w-60 xs:h-60 sm:w-68 sm:h-68 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-xl md:rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105 bg-background/10 backdrop-blur-md">
                <Image
                  src="/images/profile.JPG"
                  alt="Lahiru Illangasinghe - Full Stack Developer"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 360px) 224px, (max-width: 480px) 240px, (max-width: 640px) 272px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Inner Glass Shine */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Octick Badge - Mobile Responsive */}
              <div className="absolute -bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 z-20 w-full max-w-[90%] md:max-w-none">
                <div className="relative group/badge">
                  {/* Glowing effect behind badge - Reduced on mobile */}
                  <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur opacity-0 group-hover/badge:opacity-30 transition-opacity duration-500"></div>

                  {/* Badge container - Responsive padding */}
                  <div className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg flex items-center justify-center gap-1.5 md:gap-2 transform hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-sm w-full">
                    {/* Animated dot */}
                    <div className="relative w-1.5 h-1.5 md:w-2 md:h-2">
                      <div className="absolute inset-0 bg-white rounded-full animate-ping"></div>
                      <div className="relative w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                    </div>

                    <FaBriefcase className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm font-semibold whitespace-nowrap">Full Stack Dev</span>

                    {/* Tooltip - Hidden on mobile touch */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-600 to-red-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden md:block">
                      <div className="flex items-center gap-2">
                        <HiOfficeBuilding className="w-3 h-3" />
                        Currently at Octick
                      </div>
                      {/* Arrow */}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-orange-600 rotate-45"></div>
                    </div>
                  </div>

                  {/* Mobile touch hint */}
                  <div className="text-[10px] text-gray-400 text-center mt-1 opacity-70 md:hidden">
                    Tap for details
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Footer Links - Mobile Responsive */}
            <div className="mt-8 md:mt-10 px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl flex items-center justify-between gap-3 md:gap-4 transform hover:scale-105 transition-all duration-300 z-20 w-full max-w-sm">
              <a
                href="https://github.com/LAHIRUKBI"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg active:bg-white/10"
              >
                <SiGithub className="w-5 h-5 md:w-6 md:h-6" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
                  GitHub
                </span>
                <span className="text-[10px] text-gray-400 mt-1 md:hidden">GitHub</span>
              </a>

              <div className="w-[1px] h-4 md:h-6 bg-white/10"></div>

              <a
                href="https://linkedin.com/in/lahiru-i/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex flex-col items-center text-muted-foreground hover:text-blue-500 transition-colors p-2 rounded-lg active:bg-white/10"
              >
                <SiLinkedin className="w-5 h-5 md:w-6 md:h-6" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
                  LinkedIn
                </span>
                <span className="text-[10px] text-gray-400 mt-1 md:hidden">LinkedIn</span>
              </a>

              <div className="w-[1px] h-4 md:h-6 bg-white/10"></div>

              {/* Updated Resume Link */}
              <a
                href="/CV/Information Technology_Lahiru_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex flex-col items-center text-muted-foreground hover:text-purple-400 transition-colors p-2 rounded-lg active:bg-white/10"
              >
                <HiDocument className="w-5 h-5 md:w-6 md:h-6" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
                  Resume
                </span>
                <span className="text-[10px] text-gray-400 mt-1 md:hidden">Resume</span>
              </a>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile-specific styles */}
      <style jsx global>{`
        /* Better touch targets for mobile */
        @media (max-width: 640px) {
          a, button {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Prevent text size adjustment on orientation change */
          html {
            -webkit-text-size-adjust: 100%;
          }
          
          /* Improve scrolling on iOS */
          * {
            -webkit-overflow-scrolling: touch;
          }
        }
        
        /* Prevent pull-to-refresh on mobile */
        body {
          overscroll-behavior-y: none;
        }
        
        /* iOS specific optimizations */
        @supports (-webkit-touch-callout: none) {
          .min-h-screen {
            min-height: -webkit-fill-available;
          }
        }
        
        /* Android specific optimizations */
        @media screen and (max-device-width: 480px) {
          /* Smooth transitions for Android */
          * {
            transition: all 0.2s ease;
          }
        }
      `}</style>
    </div>
  );
}