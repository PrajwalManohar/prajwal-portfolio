import React from "react";
import { Building2, FlaskConical, BarChart3, GraduationCap, BookOpen, Calendar, MapPin, Star, Code, Database, Cloud, Cpu, Zap, Settings, GitBranch, Shield, Network } from 'lucide-react';
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
                <span className="text-sm">Indiana University School of Public Health</span>
              </div>
            </div>
            
            <div className="grid gap-4">
              {[
                {
                  text: "Currently developing cloud-based data analytics pipeline using Python and Azure services for Food Nutrition Engagement study. Initial prototype shows promising results in tracking student participation patterns across diverse demographic groups.",
                  metric: "Early 25% improvement in participation tracking",
                  icon: <Cloud className="w-4 h-4" />
                },
                {
                  text: "Designing and implementing real-time streaming analytics architecture using Apache Kafka and Apache Flink to monitor student engagement patterns. Working on predictive models using TensorFlow and scikit-learn for behavioral analysis.",
                  metric: "In development - targeting 25% prediction accuracy improvement",
                  icon: <Zap className="w-4 h-4" />
                },
                {
                  text: "Researching and prototyping machine learning algorithms for behavioral pattern analysis across diverse demographic groups. Exploring integration with OpenAI GPT-4 for advanced demographic segmentation insights.",
                  metric: "Research phase - ML model optimization ongoing",
                  icon: <Cpu className="w-4 h-4" />
                },
                {
                  text: "Building interactive data visualization dashboards and establishing REST API integrations for stakeholder reporting. Focus on creating comprehensive analytics for public health decision-making.",
                  metric: "Dashboard development in progress",
                  icon: <BarChart3 className="w-4 h-4" />
                }
              ].map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white/50 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed mb-2">{achievement.text}</p>
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
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
            
            <div className="flex items-center gap-4 text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">September 2021 - July 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Accenture, Bengaluru, India</span>
              </div>
            </div>
            
            <div className="grid gap-4">
              {[
                {
                  text: "Architected 15+ enterprise-grade microservices using Java Spring Boot 2.7+, Spring Cloud Gateway, Spring Data JPA, and Spring Security with OAuth2/JWT authentication, implementing Circuit Breaker pattern with Hystrix and service discovery using Eureka Server, serving 10,000+ concurrent users with 99.9% uptime.",
                  metric: "$15M revenue impact, 35% reliability improvement",
                  icon: <Code className="w-4 h-4" />
                },
                {
                  text: "Implemented comprehensive DevOps pipeline using Jenkins, Docker, Kubernetes, and Terraform for infrastructure as code, with custom Kibana dashboards using Elasticsearch and Logstash (ELK Stack) for monitoring and observability.",
                  metric: "32% faster deployment, 40% less troubleshooting time",
                  icon: <GitBranch className="w-4 h-4" />
                },
                {
                  text: "Architected and optimized SAP S/4 HANA data models with PostgreSQL and MySQL integration, enabling real-time analytics for 28+ production applications across multiple regions with advanced query optimization.",
                  metric: "45% faster query response time",
                  icon: <Database className="w-4 h-4" />
                },
                {
                  text: "Integrated SAP GenAI Hub with OpenAI GPT-4 Turbo, Claude-3, and Google Gemini models using LangChain framework, implementing Retrieval-Augmented Generation (RAG) architecture with FAISS vector embeddings for automated Text-to-SQL query generation.",
                  metric: "59% faster risk analysis, 1000+ queries daily with 94% accuracy",
                  icon: <Cpu className="w-4 h-4" />
                },
                {
                  text: "Developed comprehensive GenAI-powered documentation system using Python FastAPI, LangChain Agents, and OpenAI API with fine-tuned models, implementing semantic search with ChromaDB vector database and automated code review using GitHub Copilot integration.",
                  metric: "300+ hours saved annually, 48% reduction in manual effort",
                  icon: <Settings className="w-4 h-4" />
                },
                {
                  text: "Built 20+ RESTful APIs using Spring Boot WebFlux for reactive programming, implemented GraphQL endpoints with Spring GraphQL, designed event-driven architecture using Apache Kafka for asynchronous messaging between microservices.",
                  metric: "250ms average API response time, 99.8% success rate",
                  icon: <Network className="w-4 h-4" />
                },
                {
                  text: "Implemented MLOps pipeline for Large Language Model deployment using Docker containers, Kubernetes orchestration, and Azure OpenAI Service, with model versioning through MLflow and real-time monitoring using Weights & Biases.",
                  metric: "99.5% model availability, 200ms response time",
                  icon: <Shield className="w-4 h-4" />
                }
              ].map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white/50 rounded-xl border border-gray-100 hover:border-purple-200 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {achievement.icon}
                  </div>
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