'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DotGrid from "../components/layout/Home_Layout/DotGrid_1";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "♻️ SmartBIN - Online-Powered Waste Management",
      description: "An intelligent waste management system that streamlines garbage collection, optimizes routes, and promotes recycling awareness.",
      image: "/images/smartbin.jpg",
      techStack: ["React", "Node.js", "Express.js", "MongoDB"],
      githubLink: "https://github.com/LAHIRUKBI/smartBIN-ITP"
    },
    {
      id: 2,
      title: "📚 Online Bookstore - Your Digital Library",
      description: "A full-fledged e-commerce platform designed for book lovers, featuring seamless browsing, ordering, and inventory management.",
      image: "/images/bookstore.jpg",
      techStack: ["React", "Node.js", "Express.js", "MongoDB"],
      githubLink: "https://github.com/LAHIRUKBI/Book-Store"
    },
    {
      id: 3,
      title: "🏡 Property Hub - Smart Real Estate Management",
      description: "A modern property management system that helps landlords and tenants connect with ease, using advanced search and automation.",
      image: "/images/property.png",
      techStack: ["Java", "JavaScript", "MySQL", "HTML", "CSS"],
      githubLink: "https://github.com/LAHIRUKBI/Second-Year-Web"
    },
    {
      id: 4,
      title: "📱 Mobile Apps",
      description: "Designed and developed high-performance mobile applications including Get-Note, Medicine Management, and SmartBIN mobile app.",
      image: "/images/mobile.png",
      techStack: ["Android Studio", "Kotlin", "Firebase"],
      githubLink: "https://github.com/LAHIRUKBI/Mobile-Application-Development-Online-Shopping-App-"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with DotGrid */}
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
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/60 to-background/80" />
      </div>

      {/* Projects Section */}
      <section className="relative z-10 font-sans pt-30 pb-16 px-4 sm:px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              My Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my passion for coding and innovation.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {projects.map((project) => (
    <div 
      key={project.id}
      className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-500 hover:shadow-lg"
    >
      {/* Project Image */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-3 leading-tight">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white/10 text-foreground/80 rounded-lg text-xs font-medium border border-white/10 hover:bg-white/15 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub Link */}
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all duration-300 font-medium text-sm w-full justify-center"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>View on GitHub</span>
        </a>
      </div>
    </div>
  ))}
</div>



          
        </div>
      </section>
    </div>
  );
}