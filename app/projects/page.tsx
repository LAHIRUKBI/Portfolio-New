'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DotGrid from "../components/layout/DotGridBackground";

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
      <section className="relative z-10 font-sans pt-24 pb-16 px-4 sm:px-6 min-h-screen">
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
                className="bg-background/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-foreground/10 hover:border-foreground/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
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
                    className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all duration-300 hover:scale-105 font-medium text-sm"
                  >
                    <span>🔗 View on GitHub</span>
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