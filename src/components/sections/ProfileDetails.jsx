import React from "react";
import { Building2, FlaskConical, BarChart3, GraduationCap, BookOpen, Calendar, MapPin, Star } from 'lucide-react';

// Mock RevealOnScroll component for demo
const RevealOnScroll = ({ children }) => {
  return <div className="animate-fade-in">{children}</div>;
};

export const ProfileDetails = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Experience Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-blue-100 mb-6">
              <Building2 className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Professional Journey</span>
            </div>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transforming ideas into impactful solutions through innovation and expertise
            </p>
          </div>

          <div className="space-y-8 mb-20">
            {/* Current Position */}
            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:border-blue-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex items-start gap-6 relative z-10">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <FlaskConical className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Current
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    Graduate Research Assistant
                  </h3>
                  
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">April 2025 - Present</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Indiana University</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Developing a cloud-based analytics pipeline to track Food Nutrition Engagement for Snacks and Satiety study. 
                    <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-sm ml-2">
                      <Star className="w-3 h-3" />
                      25% improvement in participation
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Accenture Position */}
            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:border-blue-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex items-start gap-6 relative z-10">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <BarChart3 className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                    Full Stack Engineering Analyst
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Accenture, India
                    </span>
                  </div>
                  
                  <div className="grid gap-4">
                    {[
                      {
                        text: "Led enterprise-scale software engineering initiatives serving 10,000+ users with $15M revenue impact. Architected robust microservices using Java Spring Boot and optimized AWS cloud infrastructure.",
                        metric: "35% reliability improvement"
                      },
                      {
                        text: "Spearheaded DevOps automation reducing deployment time across 8+ environments and troubleshooting time through custom Kibana dashboards.",
                        metric: "32% faster deployment, 40% less troubleshooting"
                      },
                      {
                        text: "Pioneered GenAI integration with SAP S/4 HANA, implementing LLM-powered Text-to-SQL capabilities that accelerated risk analysis. Automated technical documentation generation.",
                        metric: "59% faster analysis, 300+ hours saved annually"
                      },
                      {
                        text: "Delivered 2 major releases with optimized data models improving query response times.",
                        metric: "45% faster queries"
                      }
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-white/50 rounded-xl border border-gray-100 hover:border-purple-200 transition-colors">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-3 flex-shrink-0"></div>
                        <div className="flex-1">
                          <p className="text-gray-700 leading-relaxed mb-2">{achievement.text}</p>
                          <span className="inline-flex items-center gap-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                            <Star className="w-3 h-3" />
                            {achievement.metric}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-indigo-100 mb-6">
              <GraduationCap className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-700">Academic Excellence</span>
            </div>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building a strong foundation through continuous learning and academic achievement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Master's Degree */}
            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:border-indigo-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center gap-1 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                        In Progress
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">
                      M.S. in Computer Science
                    </h3>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-lg font-semibold text-gray-800 mb-2">Indiana University Bloomington</p>
                  <div className="flex items-center gap-4 text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Aug 2024 - May 2026
                    </span>
                    <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      <Star className="w-3 h-3" />
                      GPA: 3.67/4.0
                    </span>
                  </div>
                </div>
                
                <div className="bg-white/50 rounded-xl p-4 border border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Applied Algorithms", "Advanced ML", "Software Engineering", 
                      "Advanced Database", "Large Language Models", "Cloud Computing",
                      "Computer Networks", "Big Data Engineering", "Virtual Reality"
                    ].map((course, index) => (
                      <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bachelor's Degree */}
            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:border-purple-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
                      <Star className="w-3 h-3" />
                      Completed
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                      B.E. in Computer Science
                    </h3>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-lg font-semibold text-gray-800 mb-2">BNM Institute of Technology</p>
                  <div className="flex items-center gap-4 text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Aug 2017 - Aug 2021
                    </span>
                    <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                      <Star className="w-3 h-3" />
                      GPA: 3.98/4.0
                    </span>
                  </div>
                </div>
                
                <div className="bg-white/50 rounded-xl p-4 border border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-3">Core Curriculum</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures", "Algorithms", "OOP", "Operating Systems",
                      "Database Systems", "Web Technologies", "ML", "AI",
                      "Computer Vision", "Cryptography", "Software Engineering"
                    ].map((course, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};