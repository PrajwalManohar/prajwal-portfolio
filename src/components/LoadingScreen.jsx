import React, { useEffect, useState } from 'react'

export const LoadingScreen = ({onComplete}) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const fullText = "<Hello />";

  useEffect(() => {
    // Animate content appearance
    setTimeout(() => setShowContent(true), 300);
    
    // Typewriter effect
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1200);
      }
    }, 120);

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1.5;
      });
    }, 60);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/40 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/6 w-24 h-24 bg-blue-200/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/5 w-32 h-32 bg-purple-200/15 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-1/3 left-2/3 w-20 h-20 bg-red-200/20 rounded-full blur-lg animate-float-slow"></div>
        
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
        
        {/* Light overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/10"></div>
      </div>

      {/* Main content */}
      <div className={`relative z-10 flex flex-col items-center justify-center min-h-screen transition-all duration-1000 ${
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        
        {/* Header section matching portfolio style */}
        <div className="mb-8 text-center">
          <div className="text-2xl font-bold text-gray-700 mb-6 tracking-wide">
            <span className="text-blue-600">prajwal</span> <span className="text-gray-600">manohar</span>
          </div>
        </div>

        {/* Main greeting with portfolio colors */}
        <div className="mb-12 text-center">
          <div className="relative">
            <div className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-clip-text text-transparent">
                {text}
              </span>
              <span className="inline-block w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 animate-pulse ml-2 align-top"></span>
            </div>
          </div>
          
          <div className="text-gray-600 text-lg font-light mt-6 max-w-md mx-auto leading-relaxed">
            Welcome to my portfolio
            <div className="text-sm text-gray-500 mt-2">Loading amazing experiences...</div>
          </div>
        </div>

        {/* Skills badges matching portfolio */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-md">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full border border-blue-200">
            💻 Software Engineer
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full border border-purple-200">
            🎨 Generational Developer
          </span>
          <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full border border-red-200">
            🤖 AI Enthusiast
          </span>
        </div>

        {/* Progress section */}
        <div className="w-full max-w-sm px-8">
          {/* Progress bar */}
          <div className="relative mb-4">
            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full transition-all duration-500 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                {/* Subtle glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 blur-sm opacity-50"></div>
              </div>
            </div>
          </div>

          {/* Progress text */}
          <div className="flex justify-between items-center text-xs text-gray-500 mb-8">
            <span>Initializing portfolio</span>
            <span className="font-mono font-medium">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Loading animation */}
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-200"></div>
          </div>
          <span className="text-gray-500 text-sm ml-3">Getting things ready</span>
        </div>
      </div>

      {/* Custom styles matching portfolio aesthetic */}
      <style jsx>{`
        .bg-dot-pattern {
          background-image: radial-gradient(circle, rgba(59, 130, 246, 0.15) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite 2s;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite 1s;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};