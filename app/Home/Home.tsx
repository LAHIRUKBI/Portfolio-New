'use client';
import Image from "next/image";
import DotGrid from "../components/layout/DotGridBackground";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiMongodb, SiFigma, SiGithub, SiLinkedin } from 'react-icons/si';
import { HiDocument } from 'react-icons/hi';

export default function Home() {
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
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/40 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 font-sans pt-24 pb-8 px-4 sm:px-6 min-h-screen flex items-center">
        <main className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-7xl mx-auto w-full">

          {/* Profile Image Section - Optimized for Mobile */}
          <div className="flex-0 flex justify-center order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="relative group">  
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-xl overflow-hidden border-2 border-white/20 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105">
                <Image
                  src="/images/profile.JPG"
                  alt="Lahiru Illangasinghe - Full Stack Developer"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Left Content Section */}
          <div className="flex-1 space-y-6 lg:space-y-1 order-2 lg:order-1 text-center lg:text-left">
            {/* Hero Section */}
            <div className="space-y-4 sm:space-y-5">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-foreground">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent font-bold">
                    Lahiru Illangasinghe
                  </span>
                </h1>
                <h2 className="text-base sm:text-lg lg:text-xl text-muted-foreground font-medium tracking-wide">
                  Full-Stack Developer & Creative Problem Solver
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground/90 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                  I'm a passionate third-year undergraduate specializing in Information Technology at SLIIT University, specializing in building stunning and efficient web and mobile applications. I love creating seamless user experiences with modern technologies.
                </p>
              </div>


              {/* Stats */}
              <div className="flex justify-center lg:justify-start gap-6 sm:gap-8 pt-4">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-foreground">10+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-foreground">3+</div>
                  <div className="text-sm text-muted-foreground">Years Exp</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-foreground">5+</div>
                  <div className="text-sm text-muted-foreground">Tech Stack</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 items-center flex-col sm:flex-row pt-6 justify-center lg:justify-start">
              <a
                className="rounded-full border border-solid border-transparent transition-all duration-300 flex items-center justify-center bg-foreground text-background gap-2 hover:bg-foreground/90 hover:scale-105 font-medium text-sm sm:text-base h-12 px-8 shadow-md hover:shadow-lg"
                href="/projects"
              >
                <span>View My Work</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                className="rounded-full border border-solid border-foreground/20 transition-all duration-300 flex items-center justify-center hover:bg-foreground/5 hover:border-foreground/40 hover:scale-105 font-medium text-sm sm:text-base h-12 px-8 w-full sm:w-auto backdrop-blur-sm"
                href="/contact"
              >
                Get In Touch
              </a>
            </div>

            {/* Tech Icons */}
            <div className="pt-8">
              <h3 className="text-base font-semibold text-foreground mb-4 text-center lg:text-left">
                Tech Stack
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 max-w-2xl mx-auto lg:mx-0">
                {techIcons.map((tech, index) => (
                  <a
                    key={index}
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-3 rounded-xl bg-background/50 backdrop-blur-sm border border-foreground/10 hover:border-foreground/20 transition-all duration-300 hover:scale-105 hover:shadow-md"
                    title={tech.title}
                  >
                    <div className="text-xl sm:text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <div className="text-xs font-medium text-foreground/80 text-center leading-tight">
                      {tech.title}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links with React Icons */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com/LAHIRUKBI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <SiGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/lahiru-i/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <SiLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>

              <a
                href="https://mega.nz/file/73hyGaBJ#0Y3r5mCYb4NtnW2I5RQyx60IacxpBlNTOsnsiJRJpU0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <HiDocument className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Resume</span>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}