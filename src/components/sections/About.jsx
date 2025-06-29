import React from 'react';
import { 
  Code2, 
  Brain, 
  Cloud, 
  Sparkles, 
  Users, 
  Target, 
  Coffee,
  MapPin,
  Calendar,
  Trophy,
  Zap,
  Heart
} from 'lucide-react';

// Mock RevealOnScroll component for demo
const RevealOnScroll = ({ children }) => {
  return <div className="animate-fade-in">{children}</div>;
};

export const About = () => {
  const highlights = [
    { icon: Code2, text: "Full Stack Engineer", color: "from-blue-500 to-cyan-500" },
    { icon: Brain, text: "AI/ML Developer", color: "from-purple-500 to-pink-500" },
    { icon: Cloud, text: "Cloud Architect", color: "from-green-500 to-emerald-500" },
    { icon: Sparkles, text: "GenAI Specialist", color: "from-orange-500 to-red-500" }
  ];

  const stats = [
    { icon: Calendar, label: "Experience", value: "3+ Years", color: "text-blue-600" },
    { icon: Trophy, label: "Projects", value: "10+ Apps", color: "text-purple-600" },
    { icon: Users, label: "Client Projects", value: "4", color: "text-green-600" },
    { icon: Target, label: "Certifications", value: "4", color: "text-orange-600" }
  ];

  const passions = [
    { icon: Brain, text: "Building Intelligent Systems" },
    { icon: Zap, text: "Enhancing User Experiences" },
    { icon: Target, text: "Driving Operational Efficiency" },
    { icon: Heart, text: "Solving Complex Problems" }
  ];

  return (
    <section id='about' className='pt-20 pb-32 scroll-mt-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-indigo-200 to-pink-200 rounded-full blur-3xl opacity-20"></div>
      
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-blue-100 mb-6">
              <Coffee className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Get to know me</span>
            </div>
            
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <div className="flex items-center justify-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="font-medium">Bloomington, Indiana</span>
              </div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-500" />
                <span className="font-medium">MS Computer Science Student</span>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Main Story Card */}
            <div className="lg:col-span-2">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">My Journey</span>
                  </div>
                  
                  <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                    <p className="text-xl font-medium text-gray-800 mb-4">
                      🚀 Passionate Full Stack Engineer & AI/ML Developer transforming ideas into intelligent solutions
                    </p>
                    
                    <p>
                      Currently pursuing my <span className="font-semibold text-blue-600">Master's in Computer Science at Indiana University Bloomington</span>, 
                      I bring over <span className="font-semibold text-purple-600">3 years of professional experience from Accenture</span> where I've 
                      successfully engineered scalable microservices architectures and integrated cutting-edge AI technologies.
                    </p>
                    
                    <p>
                      My expertise spans <span className="font-semibold text-indigo-600">cloud computing, machine learning, and full-stack development</span>, 
                      with a particular focus on Spring Boot microservices and leveraging Large Language Models to solve complex business problems.
                    </p>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                      <div className="flex items-center gap-2 mb-3">
                        <Heart className="w-5 h-5 text-red-500" />
                        <span className="font-semibold text-gray-800">What Drives Me</span>
                      </div>
                      <p className="text-gray-700">
                        I'm passionate about building intelligent systems that enhance user experiences and drive operational efficiency, 
                        creating solutions that make a real difference in people's lives and business outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats & Highlights Sidebar */}
            <div className="space-y-6">
              {/* Key Highlights */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                  Expertise
                </h3>
                <div className="space-y-3">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-gray-100 hover:border-blue-200 transition-colors group">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Stats */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Impact
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-3 rounded-xl bg-white/50 border border-gray-100 hover:shadow-lg transition-shadow">
                      <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                      <div className="text-lg font-bold text-gray-800">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Passion Points */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">What I'm Passionate About</h3>
              <p className="text-gray-600">The driving forces behind my work and innovation</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {passions.map((passion, index) => (
                <div key={index} className="group text-center p-6 rounded-2xl bg-white/50 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <passion.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {passion.text}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
              <span className="font-semibold">Let's Build Something Amazing Together</span>
              </a>
              <Zap className="w-5 h-5" />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};