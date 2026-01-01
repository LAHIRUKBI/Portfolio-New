'use client';
import React from 'react';
import Image from 'next/image';
import DotGrid from "../components/layout/Home_Layout/DotGrid_1";
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaCertificate, FaBookOpen, FaDesktop, FaServer, FaDatabase, FaMobileAlt, FaAward } from 'react-icons/fa';
import { FiChevronRight, FiExternalLink } from 'react-icons/fi';

export default function Education() {
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
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-purple-900/5 to-background/90" />
      </div>

      {/* Education Section */}
      <section className="relative z-10 font-sans pt-24 md:pt-28 pb-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-foreground">
                Education & Qualifications
              </h1>
            </div>
          </div>

          {/* Main Education Card */}
          <div className="relative group mb-12 md:mb-16">
            <div className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 border border-gray-200/50 dark:border-white/10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
              <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10">
                {/* Logo Section */}
                <div className="flex-shrink-0 relative">
                  <div className="relative w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50 dark:border-white/10 shadow-lg">
                    <Image
                      src="/images/SLIIT_LOGO.png"
                      alt="SLIIT Logo"
                      fill
                      className="object-contain p-3"
                      sizes="(max-width: 360px) 96px, (max-width: 480px) 112px, (max-width: 640px) 128px, (max-width: 768px) 160px, 256px"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                    <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-foreground">
                      BSc (Hons) in Information Technology
                    </h2>
                  </div>
                  <p className="text-purple-600 dark:text-purple-400 text-base sm:text-lg font-medium mb-6">
                    Specialized in Information Technology
                  </p>

                  <div className="space-y-3 md:space-y-4">
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                          <span className="font-semibold">Sri Lanka Institute of Information Technology (SLIIT)</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="w-4 h-4 text-green-500" />
                        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                          <span className="font-semibold">Expected Graduation: </span>
                          <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-full text-sm font-medium ml-2">
                            2027
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Certifications Grid */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">

            {/* Skills Section */}
            <div>
              <div className="text-center lg:text-left mb-6 md:mb-8">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex items-center justify-center">
                    <FaDesktop className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Technical Skills</h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto lg:mx-0">
                  Technologies and frameworks I work with regularly
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Frontend Development",
                    skills: "React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3",
                    icon: <FaDesktop className="w-5 h-5 text-blue-500" />
                  },
                  {
                    title: "Backend Development",
                    skills: "Node.js, Python, PHP, REST APIs, Express.js, FastAPI",
                    icon: <FaServer className="w-5 h-5 text-green-500" />
                  },
                  {
                    title: "Databases & Storage",
                    skills: "MySQL, MongoDB, Firebase, PostgreSQL, Redis",
                    icon: <FaDatabase className="w-5 h-5 text-purple-500" />
                  },
                  {
                    title: "Mobile & Tools",
                    skills: "React Native, Git, Docker, AWS, Figma, CI/CD",
                    icon: <FaMobileAlt className="w-5 h-5 text-pink-500" />
                  }
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="group bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-xl p-5 border border-gray-200/50 dark:border-white/10 hover:border-purple-300/50 dark:hover:border-purple-400/30 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground text-lg mb-2">{skill.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">{skill.skills}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <div className="text-center lg:text-left mb-6 md:mb-8">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 flex items-center justify-center">
                    <FaCertificate className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Certifications</h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto lg:mx-0">
                  Industry-recognized qualifications and achievements
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "JavaScript Essentials 1",
                    institution: "Cisco Networking Academy",
                    year: "2023",
                    icon: <FaCertificate className="w-5 h-5" />
                  },
                  {
                    title: "Networking Basics",
                    institution: "Cisco Certified Network Associate (CCNA)",
                    year: "2023",
                    icon: <FaAward className="w-5 h-5" />
                  },
                  {
                    title: "Computer Hardware Basics",
                    institution: "Cisco Networking Academy",
                    year: "2022",
                    icon: <FaBookOpen className="w-5 h-5" />
                  },
                  {
                    title: "Web Design for Beginners",
                    institution: "University Of Moratuwa",
                    year: "2021",
                    icon: <FaGraduationCap className="w-5 h-5" />,
                    verification: "4uCeJKPGFG"
                  }
                ].map((cert, index) => (
                  <div
                    key={index}
                    className="group bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-xl p-5 border border-gray-200/50 dark:border-white/10 hover:border-green-300/50 dark:hover:border-green-400/30 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {cert.icon}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground text-lg mb-2">{cert.title}</h3>
                            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <span>{cert.institution}</span>
                              <span className="text-xs opacity-70">•</span>
                              <span>{cert.year}</span>
                            </div>
                          </div>

                          <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap h-fit flex items-center gap-2">
                            Certified
                            <FiChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>

                        {cert.verification && (
                          <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-white/10">
                            <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2">
                              <span className="text-xs text-gray-500 dark:text-gray-500">Verification ID:</span>
                              <code className="bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg text-xs font-mono text-gray-700 dark:text-gray-300 break-all">
                                {cert.verification}
                              </code>
                              <button className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
                                <FiExternalLink className="w-3 h-3" />
                                Verify
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 md:mt-10">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 backdrop-blur-sm rounded-xl p-5 border border-purple-100/50 dark:border-purple-400/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center">
                      <FaBookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="font-semibold text-foreground">Continuous Learning</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Actively pursuing additional certifications in Cloud Computing and Advanced Web Development
                    to stay current with evolving industry standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-12 md:mt-16 text-center">
            <div className="inline-flex items-center gap-3 text-sm text-gray-500 dark:text-gray-500">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <p>Always learning and growing • Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-specific optimizations */}
      <style jsx global>{`
        /* Better touch targets for mobile */
        @media (max-width: 640px) {
          a, button {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Improve scrolling on iOS */
          * {
            -webkit-overflow-scrolling: touch;
          }
        }
        
        /* iOS specific optimizations */
        @supports (-webkit-touch-callout: none) {
          .min-h-screen {
            min-height: -webkit-fill-available;
          }
        }
      `}</style>
    </div>
  );
}