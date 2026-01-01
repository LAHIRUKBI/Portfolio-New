'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DotGrid from "../components/layout/Home_Layout/DotGrid_1";
import { FaGithub, FaExternalLinkAlt, FaCode, FaBriefcase, FaMobileAlt, FaDesktop, FaServer, FaDatabase, FaCloud, FaPaintBrush, FaJava, FaFilter, FaCalendarAlt, FaLayerGroup } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiMongodb, SiKotlin, SiFirebase, SiMysql, SiPython, SiVuedotjs, SiNestjs } from 'react-icons/si';
import { FiExternalLink, FiChevronRight, FiFolder, FiClock, FiCheckCircle, FiActivity } from 'react-icons/fi';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const projects = [
    // Personal Projects
    {
      id: 1,
      title: "SmartBIN - Intelligent Waste Management",
      description: "An intelligent waste management system that streamlines garbage collection, optimizes routes, and promotes recycling awareness using real-time data analytics.",
      image: "/images/smartbin.jpg",
      techStack: ["React", "Node.js", "Express.js", "MongoDB"],
      githubLink: "https://github.com/LAHIRUKBI/smartBIN-ITP",
      type: "personal",
      category: "Web Application",
      status: "completed",
      featured: false,
      year: "2023",
      complexity: "Advanced"
    },
    {
      id: 2,
      title: "Online Bookstore - Digital Library",
      description: "A full-fledged e-commerce platform for book lovers featuring seamless browsing, secure payments, and intelligent recommendations.",
      image: "/images/bookstore.jpg",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "Stripe"],
      githubLink: "https://github.com/LAHIRUKBI/Book-Store",
      type: "personal",
      category: "E-commerce",
      status: "completed",
      year: "2023",
      complexity: "Intermediate"
    },
    {
      id: 3,
      title: "Property Hub - Real Estate Platform",
      description: "A modern property management system connecting landlords and tenants with advanced search, virtual tours, and automated management features.",
      image: "/images/property.png",
      techStack: ["Java", "JavaScript", "MySQL", "HTML", "CSS"],
      githubLink: "https://github.com/LAHIRUKBI/Second-Year-Web",
      type: "personal",
      category: "Web Application",
      status: "completed",
      year: "2022",
      complexity: "Intermediate"
    },
    {
      id: 4,
      title: "Mobile Applications Suite",
      description: "A collection of high-performance mobile applications including Get-Note, Medicine Management, and SmartBIN mobile app with offline capabilities.",
      image: "/images/mobile.png",
      techStack: ["Android Studio", "Kotlin", "Firebase", "Room DB"],
      githubLink: "https://github.com/LAHIRUKBI/Mobile-Application-Development-Online-Shopping-App-",
      type: "personal",
      category: "Mobile App",
      status: "completed",
      year: "2023",
      complexity: "Advanced"
    },
    // Company Projects (Octick)
    {
      id: 5,
      title: "CRM Platform",
      description: "Enterprise customer relationship management system with automated workflows, analytics dashboard, and third-party integrations.",
      image: "/images/display.png",
      techStack: ["Next.js", "TypeScript"],
      githubLink: "#",
      type: "company",
      company: "Octick",
      status: "completed",
      featured: false,
      year: "2023",
      role: "Frontend Developer"
    },
    {
      id: 6,
      title: "OCTICK HR UI Redesign",
      description: "Complete UI overhaul for the Octick HR platform. Developed pixel-perfect implementation matching Figma designs.",
      image: "/images/display.png",
      techStack: ["React", "Tailwind CSS"],
      githubLink: "#",
      type: "company",
      company: "Octick",
      status: "completed",
      liveLink: "https://www.octickhr.com/",
      year: "2023",
      role: "Frontend Developer"
    },
    {
      id: 7,
      title: "Hotel Management System",
      description: "Comprehensive hotel management web application with booking, inventory, and customer management features.",
      image: "/images/display.png",
      techStack: ["Next.js", "Node.js"],
      githubLink: "#",
      type: "company",
      company: "Octick",
      status: "completed",
      year: "2023",
      role: "Full Stack Developer"
    },
    {
      id: 8,
      title: "Walakulu Juice E-commerce",
      description: "Full-stack e-commerce platform for a juice shop in Sri Lanka with inventory management and online ordering.",
      image: "/images/display.png",
      techStack: ["Next.js", "Node.js"],
      githubLink: "#",
      type: "company",
      company: "Octick",
      status: "ongoing",
      year: "2024",
      role: "Full Stack Developer"
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'company' 
      ? projects.filter(p => p.type === "company")
      : activeFilter === 'personal'
        ? projects.filter(p => p.type === "personal")
        : projects.filter(p => p.status === "ongoing");

  const filters = [
    { id: 'all', label: 'All Projects', icon: <FaLayerGroup /> },
    { id: 'company', label: 'Professional Work', icon: <FaBriefcase /> },
    { id: 'personal', label: 'Personal Projects', icon: <FaCode /> },
    { id: 'ongoing', label: 'In Progress', icon: <FiActivity /> }
  ];

  // Tech icon mapping
  const techIcons: { [key: string]: React.ReactNode } = {
    "React": <SiReact className="w-4 h-4 text-[#61DAFB]" />,
    "Next.js": <SiNextdotjs className="w-4 h-4 text-black dark:text-white" />,
    "TypeScript": <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
    "Node.js": <SiNodedotjs className="w-4 h-4 text-[#339933]" />,
    "Express.js": <FaCode className="w-4 h-4 text-gray-600 dark:text-gray-400" />,
    "MongoDB": <SiMongodb className="w-4 h-4 text-[#47A248]" />,
    "Java": <FaJava className="w-4 h-4 text-[#007396]" />,
    "Kotlin": <SiKotlin className="w-4 h-4 text-[#7F52FF]" />,
    "Firebase": <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
    "MySQL": <SiMysql className="w-4 h-4 text-[#4479A1]" />,
    "Python": <SiPython className="w-4 h-4 text-[#3776AB]" />,
    "PostgreSQL": <FaDatabase className="w-4 h-4 text-[#336791]" />,
    "AWS": <FaCloud className="w-4 h-4 text-[#FF9900]" />,
    "Stripe": <FaPaintBrush className="w-4 h-4 text-[#635BFF]" />,
    "Redis": <FaDatabase className="w-4 h-4 text-[#DC382D]" />,
    "Vue.js": <SiVuedotjs className="w-4 h-4 text-[#4FC08D]" />,
    "NestJS": <SiNestjs className="w-4 h-4 text-[#E0234E]" />,
    "React Native": <FaMobileAlt className="w-4 h-4 text-[#61DAFB]" />,
    "D3.js": <FaPaintBrush className="w-4 h-4 text-[#F9A03C]" />,
    "FastAPI": <FaServer className="w-4 h-4 text-[#009688]" />,
    "HTML": <FaDesktop className="w-4 h-4 text-[#E34F26]" />,
    "CSS": <FaPaintBrush className="w-4 h-4 text-[#1572B6]" />,
    "JavaScript": <FaCode className="w-4 h-4 text-[#F7DF1E]" />,
    "Android Studio": <FaMobileAlt className="w-4 h-4 text-[#3DDC84]" />,
    "Room DB": <FaDatabase className="w-4 h-4 text-[#4285F4]" />
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background */}
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
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/70 to-background/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
      </div>

      {/* Projects Section */}
      <section className="relative z-10 font-sans pt-24 md:pt-28 pb-16 px-4 sm:px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <FiFolder className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Projects
                </h1>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FaFilter className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Filter by:</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30'
                      : 'bg-white/80 dark:bg-gray-900/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200/50 dark:border-white/10'
                  }`}
                >
                  {filter.icon}
                  <span>{filter.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gradient-to-br from-white to-white/95 dark:from-gray-900 dark:to-gray-900/95 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-200/50 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.01]"
              >
                {/* Badges */}
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                  {project.type === 'company' && (
                    <div className="flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                      <FaBriefcase className="w-3 h-3" />
                      <span>{project.company}</span>
                    </div>
                  )}
                  {project.featured && (
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                <div className="absolute top-4 left-4 z-10">
                  <div className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1 ${
                    project.status === 'ongoing' 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                  }`}>
                    {project.status === 'ongoing' ? (
                      <>
                        <FiClock className="w-3 h-3" />
                        <span>In Progress</span>
                      </>
                    ) : (
                      <>
                        <FiCheckCircle className="w-3 h-3" />
                        <span>Completed</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative h-48 md:h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 z-0" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <FaCalendarAlt className="w-3 h-3" />
                          {project.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 leading-tight line-clamp-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed text-sm line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {project.techStack.slice(0, 4).map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium border border-gray-200/50 dark:border-white/10 hover:scale-105 transition-transform"
                        title={tech}
                      >
                        {techIcons[tech] || <FaCode className="w-3 h-3" />}
                        <span className="truncate max-w-[80px]">{tech}</span>
                      </div>
                    ))}
                    {project.techStack.length > 4 && (
                      <div className="px-2 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg text-xs">
                        +{project.techStack.length - 4}
                      </div>
                    )}
                  </div>

                  {/* Project Metadata */}
                  {project.role && (
                    <div className="mb-4">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Role:</span>
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{project.role}</span>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 font-medium text-sm group/live hover:shadow-lg hover:shadow-blue-500/30"
                      >
                        <FaExternalLinkAlt className="w-3 h-3 group-hover/live:rotate-12 transition-transform" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubLink !== "#" ? (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 font-medium text-sm group/github hover:shadow-lg"
                      >
                        <FaGithub className="w-4 h-4" />
                        <span>Code</span>
                        <FiChevronRight className="w-3 h-3 group-hover/github:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <div className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg text-sm cursor-not-allowed">
                        <FaGithub className="w-4 h-4" />
                        <span>Private Repo</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 md:mt-20">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 border border-purple-500/20">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
              <div className="relative backdrop-blur-sm p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                        <FaCode className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        Let's Build Together
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
                      Have an exciting project in mind? I'm always open to discussing new opportunities and collaborations.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="/contact" 
                      className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30"
                    >
                      Start a Conversation
                      <FiExternalLink className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        
        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
        
        @media (max-width: 640px) {
          a, button {
            min-height: 44px;
          }
          
          * {
            -webkit-overflow-scrolling: touch;
          }
        }
        
        @supports (-webkit-touch-callout: none) {
          .min-h-screen {
            min-height: -webkit-fill-available;
          }
        }
      `}</style>
    </div>
  );
}