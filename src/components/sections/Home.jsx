import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import profileImg from '../../assets/me.jpg';

export const Home = () => {
  return (
    <>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-rose-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
      </div>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative px-6 py-20"
      >
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl w-full gap-12">
            
            {/* Profile Image Section */}
            <div className="mb-8 md:mb-0 md:mr-12">
              <img
                src={profileImg}
                alt="Prajwal Manohar"
                className="w-100 h-100 md:w-200 md:h-130 object-cover rounded-full shadow-lg border-4 border-white"
              />
            </div>

            {/* Text Section */}
            <div className="text-center md:text-left max-w-2xl">
              {/* Main heading with enhanced gradient */}
              <div className="relative mb-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600 bg-clip-text text-transparent animate-gradient bg-300% relative">
                    Hi! I am
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-rose-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-gradient bg-300% delay-500">
                    Prajwal Manohar
                  </span>
                </h1>
                
                {/* Animated underline */}
                <div className="absolute -bottom-2 left-0 md:left-0 right-0 md:right-auto">
                  <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left mx-auto md:mx-0 w-32"></div>
                </div>
              </div>

              {/* Role tags */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                <span className="px-4 py-2 bg-blue-500/10 text-blue-700 rounded-full text-sm font-semibold border border-blue-200/50 backdrop-blur-sm">
                  💻 Software Engineer
                </span>
                <span className="px-4 py-2 bg-purple-500/10 text-purple-700 rounded-full text-sm font-semibold border border-purple-200/50 backdrop-blur-sm">
                  ☁️ GenerativeAI Developer
                </span>
                <span className="px-4 py-2 bg-rose-500/10 text-rose-700 rounded-full text-sm font-semibold border border-rose-200/50 backdrop-blur-sm">
                  🤖 AI Enthusiast
                </span>
              </div>

              {/* Description with better typography */}
              <div className="space-y-4 text-gray-700 mb-10 text-lg leading-relaxed">
                <p className="font-medium text-xl text-gray-800">
                  Graduate student in Computer Science at Indiana University Bloomington and former Full Stack Engineering Analyst at Accenture.
                </p>
                
                <p>
                  With <span className="font-semibold text-blue-600">3 years of hands-on experience</span> building scalable, cloud-native applications, I specialize in creating AI-driven solutions that deliver real-world value.
                </p>
                
                <p className="text-gray-600">
                  Let's create impactful technology together. Reach out if you'd like to learn more!
                </p>
              </div>

              {/* Enhanced CTA buttons */}
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <a
                  href="https://drive.google.com/file/d/1KU7XkVNnnsIflUvBKvCjTcUQ3Nh89w3W/view?usp=sharing"
                  className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    📄 View Resume
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                
                <a
                  href="#contact"
                  className="group relative overflow-hidden px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-xl font-semibold text-lg border-2 border-gray-200/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white hover:border-blue-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    💬 Contact Me
                  </span>
                </a>
              </div>

              {/* Social proof or stats */}
              <div className="mt-12 pt-8 border-t border-gray-200/50">
                <div className="flex flex-wrap justify-center md:justify-start gap-8 text-center md:text-left">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">3+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">20+</div>
                    <div className="text-sm text-gray-600">Projects Built</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-rose-600">∞</div>
                    <div className="text-sm text-gray-600">Learning Never Stops</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gray-400/50 flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .bg-300\% {
          background-size: 300% 300%;
        }
      `}</style>
    </>
  );
};