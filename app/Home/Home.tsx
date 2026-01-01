'use client';
import Image from "next/image";
import DotGrid from "../components/layout/Home_Layout/DotGrid_1";
import AnimatedHero from "../components/layout/Home_Layout/AnimatedHero";
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

          {/* Profile Image Section with Glass Border Effect */}
          <div className="flex-0 flex flex-col items-center justify-center order-1 lg:order-2 mb-6 lg:mb-0 -mt-8 lg:-mt-12">
            <div className="relative group">
              {/* Outer Glass Border Effect */}
              <div className="absolute -inset-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/0 shadow-md pointer-events-none"></div>

              {/* Profile Image Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-xl overflow-hidden border-2 border-white/20 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105 bg-background/10 backdrop-blur-md">
                <Image
                  src="/images/profile.JPG"
                  alt="Lahiru Illangasinghe - Full Stack Developer"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Inner Glass Shine */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Footer Links with React Icons - Added below Profile Image */}
            <div className="flex gap-6 pt-8 justify-center">
              <a
                href="https://github.com/LAHIRUKBI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group bg-background/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:border-white/20 shadow-sm hover:shadow-lg hover:scale-105"
              >
                <SiGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/lahiru-i/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group bg-background/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:border-white/20 shadow-sm hover:shadow-lg hover:scale-105"
              >
                <SiLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>

              <a
                href="https://mega.nz/file/73hyGaBJ#0Y3r5mCYb4NtnW2I5RQyx60IacxpBlNTOsnsiJRJpU0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group bg-background/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:border-white/20 shadow-sm hover:shadow-lg hover:scale-105"
              >
                <HiDocument className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Resume</span>
              </a>
            </div>
          </div>

          {/* Left Content Section */}
          <div className="flex-1 space-y-6 lg:space-y-1 order-2 lg:order-1 text-center lg:text-left">
            {/* Hero Section with Animations */}
            <div className="space-y-4 sm:space-y-5">
              <AnimatedHero />

              <p className="text-sm sm:text-base text-muted-foreground/90 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                I'm a passionate third-year undergraduate specializing in Information Technology at SLIIT University, specializing in building stunning and efficient web and mobile applications. I love creating seamless user experiences with modern technologies.
              </p>

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
                className="rounded-full border-2 border-foreground/30 bg-transparent text-foreground transition-all duration-300 flex items-center justify-center gap-3 hover:border-foreground hover:bg-foreground/5 hover:scale-105 font-medium text-sm sm:text-base h-12 px-8 hover:shadow-md"
                href="/projects"
              >
                <span>View My Work</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Tech Icons */}
            <div className="pt-8">
  <h3 className="text-base font-semibold text-foreground mb-6 text-center lg:text-left">
    Tech Stack
  </h3>
  <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 max-w-2xl mx-auto lg:mx-0">
    {techIcons.map((tech, index) => (
      <a
        key={index}
        href={tech.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col items-center p-4 rounded-xl bg-background/40 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-400 hover:scale-110 hover:shadow-lg"
        title={tech.title}
      >
        {/* Icon with glow effect */}
        <div className="relative text-2xl sm:text-3xl mb-3 group-hover:scale-125 transition-transform duration-400">
          {tech.icon}
          <div className="absolute inset-0 text-2xl sm:text-3xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-400">
            {tech.icon}
          </div>
        </div>
        
        {/* Title that fades in on hover */}
        <div className="text-xs font-medium text-foreground/70 text-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          {tech.title}
        </div>
      </a>
    ))}
  </div>
</div>
          </div>
        </main>
      </div>
    </div>
  );
}