'use client';
import React from 'react';
import Image from 'next/image';
import DotGrid from "../components/layout/DotGridBackground";

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
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/60 to-background/80" />
      </div>

      {/* Education Section */}
      <section className="relative z-10 font-sans pt-20 pb-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Education & Qualifications
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My academic journey and professional certifications
            </p>
          </div>

          {/* Main Education */}
          <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-foreground/10 hover:border-foreground/20 transition-all duration-300">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Logo Section */}
              <div className="flex-shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
                  <div className="relative w-40 h-40 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 p-3">
                    <Image
                      src="/images/SLIIT_LOGO.png"
                      alt="SLIIT Logo"
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-xl font-bold text-foreground mb-2">
                  BSc (Hons) in Information Technology
                </h2>
                <p className="text-primary mb-4 font-medium">Specializing in Information Technology</p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Sri Lanka Institute of Information Technology (SLIIT)</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Expected Graduation: </span>
                      <span className="bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                        2027
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Certifications Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Skills Section */}
            <div>
              <div className="text-center lg:text-left mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Technical Skills</h2>
                <p className="text-muted-foreground">Technologies I work with</p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Frontend Development",
                    skills: "React, Next.js, TypeScript, Tailwind CSS, HTML/CSS"
                  },
                  {
                    title: "Backend Development", 
                    skills: "Node.js, Python, PHP, REST APIs"
                  },
                  {
                    title: "Databases",
                    skills: "MySQL, MongoDB, Firebase"
                  },
                  {
                    title: "Mobile & Tools",
                    skills: "React Native, Git, Docker, AWS, Figma"
                  }
                ].map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-background/50 backdrop-blur-sm rounded-xl p-5 border border-foreground/10 hover:border-foreground/20 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <h3 className="font-semibold text-foreground mb-3">{skill.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{skill.skills}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <div className="text-center lg:text-left mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Certifications</h2>
                <p className="text-muted-foreground">Industry-recognized qualifications</p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "JavaScript Essentials 1",
                    institution: "Cisco Networking Academy"
                  },
                  {
                    title: "Networking Basics", 
                    institution: "Cisco Certified Network Associate (CCNA)"
                  },
                  {
                    title: "Computer Hardware Basics",
                    institution: "Cisco Networking Academy" 
                  },
                  {
                    title: "Web Design for Beginners",
                    institution: "University Of Moratuwa",
                    verification: "4uCeJKPGFG"
                  }
                ].map((cert, index) => (
                  <div 
                    key={index}
                    className="bg-background/50 backdrop-blur-sm rounded-xl p-5 border border-foreground/10 hover:border-foreground/20 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">{cert.title}</h3>
                        <p className="text-muted-foreground text-sm mb-2">{cert.institution}</p>
                        {cert.verification && (
                          <p className="text-xs text-muted-foreground">
                            Verification ID: <code className="bg-foreground/5 px-2 py-1 rounded">{cert.verification}</code>
                          </p>
                        )}
                      </div>
                      <span className="bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap h-fit">
                        Certified
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}