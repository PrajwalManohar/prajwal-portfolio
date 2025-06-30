import React, { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

// import hermespass from '../../assets/hermespass.png';
// import dashboard from '../../assets/dashboard.png';

import project from '../../assets/project.png';
import chest from '../../assets/chest.jpg';
import object from '../../assets/obj.jpg';
import plate from '../../assets/plate.jpg';




const projects = [
  {
    "title": "Speech Activated Object Detection with Visual Recognition",
    "image": object,
    "description": "AI-powered assistive tool for the visually impaired using MobileNet SSD and CNNs. Features real-time object detection with voice commands and audio feedback to help users navigate their environment safely and independently.",
    "techStack": ["React", "Express", "Node", "TensorFlow", "MobileNet SSD", "Web Speech API"],
    "link": "",
    "source": "",
    "category": "AI/ML",
    "featured": true
  },
  {
    title: 'Chest X-Ray Medical Diagnosis with Deep Learning',
    image: chest,
    link: '',
    description:
      'Developed a multi-label chest X-ray classifier using DenseNet on the ChestX-ray8 dataset to enhance thorax disease diagnosis.',
    techStack: ["React", "Express", "Node", "Sass"],
    category: 'AI/ML',
    featured: false
  },

  {
    title: 'Automatic Number Plate Detection using TFOD',
    image: plate,
    link: '#',
    description:
      'Cleaned and transformed large-scale COVID-19 datasets in Excel and developed an interactive Power BI dashboard to visualize infection trends across demographics and support public health decisions.',
    techStack: ['Microsoft Excel', 'Power BI'],
    category: 'Data Analytics'
  },
  // {
  //   title: 'Flipbook Library',
  //   image: flipbook,
  //   link: '#',
  //   description:
  //     'License Plate Detection which utilizes Tensor Flow Object Detection Model (TFOD) to detect license plates using OCR technology',
  //   techStack: ['JavaScript', 'jQuery', 'Turn.js', 'AJAX', 'PHP', 'MySQL'],
  //   category: 'Web Development'
  // }
];

const categories = ['All', 'Full Stack', 'AI/ML', 'Web Development', 'Data Analytics'];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryIcon = (category) => {
    const icons = {
      'Full Stack': '🚀',
      'AI/ML': '🤖',
      'Web Development': '💻',
      'Data Analytics': '📊'
    };
    return icons[category] || '💡';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Full Stack': 'from-blue-500 to-cyan-500',
      'AI/ML': 'from-purple-500 to-pink-500',
      'Web Development': 'from-green-500 to-teal-500',
      'Data Analytics': 'from-orange-500 to-red-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <section id="projects" className="min-h-screen py-20 px-4">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto">
            
            {/* Header Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">💼</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  My Projects
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore my diverse portfolio of projects spanning full-stack development, AI/ML, data analytics, and IoT solutions.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md border border-gray-200/50'
                  }`}
                >
                  {category === 'All' ? '🎯 All Projects' : `${getCategoryIcon(category)} ${category}`}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 ${
                    project.featured ? 'ring-2 ring-blue-400/20' : ''
                  }`}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      ⭐ Featured
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${getCategoryColor(project.category)}`}>
                      {getCategoryIcon(project.category)} {project.category}
                    </span>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200/50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                            +{project.techStack.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {(project.title !== 'Covid-19 Dashboard using Power BI' &&
                        project.title !== 'Flipbook Library' &&
                        project.title !== 'Sentiment Analysis of Voice Calls' &&
                        project.title !== 'Smart Irrigation System and Water Level Sensing') && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-center transition-all duration-300 hover:from-purple-600 hover:to-blue-600 hover:shadow-lg transform hover:scale-105"
                        >
                          🔗 View Project
                        </a>
                      )}
                      
                      {project.source && (
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium transition-all duration-300 hover:bg-gray-200 hover:shadow-md"
                        >
                          📁 Source
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(project.category)} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};