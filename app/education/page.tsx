import React from 'react';
import Image from 'next/image';

export default function Education() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20">
      {/* Education Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Education
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here are my educational qualifications and certifications that have shaped my journey in technology.
            </p>
          </div>

          {/* Main Education Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-16 transform hover:scale-[1.02] transition-all duration-500">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">SLIIT</span>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  BSc (Hons) in Information Technology Specializing in Information Technology
                </h2>
                <div className="space-y-3">
                  <p className="text-gray-600 flex items-center justify-center lg:justify-start gap-2">
                    <strong className="text-gray-800">Institution:</strong> 
                    SLIIT | Sri Lanka Institute of Information Technology
                  </p>
                  <p className="text-gray-600 flex items-center justify-center lg:justify-start gap-2">
                    <strong className="text-gray-800">Expected Graduation:</strong> 
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      2027
                    </span>
                  </p>
                  <p className="text-gray-600 flex items-center justify-center lg:justify-start gap-2">
                    <strong className="text-gray-800">Status:</strong> 
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      In Progress
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Skills
            </h1>
            <p className="text-xl text-gray-600">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Programming Languages",
                skills: "Java | C | C++ | Python",
                icon: "💻",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Web Development",
                skills: "React JS | Node JS | HTML/CSS | JavaScript | PHP | Tailwind",
                icon: "🌐",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Databases",
                skills: "MySQL | MongoDB",
                icon: "🗄️",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "Android App Development",
                skills: "Kotlin",
                icon: "📱",
                gradient: "from-green-400 to-blue-500"
              },
              {
                title: "Design Technologies",
                skills: "Adobe Photoshop | Adobe Illustrator | Figma",
                icon: "🎨",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((skill, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${skill.gradient} rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {skill.skills}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Qualifications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Professional Qualifications
            </h1>
            <p className="text-xl text-gray-600">
              Certifications and courses that enhance my expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "JavaScript Essentials 1",
                institution: "Cisco Certified Network Associate (CCNA)",
                logo: "/images/javascript-essentials-1.png",
                verification: null,
                icon: "📜"
              },
              {
                title: "Networking Basics",
                institution: "Cisco Certified Network Associate (CCNA)",
                logo: "/images/Networking Basics Badge.png",
                verification: null,
                icon: "🌐"
              },
              {
                title: "Computer Hardware Basics",
                institution: "Cisco Certified Network Associate (CCNA)",
                logo: "/images/compute hardware basics.png",
                verification: null,
                icon: "💻"
              },
              {
                title: "Certificate course of Web Design for beginners",
                institution: "University Of Moratuwa (Faculty of information technology)",
                logo: "/images/University_of_Moratuwa_logo.png",
                verification: "4uCeJKPGFG",
                icon: "🎓"
              }
            ].map((qualification, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-100"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl">{qualification.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {qualification.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      <strong className="text-gray-800">Institution:</strong> {qualification.institution}
                    </p>
                    {qualification.verification && (
                      <p className="text-gray-600">
                        <strong className="text-gray-800">Verification ID:</strong> 
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-sm ml-2 font-mono">
                          {qualification.verification}
                        </span>
                      </p>
                    )}
                    <div className="mt-4">
                      <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Certified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section (Bonus) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Learning Journey
            </h2>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
            
            {/* Timeline items */}
            {[
              { year: "2023", title: "Started BSc in IT", description: "Began undergraduate studies at SLIIT" },
              { year: "2024", title: "Web Development Focus", description: "Mastered React, Node.js, and modern web technologies" },
              { year: "2025", title: "Professional Certifications", description: "Completed Cisco and specialized courses" },
              { year: "2027", title: "Expected Graduation", description: "BSc (Hons) in Information Technology" }
            ].map((item, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 pr-8 pl-8">
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                    <div className="text-sm font-semibold text-blue-600 mb-2">{item.year}</div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8 pr-8"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}